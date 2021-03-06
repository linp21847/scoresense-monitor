var stateCodes = [["Alabama", "al", "49802"],
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

var CreditReportExtractor = {
	status: JSON.parse(localStorage.getItem("status") || JSON.stringify(false)),

	// images: JSON.parse(localStorage.getItem("images") || JSON.stringify([])),

	creditReportUrl: JSON.parse(localStorage.getItem("creditReportUrl") || JSON.stringify("")),

	accounts: JSON.parse(localStorage.getItem("accounts") || JSON.stringify([])),

	results: JSON.parse(localStorage.getItem("results") || JSON.stringify([])),

	scores: JSON.parse(localStorage.getItem("scores") || JSON.stringify({})),

	curItem: JSON.parse(localStorage.getItem("curItem") || JSON.stringify({})),

	personal: JSON.parse(localStorage.getItem("personal") || JSON.stringify({})),

	fraud: JSON.parse(localStorage.getItem("fraud") || JSON.stringify({})),

	inquiries: JSON.parse(localStorage.getItem("inquiries") || JSON.stringify([])),

	public: JSON.parse(localStorage.getItem("public") || JSON.stringify([])),

	cluster: JSON.parse(localStorage.getItem("cluster") || JSON.stringify({bank:[], closed: [], installment: []})),

	start: function(url) {
		this.results = [];
		// this.images = [];
		this.creditReportUrl = url;
		this.status = true;
		this.saveState();
	},

	export: function() {
		var self = this;

		self.creditReportUrl = "";
		self.accounts = [];
		self.doCluster();

		$.ajax({
			//	For Dev machine
			// url: "http://layth.local/apis/insertData.php",

			//	For Staging server
			url: "http://162.243.49.141/apis/insertData.php",
			method: "post",
			data: {
				data: JSON.stringify(
					{
						personal: self.personal,
						fraud: self.fraud,
						cluster: self.cluster,
						inquiries: self.inquiries,
						public: self.public,
						scores: self.scores
					})
			},
			success: function(response) {
				response = JSON.parse(response);
				id = response.id;
				//	For Dev machine
				// chrome.tabs.create({url: "http://layth.local/index.php?id=" + id});
				//	For Staging server
				chrome.tabs.create({url: "http://162.243.49.141/index.php?id=" + id});
			},
			error: function() {
				console.log("Error found.");
			}
		});
	},

	stop: function() {
		var self = this;

		self.status = false;
		self.saveState();
	},

	saveState: function() {
		localStorage.setItem("status", JSON.stringify(this.status));
		localStorage.setItem("scores", JSON.stringify(this.scores));
		localStorage.setItem("creditReportUrl", JSON.stringify(this.creditReportUrl));
		localStorage.setItem("accounts", JSON.stringify(this.accounts));
		localStorage.setItem("results", JSON.stringify(this.results));
		// localStorage.setItem("images", JSON.stringify(this.images));
		localStorage.setItem("curItem", JSON.stringify(this.curItem));
		localStorage.setItem("personal", JSON.stringify(this.personal));
		localStorage.setItem("fraud", JSON.stringify(this.fraud));
		localStorage.setItem("inquiries", JSON.stringify(this.inquiries));
		localStorage.setItem("public", JSON.stringify(this.public));
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
			// images: JSON.parse(localStorage.getItem("images") || JSON.stringify([])),
			inquiries: JSON.parse(localStorage.getItem("inquiries") || JSON.stringify([])),
			public: JSON.parse(localStorage.getItem("public") || JSON.stringify([])),
			personal: JSON.parse(localStorage.getItem("personal") || JSON.stringify({})),
			fraud: JSON.parse(localStorage.getItem("fraud") || JSON.stringify({})),
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
			self.creditReportTabId = tab.id;
		});
	},

	setAccounts: function(personal, inquiries, fraud, public, items) {
		var self = this,
			accounts = [],
			publicRecords = [];

		// self.images = [];
		// self.images.push(image);

		for (var i = 0; i < items.length; i++) {
			var item = items[i],
				tempAccount = {
						name: item.name,
						accountCategory: item.accountCategory,
						condition: item.condition,
						detailViewLink: item.detailViewLink,
						accountNumber: self.refine(item.accountNumber, "acc-num"),
						balance: self.refine(item.balance, "balance"),
						type: self.refine(item.type, "type"),
						payStatus: self.refine(item.payStatus),
						latePaymentDates: item.latePaymentDates
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

		for (var i = 0; i < public.length; i ++) {
			var item = public[i],
				temp = {
					name: self.refine(item.name, "name"),
					type: self.refine(item.type),
					date: self.refine(item.date, "birthday"),
					status: self.refine(item.status),
					accountNumber: self.refine(item.accountNumber, "acc-num"),
					amount: self.refine(item.amount, "balance")
				};

			publicRecords.push(temp);
		}
		self.inquiries = inquiries;
		self.accounts = accounts;
		self.fraud = fraud;
		self.public = publicRecords;
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
				// console.log(self.curItem);
			});
		} else {
			self.curItem = {};
			// self.stop();
			self.export();
			// self.downloadImage();
		}
	},

	// downloadImage: function() {
	// 	chrome.tabs.create({url: chrome.extension.getURL("assets/html/options.html")});
	// },

	setAccountDetailInfo: function(detailInfo) {
		var self = this;

		// self.images.push(image);

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
			retailCards = [],
			closedAccounts = [],
			authorizedAccounts = [],
			installmentAccounts = [];

		for (var i = 0; i < accs.length; i++) {
			var curAcc = accs[i];

			if (curAcc.remark.toLowerCase().indexOf("closed") !== -1) {
				closedAccounts.push(curAcc);
			} else if ((curAcc.accountCategory || "").toLowerCase().indexOf("collection accounts") === 0) {
				closedAccounts.push(curAcc);
			} else if ((curAcc.condition[0].trim().toLowerCase().indexOf("transferred") !== -1) ||
				(curAcc.condition[1].trim().toLowerCase().indexOf("transferred") !== -1) ||
				(curAcc.condition[2].trim().toLowerCase().indexOf("transferred") !== -1)) {
				closedAccounts.push(curAcc);
			} else if (curAcc.responsibility.toLowerCase().indexOf("authorized user") !== -1) {
				authorizedAccounts.push(curAcc);
			} else if (curAcc.type.toLowerCase().indexOf("charge account") !== -1) {
				retailCards.push(curAcc);
			} else if (curAcc.type.toLowerCase().indexOf("credit card") !== -1 ||
				curAcc.type.toLowerCase().indexOf("business") !== -1) {
				bankAccounts.push(curAcc);
			} else {
				installmentAccounts.push(curAcc);
			}
		}

		self.cluster = {
			bank: bankAccounts,
			retail: retailCards,
			installment: installmentAccounts,
			authorized: authorizedAccounts,
			closed: closedAccounts
		};
		self.saveState();

		return self.cluster;
	},

	init: function() {
		// console.log("Credit Report Extractor initialized.");
	}
}
