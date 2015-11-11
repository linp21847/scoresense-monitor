console.log("Background Script is loading....");

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.msg) {
		case "state":
			sendResponse({state: CreditReportExtractor.status});
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
			var accounts = request.data;
			console.log(accounts);
			CreditReportExtractor.setAccounts(accounts);
			// chrome.tabs.remove(sender.tab.id);
			break;

		case "account-detail":
			var accDetailInfo = request.data;
			console.log(accDetailInfo);
			CreditReportExtractor.setAccountDetailInfo(sender.tab.id, accDetailInfo);
			chrome.tabs.remove(sender.tab.id);
			break;

		case "export-data":
			console.log("Export data request...");
			sendResponse({success: true});
			break;

		default:
			break;
	}
})