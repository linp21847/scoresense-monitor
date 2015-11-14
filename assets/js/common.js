var CreditReportExtractor = {
	status: JSON.parse(localStorage.getItem("status") || JSON.stringify(false)),

	creditReportUrl: JSON.parse(localStorage.getItem("creditReportUrl") || JSON.stringify("")),

	accounts: JSON.parse(localStorage.getItem("accounts") || JSON.stringify([])),

	results: JSON.parse(localStorage.getItem("results") || JSON.stringify([])),

	scores: JSON.parse(localStorage.getItem("scores") || JSON.stringify({})),

	curItem: JSON.parse(localStorage.getItem("curItem") || JSON.stringify({})),

	personal: JSON.parse(localStorage.getItem("personal") || JSON.stringify({})),

	cluster: JSON.parse(localStorage.getItem("cluster") || JSON.stringify({bank:[], closed: [], installment: []})),

	start: function(url) {
		this.results = [];
		this.creditReportUrl = url;
		this.status = true;
		this.saveState();
	},

	stop: function() {
		this.status = false;
		this.creditReportUrl = "";
		this.accounts = [];

		this.saveState();
	},

	saveState: function() {
		localStorage.setItem("status", JSON.stringify(this.status));
		localStorage.setItem("scores", JSON.stringify(this.scores));
		localStorage.setItem("creditReportUrl", JSON.stringify(this.creditReportUrl));
		localStorage.setItem("accounts", JSON.stringify(this.accounts));
		localStorage.setItem("results", JSON.stringify(this.results));
		localStorage.setItem("curItem", JSON.stringify(this.curItem));
		localStorage.setItem("personal", JSON.stringify(this.personal));
		localStorage.setItem("cluster", JSON.stringify(this.cluster));
	},

	getState: function() {
		return {
			status: JSON.parse(localStorage.getItem("status") || JSON.stringify(false)),
			creditReportUrl: JSON.parse(localStorage.getItem("creditReportUrl") || JSON.stringify("")),
			accounts: JSON.parse(localStorage.getItem("accounts") || JSON.stringify([])),
			scores: JSON.parse(localStorage.getItem("scores") || JSON.stringify({})),
			curItem: JSON.parse(localStorage.getItem("curItem") || JSON.stringify({})),
			results: JSON.parse(localStorage.getItem("results") || JSON.stringify([])),
			personal: JSON.parse(localStorage.getItem("personal") || JSON.stringify({})),
			cluster: JSON.parse(localStorage.getItem("cluster") || JSON.stringify({bank:[], closed: [], installment: []}))
		};
	},

	setCreditScores: function(scores) {
		if (scores.length !== 3) {
			console.log("Unknown scores found...");
		} else {
			this.scores = {
				Experian: scores[0],
				Equifax: scores[1],
				Transunion: scores[2]
			};
			this.saveState();
			this.extractCreditReport();
		}
	},

	extractCreditReport: function() {
		var self = this;

		if (!this.creditReportUrl) {
			console.log("Credit report url should not be empty.");
			return;
		}

		chrome.tabs.create({url: this.creditReportUrl}, function(tab) {
			console.log(tab);
			self.creditReportTabId = tab.id;
		});
	},

	setAccounts: function(personal, items) {
		console.log("Setting accounts in Credit Report Extractor.");
		
		var self = this,
			accounts = [];

		for (var i = 0; i < items.length; i++) {
			var item = items[i],
				tempAccount = {
						name: item.name,
						accountCategory: item.accountCategory,
						detailViewLink: item.detailViewLink,
						accountNumber: self.refine(item.accountNumber, "acc-num"),
						balance: self.refine(item.balance, "balance"),
						type: self.refine(item.type, "type"),
						payStatus: self.refine(item.payStatus)
					};

			accounts.push(tempAccount);
		}

		self.personal = {
							name: self.refine(personal.name, "name"),
							birthday: self.refine(personal.birthday, "birthday"),
							curAddress: self.refine(personal.curAddress, "cur-addr"),
							prevAddress: self.refine(personal.prevAddress, "prev-addr"),
							employer: self.refine(personal.employer, "employer")
						};
		self.accounts = accounts;
		self.saveState();
		self.getMoreInfo();
	},

	refine: function(items, flag) {
		var self = this,
			result = "";
		switch(flag) {
			case "acc-num":
			case "type":
			case "name":
			case "employer":
				result = items[0];

				for(var i = 1; i < items.length; i++) {
					if (items[i].length > result.length)
						result = items[i];
				}
				break;

			case "lates":
				result = parseInt(items[0] || 0);
				for (var i = 0; i < items.length; i++) {
					if (parseInt(items[i].substr(1)) > result) {
						result = parseInt(items[i].substr(1));
					}
				}
				break;

			case "balance":
				result = parseInt(items[0].substr(1) || 0);
				for (var i = 0; i < items.length; i++) {
					if (parseInt(items[i].substr(1)) > result) {
						result = parseInt(items[i].substr(1));
					}
				}
				break;

			case "prev-addr":
				result = [items[0]];
				for (var i = 1; i < items.length; i++) {
					if (items.indexOf(items[i]) !== -1) {
						result.push(items[i]);
					}
				}
				break;

			default:
				result = items[0];
				for (var i = 1; i < items.length; i++) {
					if (!result) {
						result = items[i];
					} else {
						break;
					}
				}
				break;
		}

		return result;
	},

	getMoreInfo: function() {
		var self = this,
			accounts = self.accounts;

		self.curItem = self.accounts.shift();

		if (self.curItem) {
			self.saveState();
			chrome.tabs.create({url: self.curItem.detailViewLink}, function(tab) {
				console.log(self.curItem);
			});
		} else {
			self.curItem = {};
			self.stop();
		}
	},

	setAccountDetailInfo: function(detailInfo) {
		var self = this;

		self.curItem.highBalance = self.refine(detailInfo.highBalance, "balance");
		self.curItem.limit = self.refine(detailInfo.limit, "limit");
		self.curItem.payment = self.refine(detailInfo.payment, "payment");
		self.curItem.opened = self.refine(detailInfo.opened, "opened");
		self.curItem.reported = self.refine(detailInfo.reported, "report");
		self.curItem.responsibility = self.refine(detailInfo.responsibility);
		self.curItem.remark = detailInfo.remarkString;
		self.curItem.latePayments = {
			30: (self.refine(detailInfo.latePayments[30], "lates")),
			60: (self.refine(detailInfo.latePayments[60], "lates")),
			90: (self.refine(detailInfo.latePayments[90], "lates"))
		};

		self.results.push(self.curItem);
		self.saveState();
		self.getMoreInfo();
	},

	doCluster: function() {
		var self = this,
			accs = self.getState().results,
			bankAccounts = [],
			closedAccounts = [],
			installmentAccounts = [];

		for (var i = 0; i < accs.length; i++) {
			var curAcc = accs[i];

			if (curAcc.remark.toLowerCase().indexOf("closed") !== -1) {
				closedAccounts.push(curAcc);
			} else if (curAcc.type.toLowerCase().indexOf("credit card") !== -1) {
				bankAccounts.push(curAcc);
			} else {
				installmentAccounts.push(curAcc);
			}
		}

		self.cluster = {
			bank: bankAccounts,
			installment: installmentAccounts,
			closed: closedAccounts
		};
		self.saveState();

		return self.cluster;
	},

	renderOptionsPage: function() {
		var self = this,
			bank = self.getState().cluster.bank,
			closed = self.getState().cluster.closed,
			installment = self.getState().cluster.installment;
	},

	renderBankAccounts: function(items, $container) {
		var self = this;

		if (!items) 
			items = self.doCluster().bank;

		if (!$container)
			$container = $("tbody#bank-account-table");

		for (var i = 0; i < items.length; i++) {
			item = items[i];
			$record = $("<tr/>", {class: ""});
			$record.append(
				$("<td/>").text(item.name),
				$("<td/>").text("$" + item.balance),
				$("<td/>").text(item.limit),
				$("<td/>").text(item.accountNumber),
				$("<td/>").text("$" + item.highBalance),
				$("<td/>").text(item.opened),
				$("<td/>").text(item.latePayments["30"]),
				$("<td/>").text(item.latePayments["60"]),
				$("<td/>").text(item.latePayments["90"])
			);

			$record.appendTo($container);
		}
	},

	renderClosedAccounts: function(items, $container) {
		var self = this;

		if (!items) 
			items = self.doCluster().closed;

		if (!$container)
			$container = $("tbody#closed-account-table");

		for (var i = 0; i < items.length; i++) {
			item = items[i];

			if (item.remark.toLowerCase().indexOf("paid") > -1)
				accountStatus = "Paid";
			else if (item.remark.toLowerCase().indexOf("closed") > -1)
				accountStatus = "Closed";
			else
				accountStatus = "Unknown";

			$record = $("<tr/>", {class: ""});
			$record.append(
				$("<td/>").text(item.name),
				$("<td/>").text(item.type),
				$("<td/>").text("$" + item.balance),
				$("<td/>").text(item.accountNumber),
				$("<td/>").text(item.payStatus),
				$("<td/>").text(accountStatus),
				$("<td/>").text(item.opened),
				$("<td/>").text(item.latePayments["30"]),
				$("<td/>").text(item.latePayments["60"]),
				$("<td/>").text(item.latePayments["90"])
			);

			$record.appendTo($container);
		}
	},

	renderInstallmentAccounts: function(items, $container) {
		var self = this;

		if (!items) 
			items = self.doCluster().installment;

		if (!$container)
			$container = $("tbody#installment-account-table");

		for (var i = 0; i < items.length; i++) {
			item = items[i];

			$record = $("<tr/>", {class: ""});
			$record.append(
				$("<td/>").text(item.name),
				$("<td/>").text(item.type),
				$("<td/>").text("$" + item.balance),
				$("<td/>").text(item.payment),
				$("<td/>").text(item.opened),
				$("<td/>").text(".....")//item.latePayments["30"])
			);

			$record.appendTo($container);
		}
	},

	getCalculatorSheet: function() {
		var self = this,
			bank = self.cluster.bank,
			closed = self.cluster.closed,
			installment = self.cluster.installment,
			$table = $("<table/>", {id: "calculator-worksheet"});

		$table.append($("<tr/>").append($("<td/>", {colspan: "4"}).text("Bank Cards")));
		$("<tr><td>Account Name</td><td>Balance</td><td>Limit</td><td>Debt to Credit Ratio</td>" +
			"<td>Amount to pay</td><td>New Balance</td><td>Account Number</td><td></td>" +
			"<td>High Balance</td><td>Highest Balance Held Ratio</td><td></td>" +
			"<td>Date Opened</td><td>Age</td><td>30 Days Late</td><td>60 Days Late</td>" +
			"<td>90 Days Late</td><td>120 Days Late</td></tr>").appendTo($table);

		for (var i = 0; i < bank.length; i++) {
			var item = bank[i],
				$curRecord = $("<tr/>").append(
					$("<td/>").text(item.name),
					$("<td/>").text("$" + item.balance),
					$("<td/>").text(item.limit),
					$("<td/>").text("=B" + (3 + i) + "/C" + (3 + i)),
					$("<td/>").text("=IF(C" + (3 + i) + "<=1000,B" + (3 + i) + ",IF(D" + (3 + i) + "<0.4,0,B" + (3 + i) + "-(C" + (3 + i) + "*0.4)))"),
					$("<td/>").text("=B" + (3 + i) + "-E" + (3 + i)),
					$("<td/>").text(item.accountNumber),
					$("<td/>").text(""),
					$("<td/>").text("$" + item.highBalance),
					$("<td/>").text("=I" + (3 + i) + "/C" + (3 + i)),
					$("<td/>").text(""),
					$("<td/>").text(item.opened),
					$("<td/>").text('=DATEDIF(L' + (3 + i) + ',TODAY(),"Y")'),
					$("<td/>").text(item.latePayments[30]),
					$("<td/>").text(item.latePayments[60]),
					$("<td/>").text(item.latePayments[90]),
					$("<td/>").text("")
				);

			$curRecord.appendTo($table);
		}


		$table.append($("<tr/>").append($("<td/>", {colspan: "4"}).text("Retail Cards")));
		$("<tr><td>Account Name</td><td>Balance</td><td>Limit</td><td>Debt to Credit Ratio</td>" +
			"<td>Amount to pay</td><td>New Balance</td><td>Account Number</td><td></td>" +
			"<td>High Balance</td><td>Highest Balance Held Ratio</td><td></td>" +
			"<td>Date Opened</td><td>Age</td><td>30 Days Late</td><td>60 Days Late</td>" +
			"<td>90 Days Late</td><td>120 Days Late</td></tr>").appendTo($table);
		
		var addBlankRecord = function() {
			$blankRecord = $("<tr/>");
			for (var i = 0; i < 17; i++) 
				$blankRecord.append($("<td/>"));
			$blankRecord.appendTo($table);
		}

		addBlankRecord();
		$record = $("<tr/>").append(
				$("<td/>").text("SUM:"),
				$("<td/>").text("=SUM(B3:B" + (2 + bank.length + 3) + ")"),
				$("<td/>").text("=SUM(C3:C" + (2 + bank.length + 3) + ")"),
				$("<td/>").text("Total Amt to Pay:"),
				$("<td/>").text("=SUM(E3:E" + (2 + bank.length + 3) + ")")
			);
		$record.appendTo($table);

		addBlankRecord();

		$record = $("<tr/>").append(
				$("<td/>", {colspan:2}),
				$("<td/>").text("Debt to credit ratio"),
				$("<td/>").text("=MAX(D3:D" + (2 + bank.length + 3) + ")"),
				$("<td/>", {colspan: 4}),
				$("<td/>").text("Highest Balance Held Ratio"),
				$("<td/>").text("=MAX(J3:J" + (2 + bank.length + 3) + ")"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>").text("Oldest Account"),
				$("<td/>").text("=MAX(M3:M" + (2 + bank.length + 3) + ")")
			);
		$record.appendTo($table);

		addBlankRecord();

		$record = $("<tr/>").append(
				$("<td/>", {colspan: 2}),
				$("<td/>").text("Aggregate "),
				$("<td/>").text("=B" + (2 + bank.length + 4) + "/C" + (2 + bank.length + 4))
			);
		$record.appendTo($table);


		// Closed Accounts With Balance and/or lates
		$("<tr/>").append($("<td/>", {colspan:4}).text("Closed Accounts With Balances and/or Lates")).appendTo($table);
		$("<tr><td>Account Name</td><td>Account Type</td><td>Balance</td><td>Account Number</td>" +
			"<td>Payment Status</td><td>Account Status</td><td></td><td></td>" +
			"<td>Date Opened</td><td>Date Reported</td><td>Age</td><td>30 Days Late</td><td>60 Days Late</td>" +
			"<td>90 Days Late</td><td>120 Days Late</td></tr>").appendTo($table);

		for (var i = 0; i < closed.length; i++) {
			var item = closed[i],
				accStatus = (item.remark.toLowerCase().indexOf("paid") > -1) ? "Paid" : "Closed",
				$curRecord = $("<tr/>").append(
						$("<td/>").text(item.name),
						$("<td/>").text(item.type),
						$("<td/>").text("$" + item.balance),
						$("<td/>").text(item.accountNumber),
						$("<td/>").text(item.payStatus),
						$("<td/>").text(accStatus),
						$("<td/>", {colspan: 2}),
						$("<td/>").text(item.opened),
						$("<td/>").text(item.reported),
						$("<td/>").text(item.latePayments['30']),
						$("<td/>").text(item.latePayments['60']),
						$("<td/>").text(item.latePayments['90']),
						$("<td/>").text("")
					);

			$curRecord.appendTo($table);
		}

		// Authorized User accounts
		$("<tr/>").append($("<td/>", {colspan: 4}).text("Authorized User Accounts")).appendTo($table);
		$("<tr/>").append($("<td>Account Name</td><td>Balance</td><td>Limit</td><td>Debt to Credit Ratio</td>" +
							"<td>Amount to Pay</td><td>Balance</td><td>Account Number</td><td></td>" +
							"<td>Inquiries</td><td>Date</td><td>Experian</td><td>Equifax</td>" +
							"<td>Transunion</td><td>Type of Inquiry</td>")).appendTo($table);

		addBlankRecord();

		// Installment accounts
		$("<tr/>").append($("<td/>", {colspan: 4}).text("Installment Accounts")).appendTo($table);
		$("<tr/>").append($("<td>Account Name</td><td>Type of Loan</td><td>Balance</td><td>Monthly Payment</td>" +
							"<td>Date Opened</td><td>Age</td><td>Lates</td><td></td>" +
							"<td></td><td></td><td></td><td></td><td></td><td></td>")).appendTo($table);

		for (var i = 0; i < installment.length; i++) {
			var item = installment[i],
				$curRecord = $("<tr/>").append(
						$("<td/>").text(item.name),
						$("<td/>").text(item.type),
						$("<td/>").text("$" + item.balance),
						$("<td/>").text(item.payment),
						$("<td/>").text(item.opened),
						$("<td/>").text('=DATEDIF(E' + 16 + bank.length + closed.length + installment.length + ',TODAY(),"Y")'),
						$("<td/>").text("...")
					);

			$curRecord.appendTo($table);
		}

		addBlankRecord();
		$("<tr/>").append($("<td>Credit Scores</td>")).appendTo($table);
		$("<tr/>").append(
				$("<td/>").text("Experian"),
				$("<td/>").text("Equifax"),
				$("<td/>").text("Transunion")
			).appendTo($table);
		$("<tr/>").append(
				$("<td/>").text(self.Experian),
				$("<td/>").text(self.Equifax),
				$("<td/>").text(self.Transunion),
				$("<td/>").text("Equifax"),
				$("<td/>").text("Transunion")
			).appendTo($table);
		$("<tr/>").append(
				$("<td/>").text("Age of Client"),
				$("<td/>").text(self.personal.birthday),
				$("<td/>").text("=2015-B" + 21 + bank.length + closed.length + installment.length)
			).appendTo($table);

		return $table;
	},

	init: function() {
		console.log("Credit Report Extractor initialized.");
	}
}
