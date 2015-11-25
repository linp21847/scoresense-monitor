chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.msg) {
		case "state":
			sendResponse({state: CreditReportExtractor.getState().status});
			break;

		case "get-data":
			chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
				var curTab = tabs[0];

				chrome.tabs.sendMessage(curTab.id, {msg: "get-data"}, function(response) {
					// console.log(response);
				});
			})
			sendResponse({success: true});
			break;

		case "scores":
			var scores = request.data;
			CreditReportExtractor.setCreditScores(scores);
			break;

		case "cr-url":
			var url = request.data;
			CreditReportExtractor.start(url);
			break;

		case "accounts":
			var accounts = request.data,
				inquiries = request.inquiries,
				fraud = request.fraud,
				public = request.public,
				image = request.image,
				personal = request.personal;

			CreditReportExtractor.setAccounts(personal, inquiries, fraud, public, accounts, image);
			chrome.tabs.remove(sender.tab.id);
			break;

		case "images":
			sendResponse({
				name: CreditReportExtractor.personal.name,
				data: CreditReportExtractor.images
			});
			break;

		case "account-detail":
			var accDetailInfo = request.data,
				image = request.image;

			chrome.tabs.remove(sender.tab.id);
			CreditReportExtractor.setAccountDetailInfo(accDetailInfo, image);
			break;

		case "exception":
			console.log(request.data);
			break;

		case "export-data":
			// console.log("Export data request...");
			sendResponse({success: true});
			break;

		case "stop":
			sendResponse({success: "ok"});
			chrome.tabs.remove(sender.tab.id);
			CreditReportExtractor.stop();
			break;

		case "close-tab":
			chrome.tabs.remove(sender.tab.id);
			break;

		default:
			break;
	}
});