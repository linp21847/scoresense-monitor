chrome.extension.sendMessage({msg: "state"}, function(param) {
	$(document).ready(function() {
		if (window.location.hostname === "members2.scoresense.com") {
			var timer = null,
				prevScores = [],
				creditReportURL = "",

				getCreditScoreValues = function() {
					var $scores = $(".credit-score-value-holder"),
						scores = [];

					if ($scores.length > 0) {
						for (var i = 0; i < $scores.length; i++) {
							scores.push($($scores[i]).text());
						}

						if (prevScores.toString() === scores.toString() && scores.length === 3) {
							chrome.extension.sendMessage({msg: "scores", data: scores}, function(res) {
								console.log("Score set function callback");
							});
							clearInterval(timer);
						} else {
							prevScores = scores;
						}
					} 
				};

			chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
				switch(request.msg) {
					case "get-data":
						console.log("Get data request from background script.");

						if (window.location.hash === "#credit") {
							$($(".credit-report-section-tab")[1]).click();
							chrome.extension.sendMessage({msg: "cr-url", data: ($("iframe")[0].src)});
							timer = setInterval(getCreditScoreValues, 1000);
						} else {
							alert("Please click browser icon on credit report page.");
						}
						break;

					default:
						break;
				}
			});
		} else if (window.location.host === "tui.scoresense.com:8443") {
			if (!param.state)
				return false;

			if (window.location.pathname === "/OTProductWeb/flex/productDisplayCenter/begin.do") {
				var $crInfoContainer = $("table tr:nth-child(2) table tr:nth-child(4) td"),
					$crInfoTables = $crInfoContainer.children("table"),
					$personalInfoTable = $($crInfoTables[1]),
					$consumerStatementTable = $($crInfoTables[3]),
					$summaryTable = $($crInfoTables[5]),
					accounts = [],
					accountTypeBuffer = "";

				var parseSummary = function(table) {
						var $records = table.find("tr tr"),
							$totalAccounts = $($records[1]).find("td"),
							$openAccounts = $($records[2]).find("td"),
							$closedAccounts = $($records[3]).find("td"),
							totalAccounts = {
												TransUnion: $($totalAccounts[1]).text(),
												Experian: $($totalAccounts[2]).text(),
												Equifax: $($totalAccounts[3]).text()
											},
							openAccounts = {
												TransUnion: $($openAccounts[1]).text(),
												Experian: $($openAccounts[2]).text(),
												Equifax: $($openAccounts[3]).text()
											},
							closedAccounts = {
												TransUnion: $($closedAccounts[1]).text(),
												Experian: $($closedAccounts[2]).text(),
												Equifax: $($closedAccounts[3]).text()
											};

						return {
							totalAccounts: totalAccounts,
							openAccounts: openAccounts,
							closedAccounts: closedAccounts
						};
					}

				// 	Parsing summary
				console.log(parseSummary($summaryTable));

				var extractPersonalInfo = function($infoContainer) {
					var $name = $($infoContainer.find("table")[2]),
						$birthday = $($infoContainer.find("table")[4]),
						$curAddress = $($infoContainer.find("table")[5]),
						$prevAddress = $($infoContainer.find("table")[6]),
						$employer = $($infoContainer.find("table")[7]),

						personalInfo = {};

					personalInfo.name = [
							$($name.find("tr:nth-child(2) td")[1]).text().trim().replace("\n", " "),
							$($name.find("tr:nth-child(2) td")[2]).text().trim().replace("\n", " "),
							$($name.find("tr:nth-child(2) td")[3]).text().trim().replace("\n", " ")
						];

					personalInfo.birthday = [
							$($birthday.find("tr:nth-child(2) td")[1]).text().trim(),
							$($birthday.find("tr:nth-child(2) td")[2]).text().trim(),
							$($birthday.find("tr:nth-child(2) td")[3]).text().trim()
						];

					personalInfo.curAddress = [
							$($curAddress.find("tr:nth-child(2) td")[1]).text().trim(),
							$($curAddress.find("tr:nth-child(2) td")[2]).text().trim(),
							$($curAddress.find("tr:nth-child(2) td")[3]).text().trim()
						];

					personalInfo.prevAddress = [
							$($prevAddress.find("tr:nth-child(2) td")[1]).text().trim(),
							$($prevAddress.find("tr:nth-child(2) td")[2]).text().trim(),
							$($prevAddress.find("tr:nth-child(2) td")[3]).text().trim()
						];

					personalInfo.employer = [
							$($employer.find("tr:nth-child(2) td")[1]).text().trim(),
							$($employer.find("tr:nth-child(2) td")[2]).text().trim(),
							$($employer.find("tr:nth-child(2) td")[3]).text().trim()
						];

					return personalInfo;
				}

				console.log(extractPersonalInfo($personalInfoTable));

				for (var i = 7; i < $crInfoTables.length; i += 8) {
					var $accountInfoBlock = $($crInfoTables[i]),
						$accountInfoPrevBlock = $accountInfoBlock.prev();

					if ($accountInfoPrevBlock.hasClass("crTradelineGroupHeader")) {
						$accountInfoGroupHeader = $accountInfoPrevBlock.find("b") || {};
						accountTypeBuffer = $accountInfoGroupHeader.text();
						accountTypeBuffer = accountTypeBuffer.substr(0, accountTypeBuffer.indexOf(":"));
					}

					$accountInfoRecords = $accountInfoBlock.find("table table tr");
					$accountName = $($accountInfoBlock.find("table:first-child tr td:nth-child(2)")[0]);
					$detailView = $($accountInfoBlock.find("table:first-child tr td b noscript").text().trim());

					tempAccount = {
							name: $accountName.text().trim(),
							detailViewLink: ($detailView[0] || {}).href,
							accountCategory: accountTypeBuffer,
							accountNumber: [
								$($($accountInfoRecords[1]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[1]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[1]).find("td")[3]).text().trim()
							],
							balance: [
								$($($accountInfoRecords[3]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[3]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[3]).find("td")[3]).text().trim()
							],
							type: [
								$($($accountInfoRecords[4]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[4]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[4]).find("td")[3]).text().trim()
							],
							payStatus: [
								$($($accountInfoRecords[5]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[5]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[5]).find("td")[3]).text().trim()
							]
						};

					if (tempAccount.accountNumber[0].length + tempAccount.accountNumber[1].length + tempAccount.accountNumber[2].length > 0)
						accounts.push(tempAccount);
					else {
						chrome.extension.sendMessage({msg: "exception", data: tempAccount}, function(res) {
							console.log(res);
						});
						continue;
					}
				}

				console.log(accounts);

				chrome.extension.sendMessage({msg: "accounts", personal: extractPersonalInfo($personalInfoTable), data: accounts}, function(response) {
					console.log(response);
				});
			} else if (window.location.pathname === "/OTProductWeb/flex/productDisplayCenter/mergeCreditReportTradeline.do") {
				console.log("Account Detail View page opened.");

				var $accountInfoRecords = $("body table:nth-child(2) table:first-child td:nth-child(2) table:nth-child(3) tr"),
					$accountRemarkRecords = $("table:nth-child(2) td:nth-child(3) table tr"),
					$latePaymentRecords = $("table:nth-child(2) tr:nth-child(3) table tr"),
					result = {
							highBalance: [
								$($($accountInfoRecords[1]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[1]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[1]).find("td")[3]).text().trim()
							],
							limit: [
								$($($accountInfoRecords[3]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[3]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[3]).find("td")[3]).text().trim()
							],
							payment: [
								$($($accountInfoRecords[4]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[4]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[4]).find("td")[3]).text().trim()
							],
							opened: [
								$($($accountInfoRecords[5]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[5]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[5]).find("td")[3]).text().trim()
							],
							reported: [
								$($($accountInfoRecords[6]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[6]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[6]).find("td")[3]).text().trim()
							],
							responsibility: [
								$($($accountInfoRecords[7]).find("td")[1]).text().trim(),
								$($($accountInfoRecords[7]).find("td")[2]).text().trim(),
								$($($accountInfoRecords[7]).find("td")[3]).text().trim()
							],
							remarkString: $accountRemarkRecords.parent().text().trim(),
							latePayments: {
								30: [
									$($($latePaymentRecords[2]).find("td")[1]).text().trim(),
									$($($latePaymentRecords[2]).find("td")[2]).text().trim(),
									$($($latePaymentRecords[2]).find("td")[3]).text().trim()
								],
								60: [
									$($($latePaymentRecords[3]).find("td")[1]).text().trim(),
									$($($latePaymentRecords[3]).find("td")[2]).text().trim(),
									$($($latePaymentRecords[3]).find("td")[3]).text().trim()
								],
								90: [
									$($($latePaymentRecords[4]).find("td")[1]).text().trim(),
									$($($latePaymentRecords[4]).find("td")[2]).text().trim(),
									$($($latePaymentRecords[4]).find("td")[3]).text().trim()
								]
							}
						};

				chrome.extension.sendMessage({msg: "account-detail", data: result}, function(response) {
					console.log(response);
				});
			}
		} else if (window.location.host === "layth.local") {

			if (param.status) {
				var cur = (new Date()).getTime(),
					interval = 500;

				localStorage.setItem("export_time", JSON.stringify(cur));
				var timer = setInterval(function() {
					var exportTime = JSON.parse(localStorage.getItem("export_time")),
						cur = (new Date()).getTime();

					if (cur - exportTime <= interval) {
						clearInterval(timer);
						chrome.extension.sendMessage({msg: "stop"}, function(response) {
							console.log(response);
						})
					} else {
						localStorage.setItem("export_time", JSON.stringify(cur));
					}
				}, interval);
			}
		}
	});
});