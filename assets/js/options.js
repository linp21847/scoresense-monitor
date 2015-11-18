$(document).ready(function() {
	console.log("Options page loading...");

	var accounts = CreditReportExtractor.getState().results,
		$resultCount = $("#result-count");

	$resultCount.text(accounts.length);

	CreditReportExtractor.renderBankAccounts();
	CreditReportExtractor.renderClosedAccounts();
	CreditReportExtractor.renderInstallmentAccounts();

	$("#download").click(function() {
		// CreditReportExtractor.createWorkbook();
	});
});