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
            ctx = {  attributeStyleID: (dataStyle=='Currency' || dataStyle=='Date')?' ss:StyleID="'+dataStyle+'"':''
                   , nameType: (dataType=='Number' || dataType=='DateTime' || dataType=='Boolean' || dataType=='Error')?dataType:'String'
                   , data: (dataFormula)?'':dataValue
                   , attributeFormula: (dataFormula)?' ss:Formula="'+dataFormula+'"':''
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


$(document).ready(function() {
	console.log("Options page loading...");

	var accounts = CreditReportExtractor.getState().results,
		$resultCount = $("#result-count"),
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