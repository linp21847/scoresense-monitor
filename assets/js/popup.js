console.log("Popup is loading...");

$(document).ready(function() {
	$("#get-data").click(function() {
		chrome.extension.sendMessage({msg: "get-data"}, function() {
			console.log("Response for get-data");
		})
	});
})