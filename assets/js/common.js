var CreditReportExtractor = {
	status: false,

	creditReportUrl: "",

	accounts: [],

	start: function(url) {
		this.creditReportUrl = url;
		this.status = true;
	},

	saveState: function() {
		localStorage.setItem("status", JSON.stringify(this.status));
		localStorage.setItem("creditReportUrl", JSON.stringify(this.creditReportUrl));
		localStorage.setItem("accounts", JSON.stringify(this.accounts));
	},

	getState: function() {
		return {
			status: JSON.parse(localStorage.getItem("status") || JSON.stringify(false)),
			creditReportUrl: JSON.parse(localStorage.getItem("creditReportUrl") || JSON.stringify("")),
			accounts: JSON.parse(localStorage.getItem("accounts") || JSON.stringify([]))
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

	setAccounts: function(items) {
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

		self.accounts = accounts;
		self.getMoreInfo();
	},

	refine: function(items, flag) {
		var self = this,
			result = "";
		switch(flag) {
			case "acc-num":
			case "type":
				result = items[0];

				for(var i = 1; i < items.length; i++) {
					if (items[i].length > result.length)
						result = items[i];
				}
				break;

			case "balance":
				result = parseInt(items[0].substr(1));
				for (var i = 0; i < items.length; i++) {
					if (parseInt(items[i].substr(1)) > result) {
						result = parseInt(items[i].substr(1));
					}
				}
				break;

			default:
				result = items[0];
				break;
		}

		return result;
	},

	getMoreInfo: function() {
		var self = this,
			accounts = self.accounts;

		for (var i = 0; i < 2/*accounts.length*/; i++) {
			chrome.tabs.create({url: accounts[i].detailViewLink}, function(tab) {
				self.accounts[i].tabId = tab.id;
			});
		}
	},

	setAccountDetailInfo: function(tabId, detailInfo) {
		var self = this,
			curIndex = 0;

		for (; curIndex < self.accounts.length; curIndex++) {
			if (self.accounts[curIndex].tabId === tabId)
				break;
		}

		self.accounts[curIndex].highBalance = self.refine(detailInfo.highBalance, "balance");
		self.accounts[curIndex].limit = self.refine(detailInfo.limit, "limit");
		self.accounts[curIndex].payment = self.refine(detailInfo.payment, "payment");
		self.accounts[curIndex].opened = self.refine(detailInfo.opened, "opened");
		self.accounts[curIndex].reported = self.refine(detailInfo.reported, "report");
		self.accounts[curIndex].responsibility = self.refine(detailInfo.responsibility);
		self.accounts[curIndex].remark = self.refine(detailInfo.remarkString, "remark");
		self.accounts[curIndex].latePayments = self.refine(detailInfo.latePayments, "latePayments");

		delete self.accounts[curIndex].tabId;
	},

	init: function() {
		console.log("Credit Report Extractor initialized.");
	}
}