var stateCodes = [
					["Alabama", "al", "49802"],
					["Alaska", "ak", "76816"],
					["Arizona", "az", "55371"],
					["Arkansas", "ar", "47047"],
					["California", "ca", "63544"],
					["Colorado", "co", "66870"],
					["Connecticut", "ct", "73424"],
					["Delaware", "de", "62771"],
					["District of Columbia", "dc", "84730"],
					["Florida", "fl", "52125"],
					["Georgia", "ga", "53127"],
					["Hawaii", "hi", "66588"],
					["Idaho", "id", "51499"],
					["Illinois", "il", "61450"],
					["Indiana", "in", "53050"],
					["Iowa", "ia", "59977"],
					["Kansas", "ks", "58548"],
					["Kentucky", "ky", "47977"],
					["Louisiana", "la", "49159"],
					["Maine", "me", "54351"],
					["Maryland", "md", "76248"],
					["Massachusetts", "ma", "69395"],
					["Michigan", "mi", "53450"],
					["Minnesota", "mn", "65067"],
					["Mississippi", "ms", "44523"],
					["Missouri", "mo", "52188"],
					["Montana", "mt", "55262"],
					["Nebraska", "ne", "60334"],
					["Nevada", "nv", "56071"],
					["New Hampshire", "nh", "67677"],
					["New Jersey", "nj", "70933"],
					["New Mexico", "nm", "52166"],
					["New York", "ny", "60502"],
					["North Carolina", "nc", "52151"],
					["North Dakota", "nd", "63989"],
					["Ohio", "oh", "53960"],
					["Oklahoma", "ok", "52279"],
					["Oregon", "or", "56398"],
					["Pennsylvania", "pa", "56505"],
					["Rhode Island", "ri", "62724"],
					["South Carolina", "sc", "50493"],
					["South Dakota", "sd", "57630"],
					["Tennessee", "tn", "49552"],
					["Texas", "tx", "57174"],
					["Utah", "ut", "58110"],
					["Vermont", "vt", "61812"],
					["Virginia", "va", "66585"],
					["Washington", "wa", "65215"],
					["West Virginia", "wv", "46103"],
					["Wisconsin", "wi", "59064"],
					["Wyoming", "wy", "64902"]];

var tablesToExcel = (function() {
		var uri = 'data:application/vnd.ms-excel;base64,'
		, tmplWorkbookXML = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'
			+ '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Paul Lin</Author><Created>{created}</Created></DocumentProperties>'
			+ '<Styles>'
			+ '<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>'
			+ '<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>'
			+ '</Styles>' 
			+ '{worksheets}</Workbook>'
		, tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>'
		, tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>'
		, base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
		, format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
		return function(tables, wsnames, wbname, appname) {
			var ctx = "";
			var workbookXML = "";
			var worksheetsXML = "";
			var rowsXML = "";

			for (var i = 0; i < tables.length; i++) {
				if (!tables[i].nodeType) tables[i] = document.getElementById(tables[i]);
				for (var j = 0; j < tables[i].rows.length; j++) {
					rowsXML += '<Row>'
					for (var k = 0; k < tables[i].rows[j].cells.length; k++) {
						var dataType = tables[i].rows[j].cells[k].getAttribute("data-type");
						var dataStyle = tables[i].rows[j].cells[k].getAttribute("data-style");
						var dataValue = tables[i].rows[j].cells[k].getAttribute("data-value");
						dataValue = (dataValue)?dataValue:tables[i].rows[j].cells[k].innerHTML;
						var dataFormula = tables[i].rows[j].cells[k].getAttribute("data-formula");
						dataFormula = (dataFormula)?dataFormula:(appname=='Calc' && dataType=='DateTime')?dataValue:null;

						if (dataFormula)
							console.log(dataFormula);

						ctx = {	attributeStyleID: (dataStyle=='Currency' || dataStyle=='Date')?' ss:StyleID="'+dataStyle+'"':''
									 , nameType: (dataType=='Number' || dataType=='DateTime' || dataType=='Boolean' || dataType=='Error')?dataType:'String'
									 , data: (dataFormula)?'':dataValue
									 , attributeFormula: (dataFormula)?' ss:Formula='+dataFormula+'':''
									};
						rowsXML += format(tmplCellXML, ctx);
					}
					rowsXML += '</Row>'
				}
				ctx = {rows: rowsXML, nameWS: wsnames[i] || 'Sheet' + i};
				worksheetsXML += format(tmplWorksheetXML, ctx);
				rowsXML = "";
			}

			ctx = {created: (new Date()).getTime(), worksheets: worksheetsXML};
			workbookXML = format(tmplWorkbookXML, ctx);



			var link = document.createElement("A");
			link.href = uri + base64(workbookXML);
			link.download = wbname || 'Workbook.xls';
			link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	})();

	getStateCodeTable = function() {
			var $table = $("<table/>", {id: "state-codes-sheet"}),
				$tbody = $("<tbody/>");

			for (var i = 0; i < stateCodes.length; i++) {
				var stateCode = stateCodes[i],
					$tempRec = $("<tr/>");

				for (var j = 0; j < stateCode.length; j++)
					$tempRec.append($("<td/>").text(stateCode[j]));

				$tempRec.appendTo($tbody);
			}

			$tbody.appendTo($table);
			return $table;
		};

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

	download: function() {
		console.log("Download...");

		var $tableContainer = $("<div/>", {id: "hidden-table-container"}).append(
					CreditReportExtractor.getCalculatorSheet(),
					CreditReportExtractor.getVerificationCallSheet(),
					CreditReportExtractor.getSummarySheet(),
					getStateCodeTable()
				),
			tables = ["calculator-worksheet", "verification-call-worksheet", "summary-sheet", "state-codes-sheet"],
			names = ["Calculator", "Verification Call", "Summary", "Sate codes"];
		$tableContainer.appendTo($("body"));
		tablesToExcel(tables, names, "download.xls", "Excel");
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
			case "limit":
			case "payment":
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
				$("<td/>").text(item.latePayments["30"] + "/30-" + 
							item.latePayments["60"] + "/60-" + 
							item.latePayments["90"] + "/90")//item.latePayments["30"])
			);

			$record.appendTo($container);
		}
	},

	getCalculatorSheet: function() {
		var self = this,
			bank = self.cluster.bank,
			closed = self.cluster.closed,
			installment = self.cluster.installment,
			$table = $("<table/>", {id: "calculator-worksheet", border:1});

		//	Bank accounts secion
		$table.append($("<tr/>").append($("<td/>", {colspan: 17}).css('font-weight', 'bold').text("Bank Cards")));
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
					$("<td/>").text('=B' + (3 + i) + '/C' + (3 + i)),
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


		//	Retail cards sction
		$table.append($("<tr/>").append($("<td/>", {colspan: "17"}).text("Retail Cards")));
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

		//	Bank accounts summary section
		$record = $("<tr/>").append(
				$("<td/>").text("SUM:"),
				$("<td/>").text("=SUM(B3:B" + (2 + bank.length + 3) + ")"),
				$("<td/>").text("=SUM(C3:C" + (2 + bank.length + 3) + ")"),
				$("<td/>").text("Total Amt to Pay:"),
				$("<td/>").text("=SUM(E3:E" + (2 + bank.length + 3) + ")"),
				$("<td/>", {colspan:12})
			);
		$record.appendTo($table);

		addBlankRecord();

		$record = $("<tr/>").append(
				$("<td/>"),
				$("<td/>"),
				$("<td/>").text("Debt to credit ratio"),
				$("<td/>").text("=MAX(D3:D" + (2 + bank.length + 3) + ")"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>").text("Highest Balance Held Ratio"),
				$("<td/>").text("=MAX(J3:J" + (2 + bank.length + 3) + ")"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>").text("Oldest Account"),
				$("<td/>").text("=MAX(M3:M" + (2 + bank.length + 3) + ")"),
				$("<td/>", {colspan:3})
			);
		$record.appendTo($table);

		addBlankRecord();

		$record = $("<tr/>").append(
				$("<td/>"),
				$("<td/>"),
				$("<td/>").text("Aggregate "),
				$("<td/>").text("=B" + (2 + bank.length + 4) + "/C" + (2 + bank.length + 4)),
				$("<td/>", {colspan:13})
			);
		$record.appendTo($table);


		// Closed Accounts With Balance and/or lates
		$("<tr/>").append($("<td/>", {colspan:4}).text("Closed Accounts With Balances and/or Lates"), $("<td/>", {colspan:13})).appendTo($table);
		$("<tr><td>Account Name</td><td>Account Type</td><td>Balance</td><td>Account Number</td>" +
			"<td>Payment Status</td><td>Account Status</td><td></td><td></td>" +
			"<td>Date Opened</td><td>Last Reported</td><td>30 Days Late</td><td>60 Days Late</td>" +
			"<td>90 Days Late</td><td>120 Days Late</td><td colspan='3'></td></tr>").appendTo($table);

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
						$("<td/>"),
						$("<td/>"),
						$("<td/>").text(item.opened),
						$("<td/>").text(item.reported),
						$("<td/>").text(item.latePayments['30']),
						$("<td/>").text(item.latePayments['60']),
						$("<td/>").text(item.latePayments['90']),
						$("<td/>").text(""),
						$("<td/>", {colspan:3})
					);

			$curRecord.appendTo($table);
		}

		// Authorized User accounts
		$("<tr/>").append($("<td/>", {colspan: 4}).text("Authorized User Accounts"), $("<td/>", {colspan:13})).appendTo($table);
		$("<tr/>").append($("<td>Account Name</td><td>Balance</td><td>Limit</td><td>Debt to Credit Ratio</td>" +
							"<td>Amount to Pay</td><td>Balance</td><td>Account Number</td><td></td>" +
							"<td>Inquiries</td><td>Date</td><td>Experian</td><td>Equifax</td>" +
							"<td>Transunion</td><td>Type of Inquiry</td><td colspan='3'></td>")).appendTo($table);

		addBlankRecord();

		// Installment accounts
		$("<tr/>").append($("<td/>", {colspan: 4}).text("Installment Accounts"), $("<td/>", {colspan:13})).appendTo($table);
		$("<tr/>").append($("<td>Account Name</td><td>Type of Loan</td><td>Balance</td><td>Monthly Payment</td>" +
							"<td>Date Opened</td><td>Age</td><td>Lates</td>" +
							"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td colspan='3'></td>")).appendTo($table);

		for (var i = 0; i < installment.length; i++) {
			var item = installment[i],
				$curRecord = $("<tr/>").append(
						$("<td/>").text(item.name),
						$("<td/>").text(item.type),
						$("<td/>").text("$" + item.balance),
						$("<td/>").text(item.payment),
						$("<td/>").text(item.opened),
						$("<td/>").text('=DATEDIF(E' + 16 + bank.length + closed.length + installment.length + ',TODAY(),"Y")'),
						$("<td/>").text(item.latePayments["30"] + "/30-" + 
							item.latePayments["60"] + "/60-" + 
							item.latePayments["90"] + "/90"),
						$("<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td colspan='3'></td>")
					);

			$curRecord.appendTo($table);
		}

		addBlankRecord();

		//	Credit scores section
		$("<tr/>").append($("<td>Credit Scores</td><td colspan='16'></td>")).appendTo($table);
		$("<tr/>").append(
				$("<td/>").text("Experian"),
				$("<td/>").text("Equifax"),
				$("<td/>").text("Transunion"),
				$("<td/>", {colspan:14})
			).appendTo($table);
		$("<tr/>").append(
				$("<td/>").text(self.scores.Experian),
				$("<td/>").text(self.scores.Equifax),
				$("<td/>").text(self.scores.Transunion),
				$("<td/>", {colspan:14})
			).appendTo($table);
		$("<tr/>").append(
				$("<td/>").text("Age of Client"),
				$("<td/>").text(self.personal.birthday),
				$("<td/>").text("=2015-B" + (21 + bank.length + closed.length + installment.length)),
				$("<td/>", {colspan:14})
			).appendTo($table);

		return $table;
	},

	getVerificationCallSheet: function() {
		var $table = $("<table/>", {id: "verification-call-worksheet"}),
			$tbody = $("<tbody/>"),
			addBlankRecord = function() {
				$("<tr/>", {colspan: 12}).appendTo($tbody);
			}

		$("<tr/>").append(
				$("<td/>").text("CORPORATION PROFILE"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>").text("Go into Sheet 3 and ask which type of cards they have for Chase, Bank of America, Citi, and Capital One (if any)")
			).appendTo($tbody);
		
		$("<tr>" +
			"<td>Business Name:</td>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td></td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Mailing Address:</td>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td>Suite #</td>" +
			"<td></td><td></td>" +
			"<td></td><td>       Verify Address on ID and Application</td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Mailing Cont.:</td>" +
			"<td>City</td>" +
			"<td></td><td></td><td></td>" +
			"<td>State</td><td></td>" +
			"<td>ZIP Code</td>" +
			"<td></td><td></td>" +
			"<td></td><td>       Funding Estimate Amounts.</td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Tax Identification No.:</td>" +
			"<td></td><td></td>" +
			"<td># of Employees:</td><td></td>" +
			"<td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       Seek Fee.</td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Phone Number:</td>" +
			"<td></td><td></td>" +
			"<td>Web Domain:</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       Multiple applications will be sent for credit cards.</td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Type of Entity:</td>" +
			"<td></td><td></td>" +
			"<td>State of Incorporation:</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       Funding Status Update</td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Nature of Business:</td>" +
			"<td></td><td></td>" +
			"<td>Services Provided:</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       APR, both introductory and ongoing rates.</td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Business Incorp Date:</td>" +
			"<td></td><td></td>" +
			"<td>Business Start Date:</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       Timeline of funding process.</td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Business Gross Income</td>" +
			"<td></td><td></td>" +
			"<td>Net Profit</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       Do’s and don’ts of credit report.</td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td>       How to handle bank calls and emails.</td>" +
		"</tr>").appendTo($tbody);



		$("<tr>" +
			"<td>GUARANTOR INFO</td><td></td><td></td>" +
			"<td>Industry Experience:</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       Invoicing and Liquidation Instructions.</td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>Full Name:</td>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       Does client understand APR, both introductory and ongoing rates?  </td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td></td><td>Last</td><td></td>" +
			"<td>First</td><td></td><td></td><td></td>" +
			"<td>Middle Name</td><td></td><td></td>" +
			"<td></td><td>       Timeline of funding process:  </td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>Mailing Address:</td>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td>Suite #</td>" +
			"<td></td><td></td>" +
			"<td></td><td>       Do’s and don’ts of funding process:  </td>" +
		"</tr>").appendTo($tbody);
		
		$("<tr>" +
			"<td>Mailing Cont.:</td>" +
			"<td>City</td>" +
			"<td></td><td></td><td></td>" +
			"<td>State</td><td></td>" +
			"<td>ZIP Code</td>" +
			"<td></td><td></td>" +
			"<td></td><td>       How to handle bank calls:  </td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>Social Security Number:</td><td></td><td></td>" +
			"<td>Birth Date:</td><td></td><td></td><td></td>" +
			"<td>Age</td><td></td><td></td>" +
			"<td></td><td>       Who their Seek Funding Coordinator is:</td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>Home Phone Number:</td><td></td><td></td>" +
			"<td>Cell Number:</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
			"<td></td><td>       Additional Comments:</td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>Email Address:</td><td></td><td></td>" +
			"<td>Mother’s Maiden Name:</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>Time at Residence:</td><td></td><td></td>" +
			"<td>Gross Annual Income:</td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>Drivers License:</td><td></td>" +
			"<td>State:</td><td></td>" +
			"<td>Issue Date:</td><td></td><td></td>" +
			"<td>Expiration:</td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		addBlankRecord();

		$("<tr>" +
			"<td>Seek Additional Info</td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>1. Income used for Personal Or Business?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>2. Business Projection Used?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>3. Business address used on application? (Cannot Be P.O. BOX)</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>4. Time in business?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>5. Business Name Used? Business may have other names such as DBA,</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		addBlankRecord();

		$("<tr>" +
			"<td>Business Questions:</td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>1. Can they receive mail at business address?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>2. Does client have business checking account? What Bank? How much in deposits?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>3. Are there business Derrogatories/BK?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>4. Are there any existing business accounts?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>5. If Yes, Need name of Bank, Credit Limits, Balances, Average monthly payment being made, current/delinquent on account</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		addBlankRecord();

		$("<tr>" +
			"<td>Personal Questions:</td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>1. Can they receive mail at personal address?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>2. Personal BK in the past?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>3. Personal Checking/Savings? What Banks? Current Deposit amounts? (If BOFA/CHASE-also ask last deposit amount, how much, when?)</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>4. Vehicles registered under PG (Year, Model, Color)?</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>5. College Graduated at? Year? Major? Any Special Degrees/License? (Example: real estate License)</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>6. Who else lives in the household? Need First,Middle,Last name for everyone in the household along with Date of Birth</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		$("<tr>" +
			"<td>7. Do they have personal credit cards with BofA/Chase? Last few purchases made, amount, due dates of each account.</td>" +
		"</tr>").appendTo($tbody);
		$("<tr>" +
			"<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>" +
		"</tr>").appendTo($tbody);

		addBlankRecord();

		$("<tr>" +
			"<td>Go into Sheet 3 and ask which type of cards they have for Chase, Bank of America, Citi, and Capital One (if any)</td>" +
		"</tr>").appendTo($tbody);

		$tbody.appendTo($table);

		return $table;
	},

	getSummarySheet: function() {
		var self = this,
			$table = $("<table/>", {id: "summary-sheet"}),
			$tbody = $("<tbody/>"),
			score = self.scores,
			getMultipleTDs = function(count) {
				var result = "";

				for(var i = 0; i < count; i++) {
					result += "<td></td>";
				}
				return result;
			};

		$("<tr/>").append($("<td></td><td>Tier 1</td><td>Tier 2</td><td>Tier 3</td><td></td>" +
			"<td></td><td>Inputs</td><td></td><td></td><td>Credit Score</td>")).appendTo($tbody);
		$("<tr/>").append(
				$("<td/>").text("Credit Score"),
				$("<td/>").text("720+"),
				$("<td/>").text("690-719"),
				$("<td/>").text("660-689"),
				$("<td/>").text(""),
				$("<td/>").text("Credit Score"),
				$("<td/>").text(""),
				$("<td/>").text("0")
			).appendTo($tbody);

		$("<tr/>").append($(getMultipleTDs(9) + "<td>Experian</td>" +
			"<td>Equifax</td><td>Transunion</td>")).appendTo($tbody);
		$("<tr/>").append($(getMultipleTDs(9) + "<td>" + score.Experian + "</td>" +
			"<td>" + score.Equifax + "</td><td>" + score.Transunion + "</td>")).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Debt to Credit Ratio"),
				$("<td/>").text("0-45%"),
				$("<td/>").text("46-50%"),
				$("<td/>").text("51-65%"),
				$("<td/>").text(""),
				$("<td/>").text("Highest Utilization"),
				$("<td/>").text("=Calculator!D32"),
				$("<td/>").text('=IF(AND($G$5>=0.1,$G$5<=0.45),"Tier 1",(IF(AND($G$5>=0.46,$G$5<=0.5),"Tier 2",(IF(AND($G$5>=0.51,$G$5<=0.65),"Tier 3",(IF(AND($G$5>=0.66,$G$5<=1),"DECLINE",)))))))')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text(""),
				$("<td/>").text(""),
				$("<td/>").text(""),
				$("<td/>").text(""),
				$("<td/>").text(""),
				$("<td/>").text("Aggregate Utilization"),
				$("<td/>").text("=Calculator!D34"),
				$("<td/>").text('')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Minimum # of open Lines"),
				$("<td/>").text("3"),
				$("<td/>").text("2"),
				$("<td/>").text("2"),
				$("<td/>").text(""),
				$("<td/>").text("Minimum # of open Lines"),
				$("<td/>").text("0"),
				$("<td/>").text('=IF(AND($G$7>=0,$G$7<=1.9),"DECLINE",(IF(AND($G$7>=2,$G$7<=2.9),"Tier 2 Or Tier 3",(IF(AND($G$7>=3,$G$7<=99),"Tier 1",)))))')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Minimum Age of Accounts (oldest)"),
				$("<td/>").text("4"),
				$("<td/>").text("2"),
				$("<td/>").text("2"),
				$("<td/>").text(""),
				$("<td/>").text("Minimum Age of Accounts (oldest)"),
				$("<td/>").text("=Calculator!N32"),
				$("<td/>").text('=IF(AND($G$8>=0,$G$8<=1.9),"DECLINE",(IF(AND($G$8>=2,$G$8<=3.9),"Tier 2 Or Tier 3",(IF(AND($G$8>=4,$G$8<=99),"Tier 1",)))))')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Max # of Inquiries/ per bureau (last 6 months)"),
				$("<td/>").text("2"),
				$("<td/>").text("4"),
				$("<td/>").text("6"),
				$("<td/>").text(""),
				$("<td/>").text("Max # of Inquiries/ per bureau (last 6 months)"),
				$("<td/>").text("0"),
				$("<td/>").text('=IF(AND($G$9>=0,$G$9<=2),"Tier 1",(IF(AND($G$9>=2.1,$G$9<=4),"Tier 2 ",(IF(AND($G$9>=4.1,$G$9<=6),"Tier 3",(IF(AND($G$9>=6.1,$G$9<=99),"DECLINE")))))))')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Max # Derogatories (last 2 years)"),
				$("<td/>").text("0"),
				$("<td/>").text("1"),
				$("<td/>").text("3"),
				$("<td/>").text(""),
				$("<td/>").text("Max # Deragatories 30 days late (last 2 years)"),
				$("<td/>").text("0"),
				$("<td/>").text('=IF(AND($G$10>=0,$G$10<=0.9),"Tier 1",(IF(AND($G$10>=1,$G$10<=1.9),"Tier 2 ",(IF(AND($G$10>=2,$G$10<=3.9),"Tier 3",(IF(AND($G$10>=4,$G$10<=99),"DECLINE")))))))')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Max # Deragatories 30 days late (last 2 years)"),
				$("<td/>").text("0"),
				$("<td/>").text("1"),
				$("<td/>").text("3"),
				$("<td/>").text(""),
				$("<td/>").text("Max # Deragatories 60 days late (last 2 years)"),
				$("<td/>").text("0"),
				$("<td/>").text('=IF($G$11=0,"All Tiers","DECLINE")')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Max # Deragatories 60 days late (last 2 years)"),
				$("<td/>").text("0"),
				$("<td/>").text("0"),
				$("<td/>").text("0"),
				$("<td/>").text(""),
				$("<td/>").text("Max # Derogatories (last 2 years)"),
				$("<td/>").text("0"),
				$("<td/>").text('=IF(AND($G$12>=0,$G$12<=0.9),"Tier 1",(IF(AND($G$12>=1,$G$12<=1.9),"Tier 2 ",(IF(AND($G$12>=2,$G$12<=3.9),"Tier 3",(IF(AND($G$12>=4,$G$12<=99),"DECLINE")))))))')
			).appendTo($tbody);

		$("<tr/>").append($(getMultipleTDs(12))).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Highest Balance Held Ratio (Highest) "),
				$("<td/>").text("60%+"),
				$("<td/>").text("30-60%"),
				$("<td/>").text("0-29%"),
				$("<td/>").text(""),
				$("<td/>").text("Highest Balance Held Ratio (Highest) "),
				$("<td/>").text("=Calculator!J32"),
				$("<td/>").text('=IF(AND($G$14>=0.61,$G$14<=0.99),"Tier 1",(IF(AND($G$14>=0.3,$G$14<=0.6),"Tier 2 ",(IF(AND($G$14>=0,$G$14<=0.29),"Tier 3",)))))')
			).appendTo($tbody);

		$("<tr/>").append($(getMultipleTDs(12))).appendTo($tbody);


		$("<tr/>").append(
				$("<td/>").text("# of Satisifed Accounts"),
				$("<td/>").text("7+"),
				$("<td/>").text("3--6"),
				$("<td/>").text("1--2"),
				$("<td/>").text(""),
				$("<td/>").text("# of Satisifed Accounts"),
				$("<td/>").text("0"),
				$("<td/>").text('=IF(AND($G$16>=7,$G$16<=99),"Tier 1",(IF(AND($G$16>=3,$G$16<=6.9),"Tier 2 ",(IF(AND($G$16>=1,$G$16<=2.9),"Tier 3",(IF(AND($G$16>=0,$G$16<=0.9),"DECLINE")))))))')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Mortgage Holder (Never Late)"),
				$("<td/>").text("yes"),
				$("<td/>").text("no"),
				$("<td/>").text("no"),
				$("<td/>").text(""),
				$("<td/>").text("Mortgage Holder (Never Late)"),
				$("<td/>").text("no"),
				$("<td/>").text('=IF($G$17="yes","Tier 1","Tier 2 Or 3")')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Conservative States "),
				$("<td/>").text("yes"),
				$("<td/>").text("no"),
				$("<td/>").text("no"),
				$("<td/>").text(""),
				$("<td/>").text("Enter State (lower case)"),
				$("<td/>").text("CA"),
				$("<td/>").text('')
			).appendTo($tbody);

		$("<tr/>").append(
				$(getMultipleTDs(5)), 
				$("<td/>").text("Conservative States "),
				$("<td/>").text('=IF(VLOOKUP($G$18,\'State Codes\'!$B$1:$C$51,2,FALSE)>=60000,\"no\",\"yes\")'),
				$("<td/>").text('=IF($G$19="yes","Tier 1","Tier 2 Or 3")')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Age of client"),
				$("<td/>").text("25-60"),
				$("<td/>").text("25-60"),
				$("<td/>").text("22-65"),
				$("<td/>").text(""),
				$("<td/>").text("Year Born"),
				$("<td/>").text("=Calculator!D34"),
				$("<td/>").text('')
			).appendTo($tbody);

		$("<tr/>").append(
				$(getMultipleTDs(5)), 
				$("<td/>").text("Age of client"),
				$("<td/>").text('=2015-G20'),
				$("<td/>").text('=IF(AND($G$21>=25,$G$21<=60),"All Tiers",(IF(AND($G$21>=22,$G$21<=24.9),"Tier 3 ",(IF(AND($G$21>=61,$G$21<=65),"Tier 3",(IF(AND($G$21>=66,$G$21<=99),"DECLINE")))))))')
			).appendTo($tbody);


		$("<tr/>").append(
				$("<td/>").text("Primary Funding Level"),
				$("<td/>").text("$60,000-$90,000"),
				$("<td/>").text("$30,000- $75,000"),
				$("<td/>").text("$10,000- $40,000"),
				$("<td/>").text(""),
				$("<td/>").text("Funding Holdbacks"),
				$("<td/>").text(""),
				$("<td/>").text('')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Secondary Funding Level"),
				$("<td/>").text("$40,000- $70,000"),
				$("<td/>").text("$10,000- $40,000"),
				$("<td/>").text("$5,000- $30,000"),
				$("<td/>").text(""),
				$("<td/>").text("Mortgage Holder (Never Late)"),
				$("<td/>").text("no"),
				$("<td/>").text('=IF($G$23="yes","All Tiers","DECLINE")')
			).appendTo($tbody);

		$("<tr/>").append(
				$(getMultipleTDs(5)), 
				$("<td/>").text("Bankruptcies, Collections, Judgements "),
				$("<td/>").text(''),
				$("<td/>").text('')
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Funding Holdbacks"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>"),
				$("<td/>")
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Age of client"),
				$("<td/>").text("52-60"),
				$("<td/>").text("22-25, 52-60"),
				$("<td/>").text("22-25, 52-60")
			).appendTo($tbody);

		$("<tr/>").append(
				$("<td/>").text("Mortgage Holder (Never Late)"),
				$("<td/>").text("no"),
				$("<td/>").text("no"),
				$("<td/>").text("no")
			).appendTo($tbody);

		$tbody.appendTo($table);

		return $table;
	},

	init: function() {
		console.log("Credit Report Extractor initialized.");
	}
}
