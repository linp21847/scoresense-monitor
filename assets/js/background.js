chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.msg) {
		case "state":
			sendResponse({state: CreditReportExtractor.getState().status});
			break;

		case "get-data":
			console.log("Get data request...");

			chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
				var curTab = tabs[0];

				chrome.tabs.sendMessage(curTab.id, {msg: "get-data"}, function(response) {
					console.log(response);
				});
			})
			sendResponse({success: true});
			break;

		case "scores":
			var scores = request.data;
			console.log(scores);
			CreditReportExtractor.setCreditScores(scores);
			break;

		case "cr-url":
			var url = request.data;
			console.log(url);
			CreditReportExtractor.start(url);
			break;

		case "accounts":
			var accounts = request.data,
				personal = request.personal;

			console.log(personal);
			CreditReportExtractor.setAccounts(personal, accounts);
			chrome.tabs.remove(sender.tab.id);
			break;

		case "account-detail":
			var accDetailInfo = request.data;
			console.log(accDetailInfo);
			chrome.tabs.remove(sender.tab.id);
			CreditReportExtractor.setAccountDetailInfo(accDetailInfo);
			break;

		case "exception":
			console.log(request.data);
			break;

		case "export-data":
			console.log("Export data request...");
			sendResponse({success: true});
			break;

		default:
			break;
	}
});

$(document).ready(function() {
	$.ig.loader({
		scriptPath: "../js/",
		cssPath: "../css/",
		resources: 'modules/util.js,' +
				   // 'modules/xml.js,' +
				   'modules/documents.core.js,' +
				   'modules/excel.js'
	});
})