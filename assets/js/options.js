$(document).ready(function() {
	console.log("Options page loading...");

	var accounts = CreditReportExtractor.getState().results,
		$resultCount = $("#result-count");

	$resultCount.text(accounts.length);

	CreditReportExtractor.renderBankAccounts();
	CreditReportExtractor.renderClosedAccounts();
	CreditReportExtractor.renderInstallmentAccounts();

	$("#hidden-table-container").append(
		CreditReportExtractor.getCalculatorSheet(),
		CreditReportExtractor.getVerificationCallSheet(),
		CreditReportExtractor.getSummarySheet(),
		getStateCodeTable()
	);

	$("#download").click(function() {
		var tables = ["calculator-worksheet", "verification-call-worksheet", "summary-sheet", "state-codes-sheet"],
			names = ["Calculator", "Verification Call", "Summary", "Sate codes"];

		// tablesToExcel(tables, names, "download.xls");
		tablesToExcel(tables, names, "download.xls", "Excel");
	});
});