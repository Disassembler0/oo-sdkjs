/*
 * (c) Copyright Ascensio System SIA 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

$(function() {
	QUnit.config.autostart = false;

	// function getValues(ws, range) {
	// 	var res = [];
	// 	ws.getRange3(range.r1, range.c1, range.r2, range.c2)._foreach(function(cell, r, c, r1, c1) {
	// 		if (!res[r - r1]) {
	// 			res[r - r1] = [];
	// 		}
	// 		res[r - r1][c - c1] = cell.getValue();
	// 	});
	// 	return res;
	// }
	// function getReportValues(pivot) {
	// 	return getValues(pivot.GetWS(), new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
	// }
	//
	// function getTestMatrix(ws) {
	// 	if (!ws || !ws.pivotTables[0]) {
	// 		return "";
	// 	}
	// 	var str = "";
	// 	for(var i = 0; i < ws.pivotTables.length; ++i){
	// 		var res = getReportValues(ws.pivotTables[i]);
	// 		str += ws.pivotTables[i].asc_getName() + "\n";
	// 		str += "[\n";
	// 		for (var j = 0; j < res.length; ++j) {
	// 			str += JSON.stringify(res[j]);
	// 			if (j + 1 < res.length) {
	// 				str += ",\n";
	// 			} else {
	// 				str += "\n";
	// 			}
	// 		}
	// 		str += "]\n";
	// 	}
	// 	return str;
	// };
	// function getTestValuesMatrix(ws, range) {
	// 	if (!ws || !range) {
	// 		return "";
	// 	}
	// 	var res = getValues(ws, range);
	// 	var str = "[\n";
	// 	for (var i = 0; i < res.length; ++i) {
	// 		str += JSON.stringify(res[i]);
	// 		if (i + 1 < res.length) {
	// 			str += ",\n";
	// 		} else {
	// 			str += "\n";
	// 		}
	// 	}
	// 	str += "]\n";
	// 	return str;
	// };
	// baseEditorsApi.prototype.onDocumentContentReady = function() {
	// 	if(this.wbModel){
	// 		// console.log(getTestValuesMatrix(this.wbModel.aWorksheets[1], AscCommonExcel.g_oRangeCache.getAscRange("B41:H52")));
	// 		console.log(getTestMatrix(this.wbModel.aWorksheets[0]));
	// 	}
	// };

	Asc.spreadsheet_api.prototype._init = function() {
	};
	Asc.spreadsheet_api.prototype._loadFonts = function(fonts, callback) {
		callback();
	};
	AscCommonExcel.WorkbookView.prototype._calcMaxDigitWidth = function() {
	};
	AscCommonExcel.WorkbookView.prototype._init = function() {
	};
	AscCommonExcel.WorkbookView.prototype._onWSSelectionChanged = function() {
	};
	AscCommonExcel.WorkbookView.prototype.showWorksheet = function() {
	};
	AscCommonExcel.WorksheetView.prototype._init = function() {
	};
	AscCommonExcel.WorksheetView.prototype._onUpdateFormatTable = function() {
	};
	AscCommonExcel.WorksheetView.prototype.setSelection = function() {
	};
	AscCommonExcel.WorksheetView.prototype.draw = function() {
	};
	AscCommonExcel.WorksheetView.prototype._prepareDrawingObjects = function() {
	};
	AscCommon.baseEditorsApi.prototype._onEndLoadSdk = function() {
	};


	var sData = AscCommon.getEmpty();
	var api = new Asc.spreadsheet_api({
		'id-view': 'editor_sdk'
	});
	api.FontLoader = {
		LoadDocumentFonts: function() {
			setTimeout(startTests, 0)
		}
	};
	window["Asc"]["editor"] = api;
	AscCommon.g_oTableId.init();
	api._onEndLoadSdk();
	api._openDocument(sData);
	api._openOnClient();
	api.collaborativeEditing = new AscCommonExcel.CCollaborativeEditing({});
	api.wb = new AscCommonExcel.WorkbookView(api.wbModel, api.controller, api.handlers, api.HtmlElement,
		api.topLineEditorElement, api, api.collaborativeEditing, api.fontRenderingMode);
	var wb = api.wbModel;
	wb.handlers.add("getSelectionState", function() {
		return null;
	});
	var ws = api.wbModel.aWorksheets[0];
	api.asc_insertWorksheet(["Data"]);
	var wsData = wb.getWorksheetByName(["Data"], 0);


	var reportRange = AscCommonExcel.g_oRangeCache.getAscRange("A3");
	var testDataRange = AscCommonExcel.g_oRangeCache.getAscRange("B2:H13");
	var testDataRange2 = AscCommonExcel.g_oRangeCache.getAscRange("J2:P13");
	var testDataRange3 = AscCommonExcel.g_oRangeCache.getAscRange("B15:H26");
	var testDataRange4 = AscCommonExcel.g_oRangeCache.getAscRange("J15:P26");
	var testDataRange5 = AscCommonExcel.g_oRangeCache.getAscRange("B28:H39");
	var testDataRange6 = AscCommonExcel.g_oRangeCache.getAscRange("J28:P39");
	var testDataRange7 = AscCommonExcel.g_oRangeCache.getAscRange("B41:H52");
	var testData = [
		["Region", "Gender", "Style", "Ship date", "Units", "Price", "Cost"],
		["East", "Boy", "Tee", "38383", "12", "11.04", "10.42"],
		["East", "Boy", "Golf", "38383", "12", "13", "12.6"],
		["East", "Boy", "Fancy", "38383", "12", "11.96", "11.74"],
		["East", "Girl", "Tee", "38383", "10", "11.27", "10.56"],
		["East", "Girl", "Golf", "38383", "10", "12.12", "11.95"],
		["East", "Girl", "Fancy", "38383", "10", "13.74", "13.33"],
		["West", "Boy", "Tee", "38383", "11", "11.44", "10.94"],
		["West", "Boy", "Golf", "38383", "11", "12.63", "11.73"],
		["West", "Boy", "Fancy", "38383", "11", "12.06", "11.51"],
		["West", "Girl", "Tee", "38383", "15", "13.42", "13.29"],
		["West", "Girl", "Golf", "38383", "15", "11.48", "10.67"]
	];
	var testData2 = [
		["Region","Gender","Style","Ship date","Units","Price","Cost"],
		["East","Boy","Tee","38383","12","11.05","10.42"],
		["East","Boy","Golf","38383","12","","12.6"],
		["East","Boy","Fancy","38383","12","11.96","11.74"],
		["East","Girl","Tee","38383","10","","10.56"],
		["East","Girl","Golf","38383","10","12.12","11.95"],
		["East","Girl","Fancy","38383","10","","13.33"],
		["West","Boy","Tee","38383","11","11.44","10.94"],
		["West","Boy","Golf","38383","11","12.63","11.73"],
		["West","Boy","Fancy","38383","11","12.06","11.51"],
		["West","Girl","Tee","38383","15","13.42","13.29"],
		["West","Girl","Golf","38383","15","11.48","10.67"]
	];
	var testData3 = [
		["Region","Gender","Style","Ship date","Units","Price","Cost"],
		["East","Boy","Tee","38383","12","11.05","10.42"],
		["East","Boy","Golf","38383","12","q","12.6"],
		["East","Boy","Fancy","38383","12","11.96","11.74"],
		["East","Girl","Tee","38383","10","w","10.56"],
		["East","Girl","Golf","38383","10","12.12","11.95"],
		["East","Girl","Fancy","38383","10","e","13.33"],
		["West","Boy","Tee","38383","11","11.44","10.94"],
		["West","Boy","Golf","38383","11","12.63","11.73"],
		["West","Boy","Fancy","38383","11","12.06","11.51"],
		["West","Girl","Tee","38383","15","13.42","13.29"],
		["West","Girl","Golf","38383","15","11.48","10.67"]
	];
	var testData4 = [
		["Region","Gender","Style","Ship date","Units","Price","Cost"],
		["East","Boy","Tee","38383","12","11.05","10.42"],
		["East","Boy","Golf","38383","12","TRUE","12.6"],
		["East","Boy","Fancy","38383","12","11.96","11.74"],
		["East","Girl","Tee","38383","10","FALSE","10.56"],
		["East","Girl","Golf","38383","10","12.12","11.95"],
		["East","Girl","Fancy","38383","10","TRUE","13.33"],
		["West","Boy","Tee","38383","11","11.44","10.94"],
		["West","Boy","Golf","38383","11","12.63","11.73"],
		["West","Boy","Fancy","38383","11","12.06","11.51"],
		["West","Girl","Tee","38383","15","13.42","13.29"],
		["West","Girl","Golf","38383","15","11.48","10.67"]
	];
	var testData5 = [
		["Region","Gender","Style","Ship date","Units","Price","Cost"],
		["East","Boy","Tee","38383","12","11.04","10.42"],
		["East","Boy","Golf","38383","12","#N/A","12.6"],
		["East","Boy","Fancy","38383","12","11.96","11.74"],
		["East","Girl","Tee","38383","10","#N/A","10.56"],
		["East","Girl","Golf","38383","10","12.12","11.95"],
		["East","Girl","Fancy","38383","10","#N/A","13.33"],
		["West","Boy","Tee","38383","11","11.44","10.94"],
		["West","Boy","Golf","38383","11","12.63","11.73"],
		["West","Boy","Fancy","38383","11","12.06","11.51"],
		["West","Girl","Tee","38383","15","13.42","13.29"],
		["West","Girl","Golf","38383","15","11.48","10.67"]
	];
	//todo date
	var testData6 = [
		["Region","Gender","Style","Ship date","Units","Price","Cost"],
		["East","Boy","Tee","38383","12","11.04","10.42"],
		["East","Boy","Golf","38383","12","13","12.6"],
		["East","Boy","Fancy","38383","12","11.96","11.74"],
		["East","Girl","Tee","38383","10","11.27","10.56"],
		["East","Girl","Golf","38383","10","12.12","11.95"],
		["East","Girl","Fancy","38383","10","13.74","13.33"],
		["West","Boy","Tee","38383","11","11.44","10.94"],
		["West","Boy","Golf","38383","11","12.63","11.73"],
		["West","Boy","Fancy","38383","11","12.06","11.51"],
		["West","Girl","Tee","38383","15","13.42","13.29"],
		["West","Girl","Golf","38383","15","11.48","10.67"]
	];
	var testData7 = [
		["Region","Gender","Style","Ship date","Units","Price","Cost"],
		["East","Boy","Tee","38383","12","","10.42"],
		["East","Boy","Golf","38383","12","","12.6"],
		["East","Boy","Fancy","38383","12","","11.74"],
		["East","Girl","Tee","38383","10","q","10.56"],
		["East","Girl","Golf","38383","10","","11.95"],
		["East","Girl","Fancy","38383","10","","13.33"],
		["West","Boy","Tee","38383","11","q","10.94"],
		["West","Boy","Golf","38383","11","1","11.73"],
		["West","Boy","Fancy","38383","11","","11.51"],
		["West","Girl","Tee","38383","15","2","13.29"],
		["West","Girl","Golf","38383","15","3","10.67"]
	];

	fillData(wsData, testData, testDataRange);
	fillData(wsData, testData2, testDataRange2);
	fillData(wsData, testData3, testDataRange3);
	fillData(wsData, testData4, testDataRange4);
	fillData(wsData, testData5, testDataRange5);
	fillData(wsData, testData6, testDataRange6);
	fillData(wsData, testData7, testDataRange7);
	var dataRef = wsData.getName() + "!" + testDataRange.getName();
	var dataRef2 = wsData.getName() + "!" + testDataRange2.getName();
	var dataRef3 = wsData.getName() + "!" + testDataRange3.getName();
	var dataRef4 = wsData.getName() + "!" + testDataRange4.getName();
	var dataRef5 = wsData.getName() + "!" + testDataRange5.getName();
	var dataRef6 = wsData.getName() + "!" + testDataRange6.getName();
	var dataRef7 = wsData.getName() + "!" + testDataRange7.getName();
	var pivotStyle = "PivotStyleDark23";

	function fillData(ws, data, range) {
		var range = ws.getRange4(range.r1, range.c1);
		for (var i = 0; i < data.length; ++i) {
			var row = data[i];
			for (var j = 0; j < row.length; ++j) {
				range.setOffset(new AscCommon.CellBase(i, j));
				range.setValue(row[j]);
				range.setOffset(new AscCommon.CellBase(-i, -j));
			}
		}
	}
	function getReportValues(pivot) {
		var res = [];
		var range = new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange();
		pivot.GetWS().getRange3(range.r1, range.c1, range.r2, range.c2)._foreach(function(cell, r, c, r1, c1) {
			if (!res[r - r1]) {
				res[r - r1] = [];
			}
			res[r - r1][c - c1] = cell.getValue();
		});
		return res;
	}
	function checkReportValues(pivot, values, standard, message) {
		deepEqual(values, standard, message);

		var isEmptyPivot = !(pivot.asc_getRowFields() || pivot.asc_getColumnFields() || pivot.asc_getDataFields() || pivot.asc_getPageFields());
		var styleError = "";
		var dataError = "";
		var ws = pivot.GetWS();
		ws._forEachCell(function(cell) {
			if (!testDataRange.contains(cell.nCol, cell.nRow)) {
				var inPivot = pivot.contains(cell.nCol, cell.nRow);
				var compiledStyle = ws.sheetMergedStyles.getStyle(ws.hiddenManager, cell.nRow, cell.nCol, ws);
				if (inPivot && !isEmptyPivot) {
					if (!compiledStyle || 0 === compiledStyle.table.length) {
						styleError = cell.getName();
					}
				} else {
					if (compiledStyle && 0 < compiledStyle.table.length) {
						styleError = cell.getName();
					}
					if (!cell.isEmptyTextString()) {
						dataError = cell.getName();
					}
				}
			}
		});
		strictEqual(styleError, "", message + "_styleError");
		strictEqual(dataError, "", message + "_dataError");
	}

	function checkHistoryOperation(pivot, standards, message, action) {
		var undoValues = getReportValues(pivot);
		AscCommon.History.Create_NewPoint();
		AscCommon.History.StartTransaction();
		action();
		AscCommon.History.EndTransaction();
		checkReportValues(pivot, getReportValues(pivot), standards, message);
		var wb = pivot.GetWS().workbook;
		var changes = wb.SerializeHistory();
		AscCommon.History.Undo();
		checkReportValues(pivot, getReportValues(pivot), undoValues, message + "_undo");
		AscCommon.History.Redo();
		checkReportValues(pivot, getReportValues(pivot), standards, message + "_redo");
		AscCommon.History.Undo();
		wb.DeserializeHistory(changes);
		checkReportValues(pivot, getReportValues(pivot), standards, message + "_changes");
		return wb.getPivotTableById(pivot.Get_Id());
	}


	var standards = {
		"compact_0row_0col_0data": [
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""]
		],
		"compact_0row_0col_1data": [
				["Sum of Price"],
				["134.16"]
		],
		"compact_0row_0col_2data_col": [
				["Sum of Price", "Sum of Cost"],
				["134.16", "128.74"]
		],
		"compact_0row_0col_2data_row": [
				["Values", ""],
				["Sum of Price", "134.16"],
				["Sum of Cost", "128.74"]
		],
		"compact_0row_1col_0data": [
				["Column Labels", "", "", ""],
				["Fancy", "Golf", "Tee", "Grand Total"]
		],
		"compact_0row_1col_1data": [
				["", "Column Labels", "", "", ""],
				["", "Fancy", "Golf", "Tee", "Grand Total"],
				["Sum of Price", "37.76", "49.23", "47.17", "134.16"]
		],
		"compact_0row_1col_2data_col": [
				["Column Labels", "", "", "", "", "", "", ""],
				["Fancy", "", "Golf", "", "Tee", "", "Total Sum of Price", "Total Sum of Cost"],
				["Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "", ""],
				["37.76", "36.58", "49.23", "46.95", "47.17", "45.21", "134.16", "128.74"]
		],
		"compact_0row_1col_2data_row": [
				["", "Column Labels", "", "", ""],
				["Values", "Fancy", "Golf", "Tee", "Grand Total"],
				["Sum of Price", "37.76", "49.23", "47.17", "134.16"],
				["Sum of Cost", "36.58", "46.95", "45.21", "128.74"]
		],
		"compact_0row_2col_0data": [
				["Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""]
		],
		"compact_0row_2col_1data": [
				["", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["", "Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["", "10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""],
				["Sum of Price", "13.74", "12.06", "11.96", "37.76", "12.12", "12.63", "13", "11.48", "49.23", "11.27",
					"11.44", "11.04", "13.42", "47.17", "134.16"
				]
		],
		"compact_0row_2col_2data_col": [
				["Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
					"", "", "", "", "", "", "", ""
				],
				["Fancy", "", "", "", "", "", "Fancy Sum of Price", "Fancy Sum of Cost", "Golf", "", "", "", "", "", "",
					"", "Golf Sum of Price", "Golf Sum of Cost", "Tee", "", "", "", "", "", "", "", "Tee Sum of Price",
					"Tee Sum of Cost", "Total Sum of Price", "Total Sum of Cost"
				],
				["10", "", "11", "", "12", "", "", "", "10", "", "11", "", "12", "", "15", "", "", "", "10", "", "11",
					"", "12", "", "15", "", "", "", "", ""
				],
				["Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "", "",
					"Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost",
					"Sum of Price", "Sum of Cost", "", "", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost",
					"Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "", "", "", ""
				],
				["13.74", "13.33", "12.06", "11.51", "11.96", "11.74", "37.76", "36.58", "12.12", "11.95", "12.63",
					"11.73", "13", "12.6", "11.48", "10.67", "49.23", "46.95", "11.27", "10.56", "11.44", "10.94",
					"11.04", "10.42", "13.42", "13.29", "47.17", "45.21", "134.16", "128.74"
				]
		],
		"compact_0row_2col_2data_row": [
				["", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["", "Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["Values", "10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""],
				["Sum of Price", "13.74", "12.06", "11.96", "37.76", "12.12", "12.63", "13", "11.48", "49.23", "11.27",
					"11.44", "11.04", "13.42", "47.17", "134.16"
				],
				["Sum of Cost", "13.33", "11.51", "11.74", "36.58", "11.95", "11.73", "12.6", "10.67", "46.95", "10.56",
					"10.94", "10.42", "13.29", "45.21", "128.74"
				]
		],
		"compact_1row_0col_0data": [
				["Row Labels"],
				["East"],
				["West"],
				["Grand Total"]
		],
		"compact_1row_0col_1data": [
				["Row Labels", "Sum of Price"],
				["East", "73.13"],
				["West", "61.03"],
				["Grand Total", "134.16"]
		],
		"compact_1row_0col_2data_col": [
				["Row Labels", "Sum of Price", "Sum of Cost"],
				["East", "73.13", "70.6"],
				["West", "61.03", "58.14"],
				["Grand Total", "134.16", "128.74"]
		],
		"compact_1row_0col_2data_row": [
				["Row Labels", ""],
				["East", ""],
				["Sum of Price", "73.13"],
				["Sum of Cost", "70.6"],
				["West", ""],
				["Sum of Price", "61.03"],
				["Sum of Cost", "58.14"],
				["Total Sum of Price", "134.16"],
				["Total Sum of Cost", "128.74"]
		],
		"compact_1row_1col_0data": [
				["", "Column Labels", "", "", ""],
				["Row Labels", "Fancy", "Golf", "Tee", "Grand Total"],
				["East", "", "", "", ""],
				["West", "", "", "", ""],
				["Grand Total", "", "", "", ""]
		],
		"compact_1row_1col_1data": [
				["Sum of Price", "Column Labels", "", "", ""],
				["Row Labels", "Fancy", "Golf", "Tee", "Grand Total"],
				["East", "25.7", "25.12", "22.31", "73.13"],
				["West", "12.06", "24.11", "24.86", "61.03"],
				["Grand Total", "37.76", "49.23", "47.17", "134.16"]
		],
		"compact_1row_1col_2data_col": [
				["", "Column Labels", "", "", "", "", "", "", ""],
				["", "Fancy", "", "Golf", "", "Tee", "", "Total Sum of Price", "Total Sum of Cost"],
				["Row Labels", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price",
					"Sum of Cost", "", ""
				],
				["East", "25.7", "25.07", "25.12", "24.55", "22.31", "20.98", "73.13", "70.6"],
				["West", "12.06", "11.51", "24.11", "22.4", "24.86", "24.23", "61.03", "58.14"],
				["Grand Total", "37.76", "36.58", "49.23", "46.95", "47.17", "45.21", "134.16", "128.74"]
		],
		"compact_1row_1col_2data_row": [
				["", "Column Labels", "", "", ""],
				["Row Labels", "Fancy", "Golf", "Tee", "Grand Total"],
				["East", "", "", "", ""],
				["Sum of Price", "25.7", "25.12", "22.31", "73.13"],
				["Sum of Cost", "25.07", "24.55", "20.98", "70.6"],
				["West", "", "", "", ""],
				["Sum of Price", "12.06", "24.11", "24.86", "61.03"],
				["Sum of Cost", "11.51", "22.4", "24.23", "58.14"],
				["Total Sum of Price", "37.76", "49.23", "47.17", "134.16"],
				["Total Sum of Cost", "36.58", "46.95", "45.21", "128.74"]
		],
		"compact_1row_2col_0data": [
				["", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["", "Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["Row Labels", "10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""],
				["East", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["West", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Grand Total", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
		],
		"compact_1row_2col_1data": [
				["Sum of Price", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["", "Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["Row Labels", "10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""],
				["East", "13.74", "", "11.96", "25.7", "12.12", "", "13", "", "25.12", "11.27", "", "11.04", "",
					"22.31", "73.13"
				],
				["West", "", "12.06", "", "12.06", "", "12.63", "", "11.48", "24.11", "", "11.44", "", "13.42", "24.86",
					"61.03"
				],
				["Grand Total", "13.74", "12.06", "11.96", "37.76", "12.12", "12.63", "13", "11.48", "49.23", "11.27",
					"11.44", "11.04", "13.42", "47.17", "134.16"
				]
		],
		"compact_1row_2col_2data_col": [
				["", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
					"", "", "", "", "", "", "", "", ""
				],
				["", "Fancy", "", "", "", "", "", "Fancy Sum of Price", "Fancy Sum of Cost", "Golf", "", "", "", "", "",
					"", "", "Golf Sum of Price", "Golf Sum of Cost", "Tee", "", "", "", "", "", "", "",
					"Tee Sum of Price", "Tee Sum of Cost", "Total Sum of Price", "Total Sum of Cost"
				],
				["", "10", "", "11", "", "12", "", "", "", "10", "", "11", "", "12", "", "15", "", "", "", "10", "",
					"11", "", "12", "", "15", "", "", "", "", ""
				],
				["Row Labels", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price",
					"Sum of Cost", "", "", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price",
					"Sum of Cost", "Sum of Price", "Sum of Cost", "", "", "Sum of Price", "Sum of Cost", "Sum of Price",
					"Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "", "", "", ""
				],
				["East", "13.74", "13.33", "", "", "11.96", "11.74", "25.7", "25.07", "12.12", "11.95", "", "", "13",
					"12.6", "", "", "25.12", "24.55", "11.27", "10.56", "", "", "11.04", "10.42", "", "", "22.31",
					"20.98", "73.13", "70.6"
				],
				["West", "", "", "12.06", "11.51", "", "", "12.06", "11.51", "", "", "12.63", "11.73", "", "", "11.48",
					"10.67", "24.11", "22.4", "", "", "11.44", "10.94", "", "", "13.42", "13.29", "24.86", "24.23",
					"61.03", "58.14"
				],
				["Grand Total", "13.74", "13.33", "12.06", "11.51", "11.96", "11.74", "37.76", "36.58", "12.12",
					"11.95", "12.63", "11.73", "13", "12.6", "11.48", "10.67", "49.23", "46.95", "11.27", "10.56",
					"11.44", "10.94", "11.04", "10.42", "13.42", "13.29", "47.17", "45.21", "134.16", "128.74"
				]
		],
		"compact_1row_2col_2data_row": [
				["", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["", "Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["Row Labels", "10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""],
				["East", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Sum of Price", "13.74", "", "11.96", "25.7", "12.12", "", "13", "", "25.12", "11.27", "", "11.04", "",
					"22.31", "73.13"
				],
				["Sum of Cost", "13.33", "", "11.74", "25.07", "11.95", "", "12.6", "", "24.55", "10.56", "", "10.42",
					"", "20.98", "70.6"
				],
				["West", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Sum of Price", "", "12.06", "", "12.06", "", "12.63", "", "11.48", "24.11", "", "11.44", "", "13.42",
					"24.86", "61.03"
				],
				["Sum of Cost", "", "11.51", "", "11.51", "", "11.73", "", "10.67", "22.4", "", "10.94", "", "13.29",
					"24.23", "58.14"
				],
				["Total Sum of Price", "13.74", "12.06", "11.96", "37.76", "12.12", "12.63", "13", "11.48", "49.23",
					"11.27", "11.44", "11.04", "13.42", "47.17", "134.16"
				],
				["Total Sum of Cost", "13.33", "11.51", "11.74", "36.58", "11.95", "11.73", "12.6", "10.67", "46.95",
					"10.56", "10.94", "10.42", "13.29", "45.21", "128.74"
				]
		],
		"compact_2row_0col_0data": [
				["Row Labels"],
				["East"],
				["Boy"],
				["Girl"],
				["West"],
				["Boy"],
				["Girl"],
				["Grand Total"]
		],
		"compact_2row_0col_1data": [
				["Row Labels", "Sum of Price"],
				["East", "73.13"],
				["Boy", "36"],
				["Girl", "37.13"],
				["West", "61.03"],
				["Boy", "36.13"],
				["Girl", "24.9"],
				["Grand Total", "134.16"]
		],
		"compact_2row_0col_2data_col": [
				["Row Labels", "Sum of Price", "Sum of Cost"],
				["East", "73.13", "70.6"],
				["Boy", "36", "34.76"],
				["Girl", "37.13", "35.84"],
				["West", "61.03", "58.14"],
				["Boy", "36.13", "34.18"],
				["Girl", "24.9", "23.96"],
				["Grand Total", "134.16", "128.74"]
		],
		"compact_2row_0col_2data_row": [
				["Row Labels", ""],
				["East", ""],
				["Boy", ""],
				["Sum of Price", "36"],
				["Sum of Cost", "34.76"],
				["Girl", ""],
				["Sum of Price", "37.13"],
				["Sum of Cost", "35.84"],
				["East Sum of Price", "73.13"],
				["East Sum of Cost", "70.6"],
				["West", ""],
				["Boy", ""],
				["Sum of Price", "36.13"],
				["Sum of Cost", "34.18"],
				["Girl", ""],
				["Sum of Price", "24.9"],
				["Sum of Cost", "23.96"],
				["West Sum of Price", "61.03"],
				["West Sum of Cost", "58.14"],
				["Total Sum of Price", "134.16"],
				["Total Sum of Cost", "128.74"]
		],
		"compact_2row_1col_0data": [
				["", "Column Labels", "", "", ""],
				["Row Labels", "Fancy", "Golf", "Tee", "Grand Total"],
				["East", "", "", "", ""],
				["Boy", "", "", "", ""],
				["Girl", "", "", "", ""],
				["West", "", "", "", ""],
				["Boy", "", "", "", ""],
				["Girl", "", "", "", ""],
				["Grand Total", "", "", "", ""]
		],
		"compact_2row_1col_1data": [
				["Sum of Price", "Column Labels", "", "", ""],
				["Row Labels", "Fancy", "Golf", "Tee", "Grand Total"],
				["East", "25.7", "25.12", "22.31", "73.13"],
				["Boy", "11.96", "13", "11.04", "36"],
				["Girl", "13.74", "12.12", "11.27", "37.13"],
				["West", "12.06", "24.11", "24.86", "61.03"],
				["Boy", "12.06", "12.63", "11.44", "36.13"],
				["Girl", "", "11.48", "13.42", "24.9"],
				["Grand Total", "37.76", "49.23", "47.17", "134.16"]
		],
		"compact_2row_1col_2data_col": [
				["", "Column Labels", "", "", "", "", "", "", ""],
				["", "Fancy", "", "Golf", "", "Tee", "", "Total Sum of Price", "Total Sum of Cost"],
				["Row Labels", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price",
					"Sum of Cost", "", ""
				],
				["East", "25.7", "25.07", "25.12", "24.55", "22.31", "20.98", "73.13", "70.6"],
				["Boy", "11.96", "11.74", "13", "12.6", "11.04", "10.42", "36", "34.76"],
				["Girl", "13.74", "13.33", "12.12", "11.95", "11.27", "10.56", "37.13", "35.84"],
				["West", "12.06", "11.51", "24.11", "22.4", "24.86", "24.23", "61.03", "58.14"],
				["Boy", "12.06", "11.51", "12.63", "11.73", "11.44", "10.94", "36.13", "34.18"],
				["Girl", "", "", "11.48", "10.67", "13.42", "13.29", "24.9", "23.96"],
				["Grand Total", "37.76", "36.58", "49.23", "46.95", "47.17", "45.21", "134.16", "128.74"]
		],
		"compact_2row_1col_2data_row": [
				["", "Column Labels", "", "", ""],
				["Row Labels", "Fancy", "Golf", "Tee", "Grand Total"],
				["East", "", "", "", ""],
				["Boy", "", "", "", ""],
				["Sum of Price", "11.96", "13", "11.04", "36"],
				["Sum of Cost", "11.74", "12.6", "10.42", "34.76"],
				["Girl", "", "", "", ""],
				["Sum of Price", "13.74", "12.12", "11.27", "37.13"],
				["Sum of Cost", "13.33", "11.95", "10.56", "35.84"],
				["East Sum of Price", "25.7", "25.12", "22.31", "73.13"],
				["East Sum of Cost", "25.07", "24.55", "20.98", "70.6"],
				["West", "", "", "", ""],
				["Boy", "", "", "", ""],
				["Sum of Price", "12.06", "12.63", "11.44", "36.13"],
				["Sum of Cost", "11.51", "11.73", "10.94", "34.18"],
				["Girl", "", "", "", ""],
				["Sum of Price", "", "11.48", "13.42", "24.9"],
				["Sum of Cost", "", "10.67", "13.29", "23.96"],
				["West Sum of Price", "12.06", "24.11", "24.86", "61.03"],
				["West Sum of Cost", "11.51", "22.4", "24.23", "58.14"],
				["Total Sum of Price", "37.76", "49.23", "47.17", "134.16"],
				["Total Sum of Cost", "36.58", "46.95", "45.21", "128.74"]
		],
		"compact_2row_2col_0data": [
				["", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["", "Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["Row Labels", "10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""],
				["East", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Boy", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Girl", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["West", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Boy", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Girl", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Grand Total", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
		],
		"compact_2row_2col_1data": [
				["Sum of Price", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["", "Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["Row Labels", "10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""],
				["East", "13.74", "", "11.96", "25.7", "12.12", "", "13", "", "25.12", "11.27", "", "11.04", "",
					"22.31", "73.13"
				],
				["Boy", "", "", "11.96", "11.96", "", "", "13", "", "13", "", "", "11.04", "", "11.04", "36"],
				["Girl", "13.74", "", "", "13.74", "12.12", "", "", "", "12.12", "11.27", "", "", "", "11.27", "37.13"],
				["West", "", "12.06", "", "12.06", "", "12.63", "", "11.48", "24.11", "", "11.44", "", "13.42", "24.86",
					"61.03"
				],
				["Boy", "", "12.06", "", "12.06", "", "12.63", "", "", "12.63", "", "11.44", "", "", "11.44", "36.13"],
				["Girl", "", "", "", "", "", "", "", "11.48", "11.48", "", "", "", "13.42", "13.42", "24.9"],
				["Grand Total", "13.74", "12.06", "11.96", "37.76", "12.12", "12.63", "13", "11.48", "49.23", "11.27",
					"11.44", "11.04", "13.42", "47.17", "134.16"
				]
		],
		"compact_2row_2col_2data_col": [
				["", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
					"", "", "", "", "", "", "", "", ""
				],
				["", "Fancy", "", "", "", "", "", "Fancy Sum of Price", "Fancy Sum of Cost", "Golf", "", "", "", "", "",
					"", "", "Golf Sum of Price", "Golf Sum of Cost", "Tee", "", "", "", "", "", "", "",
					"Tee Sum of Price", "Tee Sum of Cost", "Total Sum of Price", "Total Sum of Cost"
				],
				["", "10", "", "11", "", "12", "", "", "", "10", "", "11", "", "12", "", "15", "", "", "", "10", "",
					"11", "", "12", "", "15", "", "", "", "", ""
				],
				["Row Labels", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price",
					"Sum of Cost", "", "", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price",
					"Sum of Cost", "Sum of Price", "Sum of Cost", "", "", "Sum of Price", "Sum of Cost", "Sum of Price",
					"Sum of Cost", "Sum of Price", "Sum of Cost", "Sum of Price", "Sum of Cost", "", "", "", ""
				],
				["East", "13.74", "13.33", "", "", "11.96", "11.74", "25.7", "25.07", "12.12", "11.95", "", "", "13",
					"12.6", "", "", "25.12", "24.55", "11.27", "10.56", "", "", "11.04", "10.42", "", "", "22.31",
					"20.98", "73.13", "70.6"
				],
				["Boy", "", "", "", "", "11.96", "11.74", "11.96", "11.74", "", "", "", "", "13", "12.6", "", "", "13",
					"12.6", "", "", "", "", "11.04", "10.42", "", "", "11.04", "10.42", "36", "34.76"
				],
				["Girl", "13.74", "13.33", "", "", "", "", "13.74", "13.33", "12.12", "11.95", "", "", "", "", "", "",
					"12.12", "11.95", "11.27", "10.56", "", "", "", "", "", "", "11.27", "10.56", "37.13", "35.84"
				],
				["West", "", "", "12.06", "11.51", "", "", "12.06", "11.51", "", "", "12.63", "11.73", "", "", "11.48",
					"10.67", "24.11", "22.4", "", "", "11.44", "10.94", "", "", "13.42", "13.29", "24.86", "24.23",
					"61.03", "58.14"
				],
				["Boy", "", "", "12.06", "11.51", "", "", "12.06", "11.51", "", "", "12.63", "11.73", "", "", "", "",
					"12.63", "11.73", "", "", "11.44", "10.94", "", "", "", "", "11.44", "10.94", "36.13", "34.18"
				],
				["Girl", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "11.48", "10.67", "11.48", "10.67", "",
					"", "", "", "", "", "13.42", "13.29", "13.42", "13.29", "24.9", "23.96"
				],
				["Grand Total", "13.74", "13.33", "12.06", "11.51", "11.96", "11.74", "37.76", "36.58", "12.12",
					"11.95", "12.63", "11.73", "13", "12.6", "11.48", "10.67", "49.23", "46.95", "11.27", "10.56",
					"11.44", "10.94", "11.04", "10.42", "13.42", "13.29", "47.17", "45.21", "134.16", "128.74"
				]
		],
		"compact_2row_2col_2data_col2": [
				["","Column Labels","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["","Sum of Price","","","Sum of Cost","","","","","Sum of Price","","","","Sum of Cost","","","","","","Sum of Price","","","","Sum of Cost","","","","","","",""],
				["Row Labels","10","11","12","10","11","12","","","10","11","12","15","10","11","12","15","","","10","11","12","15","10","11","12","15","","","",""],
				["East","13.74","","11.96","13.33","","11.74","25.7","25.07","12.12","","13","","11.95","","12.6","","25.12","24.55","11.27","","11.04","","10.56","","10.42","","22.31","20.98","73.13","70.6"],
				["Boy","","","11.96","","","11.74","11.96","11.74","","","13","","","","12.6","","13","12.6","","","11.04","","","","10.42","","11.04","10.42","36","34.76"],
				["Girl","13.74","","","13.33","","","13.74","13.33","12.12","","","","11.95","","","","12.12","11.95","11.27","","","","10.56","","","","11.27","10.56","37.13","35.84"],
				["West","","12.06","","","11.51","","12.06","11.51","","12.63","","11.48","","11.73","","10.67","24.11","22.4","","11.44","","13.42","","10.94","","13.29","24.86","24.23","61.03","58.14"],
				["Boy","","12.06","","","11.51","","12.06","11.51","","12.63","","","","11.73","","","12.63","11.73","","11.44","","","","10.94","","","11.44","10.94","36.13","34.18"],
				["Girl","","","","","","","","","","","","11.48","","","","10.67","11.48","10.67","","","","13.42","","","","13.29","13.42","13.29","24.9","23.96"],
				["Grand Total","13.74","12.06","11.96","13.33","11.51","11.74","37.76","36.58","12.12","12.63","13","11.48","11.95","11.73","12.6","10.67","49.23","46.95","11.27","11.44","11.04","13.42","10.56","10.94","10.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"compact_2row_2col_2data_col1": [
				["","Column Labels","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","Sum of Price","","","","","","","","","","","","","","Sum of Cost","","","","","","","","","","","","","","Total Sum of Price","Total Sum of Cost"],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","",""],
				["Row Labels","10","11","12","","10","11","12","15","","10","11","12","15","","10","11","12","","10","11","12","15","","10","11","12","15","","",""],
				["East","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","73.13","70.6"],
				["Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","36","34.76"],
				["Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","37.13","35.84"],
				["West","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","61.03","58.14"],
				["Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","36.13","34.18"],
				["Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","","","","","","","","10.67","10.67","","","","13.29","13.29","24.9","23.96"],
				["Grand Total","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","134.16","128.74"]
		],
		"compact_2row_2col_2data_row": [
				["", "Column Labels", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["", "Fancy", "", "", "Fancy Total", "Golf", "", "", "", "Golf Total", "Tee", "", "", "", "Tee Total",
					"Grand Total"
				],
				["Row Labels", "10", "11", "12", "", "10", "11", "12", "15", "", "10", "11", "12", "15", "", ""],
				["East", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Boy", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Sum of Price", "", "", "11.96", "11.96", "", "", "13", "", "13", "", "", "11.04", "", "11.04", "36"],
				["Sum of Cost", "", "", "11.74", "11.74", "", "", "12.6", "", "12.6", "", "", "10.42", "", "10.42",
					"34.76"
				],
				["Girl", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Sum of Price", "13.74", "", "", "13.74", "12.12", "", "", "", "12.12", "11.27", "", "", "", "11.27",
					"37.13"
				],
				["Sum of Cost", "13.33", "", "", "13.33", "11.95", "", "", "", "11.95", "10.56", "", "", "", "10.56",
					"35.84"
				],
				["East Sum of Price", "13.74", "", "11.96", "25.7", "12.12", "", "13", "", "25.12", "11.27", "",
					"11.04", "", "22.31", "73.13"
				],
				["East Sum of Cost", "13.33", "", "11.74", "25.07", "11.95", "", "12.6", "", "24.55", "10.56", "",
					"10.42", "", "20.98", "70.6"
				],
				["West", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Boy", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Sum of Price", "", "12.06", "", "12.06", "", "12.63", "", "", "12.63", "", "11.44", "", "", "11.44",
					"36.13"
				],
				["Sum of Cost", "", "11.51", "", "11.51", "", "11.73", "", "", "11.73", "", "10.94", "", "", "10.94",
					"34.18"
				],
				["Girl", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				["Sum of Price", "", "", "", "", "", "", "", "11.48", "11.48", "", "", "", "13.42", "13.42", "24.9"],
				["Sum of Cost", "", "", "", "", "", "", "", "10.67", "10.67", "", "", "", "13.29", "13.29", "23.96"],
				["West Sum of Price", "", "12.06", "", "12.06", "", "12.63", "", "11.48", "24.11", "", "11.44", "",
					"13.42", "24.86", "61.03"
				],
				["West Sum of Cost", "", "11.51", "", "11.51", "", "11.73", "", "10.67", "22.4", "", "10.94", "",
					"13.29", "24.23", "58.14"
				],
				["Total Sum of Price", "13.74", "12.06", "11.96", "37.76", "12.12", "12.63", "13", "11.48", "49.23",
					"11.27", "11.44", "11.04", "13.42", "47.17", "134.16"
				],
				["Total Sum of Cost", "13.33", "11.51", "11.74", "36.58", "11.95", "11.73", "12.6", "10.67", "46.95",
					"10.56", "10.94", "10.42", "13.29", "45.21", "128.74"
				]
		],
		"compact_2row_2col_2data_row2": [
				["","Column Labels","","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Row Labels","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","","","","","","","","","","","","","","",""],
				["Sum of Price","","","","","","","","","","","","","","",""],
				["Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["Sum of Cost","","","","","","","","","","","","","","",""],
				["Boy","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","34.76"],
				["Girl","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","35.84"],
				["East Sum of Price","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["East Sum of Cost","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["West","","","","","","","","","","","","","","",""],
				["Sum of Price","","","","","","","","","","","","","","",""],
				["Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["Sum of Cost","","","","","","","","","","","","","","",""],
				["Boy","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","34.18"],
				["Girl","","","","","","","","10.67","10.67","","","","13.29","13.29","23.96"],
				["West Sum of Price","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["West Sum of Cost","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Total Sum of Price","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"compact_2row_2col_2data_row1": [
				["","Column Labels","","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Row Labels","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["Sum of Price","","","","","","","","","","","","","","",""],
				["East","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["West","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["Sum of Cost","","","","","","","","","","","","","","",""],
				["East","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["Boy","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","34.76"],
				["Girl","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","35.84"],
				["West","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Boy","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","34.18"],
				["Girl","","","","","","","","10.67","10.67","","","","13.29","13.29","23.96"],
				["Total Sum of Price","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"outline_0row_0col_0data": [
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""],
				["", "", ""]
		],
		"outline_0row_0col_1data": [
				["Sum of Price"],
				["134.16"]
		],
		"outline_0row_0col_2data_col": [
				["Sum of Price","Sum of Cost"],
				["134.16","128.74"]
		],
		"outline_0row_0col_2data_row": [
				["Values",""],
				["Sum of Price","134.16"],
				["Sum of Cost","128.74"]
		],
		"outline_0row_1col_0data": [
				["Style","","",""],
				["Fancy","Golf","Tee","Grand Total"]
		],
		"outline_0row_1col_1data": [
				["","Style","","",""],
				["","Fancy","Golf","Tee","Grand Total"],
				["Sum of Price","37.76","49.23","47.17","134.16"]
		],
		"outline_0row_1col_2data_col": [
				["Style","Values","","","","","",""],
				["Fancy","","Golf","","Tee","","Total Sum of Price","Total Sum of Cost"],
				["Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","",""],
				["37.76","36.58","49.23","46.95","47.17","45.21","134.16","128.74"]
		],
		"outline_0row_1col_2data_row": [
				["","Style","","",""],
				["Values","Fancy","Golf","Tee","Grand Total"],
				["Sum of Price","37.76","49.23","47.17","134.16"],
				["Sum of Cost","36.58","46.95","45.21","128.74"]
		],
		"outline_0row_2col_0data": [
				["Style","Units","","","","","","","","","","","","",""],
				["Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["10","11","12","","10","11","12","15","","10","11","12","15","",""]
		],
		"outline_0row_2col_1data": [
				["","Style","Units","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["Sum of Price","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"]
		],
		"outline_0row_2col_2data_col": [
				["Style","Units","Values","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["10","","11","","12","","","","10","","11","","12","","15","","","","10","","11","","12","","15","","","","",""],
				["Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","",""],
				["13.74","13.33","12.06","11.51","11.96","11.74","37.76","36.58","12.12","11.95","12.63","11.73","13","12.6","11.48","10.67","49.23","46.95","11.27","10.56","11.44","10.94","11.04","10.42","13.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"outline_0row_2col_2data_row": [
				["","Style","Units","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Values","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["Sum of Price","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Sum of Cost","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"outline_1row_0col_0data": [
				["Region"],
				["East"],
				["West"],
				["Grand Total"]
		],
		"outline_1row_0col_1data": [
				["Region","Sum of Price"],
				["East","73.13"],
				["West","61.03"],
				["Grand Total","134.16"]
		],
		"outline_1row_0col_2data_col": [
				["Region","Sum of Price","Sum of Cost"],
				["East","73.13","70.6"],
				["West","61.03","58.14"],
				["Grand Total","134.16","128.74"]
		],
		"outline_1row_0col_2data_row": [
				["Region","Values",""],
				["East","",""],
				["","Sum of Price","73.13"],
				["","Sum of Cost","70.6"],
				["West","",""],
				["","Sum of Price","61.03"],
				["","Sum of Cost","58.14"],
				["Total Sum of Price","","134.16"],
				["Total Sum of Cost","","128.74"]
		],
		"outline_1row_1col_0data": [
				["","Style","","",""],
				["Region","Fancy","Golf","Tee","Grand Total"],
				["East","","","",""],
				["West","","","",""],
				["Grand Total","","","",""]
		],
		"outline_1row_1col_1data": [
				["Sum of Price","Style","","",""],
				["Region","Fancy","Golf","Tee","Grand Total"],
				["East","25.7","25.12","22.31","73.13"],
				["West","12.06","24.11","24.86","61.03"],
				["Grand Total","37.76","49.23","47.17","134.16"]
		],
		"outline_1row_1col_2data_col": [
				["","Style","Values","","","","","",""],
				["","Fancy","","Golf","","Tee","","Total Sum of Price","Total Sum of Cost"],
				["Region","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","",""],
				["East","25.7","25.07","25.12","24.55","22.31","20.98","73.13","70.6"],
				["West","12.06","11.51","24.11","22.4","24.86","24.23","61.03","58.14"],
				["Grand Total","37.76","36.58","49.23","46.95","47.17","45.21","134.16","128.74"]
		],
		"outline_1row_1col_2data_row": [
				["","","Style","","",""],
				["Region","Values","Fancy","Golf","Tee","Grand Total"],
				["East","","","","",""],
				["","Sum of Price","25.7","25.12","22.31","73.13"],
				["","Sum of Cost","25.07","24.55","20.98","70.6"],
				["West","","","","",""],
				["","Sum of Price","12.06","24.11","24.86","61.03"],
				["","Sum of Cost","11.51","22.4","24.23","58.14"],
				["Total Sum of Price","","37.76","49.23","47.17","134.16"],
				["Total Sum of Cost","","36.58","46.95","45.21","128.74"]
		],
		"outline_1row_2col_0data": [
				["","Style","Units","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","","","","","","","","","","","","","","",""],
				["West","","","","","","","","","","","","","","",""],
				["Grand Total","","","","","","","","","","","","","","",""]
		],
		"outline_1row_2col_1data": [
				["Sum of Price","Style","Units","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["West","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["Grand Total","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"]
		],
		"outline_1row_2col_2data_col": [
				["","Style","Units","Values","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["","10","","11","","12","","","","10","","11","","12","","15","","","","10","","11","","12","","15","","","","",""],
				["Region","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","",""],
				["East","13.74","13.33","","","11.96","11.74","25.7","25.07","12.12","11.95","","","13","12.6","","","25.12","24.55","11.27","10.56","","","11.04","10.42","","","22.31","20.98","73.13","70.6"],
				["West","","","12.06","11.51","","","12.06","11.51","","","12.63","11.73","","","11.48","10.67","24.11","22.4","","","11.44","10.94","","","13.42","13.29","24.86","24.23","61.03","58.14"],
				["Grand Total","13.74","13.33","12.06","11.51","11.96","11.74","37.76","36.58","12.12","11.95","12.63","11.73","13","12.6","11.48","10.67","49.23","46.95","11.27","10.56","11.44","10.94","11.04","10.42","13.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"outline_1row_2col_2data_row": [
				["","","Style","Units","","","","","","","","","","","","",""],
				["","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Values","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","","","","","","","","","","","","","","","",""],
				["","Sum of Price","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["","Sum of Cost","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["West","","","","","","","","","","","","","","","",""],
				["","Sum of Price","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["","Sum of Cost","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Total Sum of Price","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"outline_2row_0col_0data": [
				["Region","Gender"],
				["East",""],
				["","Boy"],
				["","Girl"],
				["West",""],
				["","Boy"],
				["","Girl"],
				["Grand Total",""]
		],
		"outline_2row_0col_1data": [
				["Region","Gender","Sum of Price"],
				["East","","73.13"],
				["","Boy","36"],
				["","Girl","37.13"],
				["West","","61.03"],
				["","Boy","36.13"],
				["","Girl","24.9"],
				["Grand Total","","134.16"]
		],
		"outline_2row_0col_2data_col": [
				["Region","Gender","Sum of Price","Sum of Cost"],
				["East","","73.13","70.6"],
				["","Boy","36","34.76"],
				["","Girl","37.13","35.84"],
				["West","","61.03","58.14"],
				["","Boy","36.13","34.18"],
				["","Girl","24.9","23.96"],
				["Grand Total","","134.16","128.74"]
		],
		"outline_2row_0col_2data_row": [
				["Region","Gender","Values",""],
				["East","","",""],
				["","Boy","",""],
				["","","Sum of Price","36"],
				["","","Sum of Cost","34.76"],
				["","Girl","",""],
				["","","Sum of Price","37.13"],
				["","","Sum of Cost","35.84"],
				["East Sum of Price","","","73.13"],
				["East Sum of Cost","","","70.6"],
				["West","","",""],
				["","Boy","",""],
				["","","Sum of Price","36.13"],
				["","","Sum of Cost","34.18"],
				["","Girl","",""],
				["","","Sum of Price","24.9"],
				["","","Sum of Cost","23.96"],
				["West Sum of Price","","","61.03"],
				["West Sum of Cost","","","58.14"],
				["Total Sum of Price","","","134.16"],
				["Total Sum of Cost","","","128.74"]
		],
		"outline_2row_1col_0data": [
				["","","Style","","",""],
				["Region","Gender","Fancy","Golf","Tee","Grand Total"],
				["East","","","","",""],
				["","Boy","","","",""],
				["","Girl","","","",""],
				["West","","","","",""],
				["","Boy","","","",""],
				["","Girl","","","",""],
				["Grand Total","","","","",""]
		],
		"outline_2row_1col_1data": [
				["Sum of Price","","Style","","",""],
				["Region","Gender","Fancy","Golf","Tee","Grand Total"],
				["East","","25.7","25.12","22.31","73.13"],
				["","Boy","11.96","13","11.04","36"],
				["","Girl","13.74","12.12","11.27","37.13"],
				["West","","12.06","24.11","24.86","61.03"],
				["","Boy","12.06","12.63","11.44","36.13"],
				["","Girl","","11.48","13.42","24.9"],
				["Grand Total","","37.76","49.23","47.17","134.16"]
		],
		"outline_2row_1col_2data_col": [
				["","","Style","Values","","","","","",""],
				["","","Fancy","","Golf","","Tee","","Total Sum of Price","Total Sum of Cost"],
				["Region","Gender","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","",""],
				["East","","25.7","25.07","25.12","24.55","22.31","20.98","73.13","70.6"],
				["","Boy","11.96","11.74","13","12.6","11.04","10.42","36","34.76"],
				["","Girl","13.74","13.33","12.12","11.95","11.27","10.56","37.13","35.84"],
				["West","","12.06","11.51","24.11","22.4","24.86","24.23","61.03","58.14"],
				["","Boy","12.06","11.51","12.63","11.73","11.44","10.94","36.13","34.18"],
				["","Girl","","","11.48","10.67","13.42","13.29","24.9","23.96"],
				["Grand Total","","37.76","36.58","49.23","46.95","47.17","45.21","134.16","128.74"]
		],
		"outline_2row_1col_2data_row": [
				["","","","Style","","",""],
				["Region","Gender","Values","Fancy","Golf","Tee","Grand Total"],
				["East","","","","","",""],
				["","Boy","","","","",""],
				["","","Sum of Price","11.96","13","11.04","36"],
				["","","Sum of Cost","11.74","12.6","10.42","34.76"],
				["","Girl","","","","",""],
				["","","Sum of Price","13.74","12.12","11.27","37.13"],
				["","","Sum of Cost","13.33","11.95","10.56","35.84"],
				["East Sum of Price","","","25.7","25.12","22.31","73.13"],
				["East Sum of Cost","","","25.07","24.55","20.98","70.6"],
				["West","","","","","",""],
				["","Boy","","","","",""],
				["","","Sum of Price","12.06","12.63","11.44","36.13"],
				["","","Sum of Cost","11.51","11.73","10.94","34.18"],
				["","Girl","","","","",""],
				["","","Sum of Price","","11.48","13.42","24.9"],
				["","","Sum of Cost","","10.67","13.29","23.96"],
				["West Sum of Price","","","12.06","24.11","24.86","61.03"],
				["West Sum of Cost","","","11.51","22.4","24.23","58.14"],
				["Total Sum of Price","","","37.76","49.23","47.17","134.16"],
				["Total Sum of Cost","","","36.58","46.95","45.21","128.74"]
		],
		"outline_2row_2col_0data": [
				["","","Style","Units","","","","","","","","","","","","",""],
				["","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Gender","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","","","","","","","","","","","","","","","",""],
				["","Boy","","","","","","","","","","","","","","",""],
				["","Girl","","","","","","","","","","","","","","",""],
				["West","","","","","","","","","","","","","","","",""],
				["","Boy","","","","","","","","","","","","","","",""],
				["","Girl","","","","","","","","","","","","","","",""],
				["Grand Total","","","","","","","","","","","","","","","",""]
		],
		"outline_2row_2col_1data": [
				["Sum of Price","","Style","Units","","","","","","","","","","","","",""],
				["","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Gender","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["","Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["","Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["West","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["","Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["","Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["Grand Total","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"]
		],
		"outline_2row_2col_2data_col": [
				["","","Style","Units","Values","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","","Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["","","10","","11","","12","","","","10","","11","","12","","15","","","","10","","11","","12","","15","","","","",""],
				["Region","Gender","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","",""],
				["East","","13.74","13.33","","","11.96","11.74","25.7","25.07","12.12","11.95","","","13","12.6","","","25.12","24.55","11.27","10.56","","","11.04","10.42","","","22.31","20.98","73.13","70.6"],
				["","Boy","","","","","11.96","11.74","11.96","11.74","","","","","13","12.6","","","13","12.6","","","","","11.04","10.42","","","11.04","10.42","36","34.76"],
				["","Girl","13.74","13.33","","","","","13.74","13.33","12.12","11.95","","","","","","","12.12","11.95","11.27","10.56","","","","","","","11.27","10.56","37.13","35.84"],
				["West","","","","12.06","11.51","","","12.06","11.51","","","12.63","11.73","","","11.48","10.67","24.11","22.4","","","11.44","10.94","","","13.42","13.29","24.86","24.23","61.03","58.14"],
				["","Boy","","","12.06","11.51","","","12.06","11.51","","","12.63","11.73","","","","","12.63","11.73","","","11.44","10.94","","","","","11.44","10.94","36.13","34.18"],
				["","Girl","","","","","","","","","","","","","","","11.48","10.67","11.48","10.67","","","","","","","13.42","13.29","13.42","13.29","24.9","23.96"],
				["Grand Total","","13.74","13.33","12.06","11.51","11.96","11.74","37.76","36.58","12.12","11.95","12.63","11.73","13","12.6","11.48","10.67","49.23","46.95","11.27","10.56","11.44","10.94","11.04","10.42","13.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"outline_2row_2col_2data_col2": [
				["","","Style","Values","Units","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","","Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["","","Sum of Price","","","Sum of Cost","","","","","Sum of Price","","","","Sum of Cost","","","","","","Sum of Price","","","","Sum of Cost","","","","","","",""],
				["Region","Gender","10","11","12","10","11","12","","","10","11","12","15","10","11","12","15","","","10","11","12","15","10","11","12","15","","","",""],
				["East","","13.74","","11.96","13.33","","11.74","25.7","25.07","12.12","","13","","11.95","","12.6","","25.12","24.55","11.27","","11.04","","10.56","","10.42","","22.31","20.98","73.13","70.6"],
				["","Boy","","","11.96","","","11.74","11.96","11.74","","","13","","","","12.6","","13","12.6","","","11.04","","","","10.42","","11.04","10.42","36","34.76"],
				["","Girl","13.74","","","13.33","","","13.74","13.33","12.12","","","","11.95","","","","12.12","11.95","11.27","","","","10.56","","","","11.27","10.56","37.13","35.84"],
				["West","","","12.06","","","11.51","","12.06","11.51","","12.63","","11.48","","11.73","","10.67","24.11","22.4","","11.44","","13.42","","10.94","","13.29","24.86","24.23","61.03","58.14"],
				["","Boy","","12.06","","","11.51","","12.06","11.51","","12.63","","","","11.73","","","12.63","11.73","","11.44","","","","10.94","","","11.44","10.94","36.13","34.18"],
				["","Girl","","","","","","","","","","","","11.48","","","","10.67","11.48","10.67","","","","13.42","","","","13.29","13.42","13.29","24.9","23.96"],
				["Grand Total","","13.74","12.06","11.96","13.33","11.51","11.74","37.76","36.58","12.12","12.63","13","11.48","11.95","11.73","12.6","10.67","49.23","46.95","11.27","11.44","11.04","13.42","10.56","10.94","10.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"outline_2row_2col_2data_col1": [
				["","","Values","Style","Units","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","","Sum of Price","","","","","","","","","","","","","","Sum of Cost","","","","","","","","","","","","","","Total Sum of Price","Total Sum of Cost"],
				["","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","",""],
				["Region","Gender","10","11","12","","10","11","12","15","","10","11","12","15","","10","11","12","","10","11","12","15","","10","11","12","15","","",""],
				["East","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","73.13","70.6"],
				["","Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","36","34.76"],
				["","Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","37.13","35.84"],
				["West","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","61.03","58.14"],
				["","Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","36.13","34.18"],
				["","Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","","","","","","","","10.67","10.67","","","","13.29","13.29","24.9","23.96"],
				["Grand Total","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","134.16","128.74"]
		],
		"outline_2row_2col_2data_row": [
				["","","","Style","Units","","","","","","","","","","","","",""],
				["","","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Gender","Values","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","","","","","","","","","","","","","","","","",""],
				["","Boy","","","","","","","","","","","","","","","",""],
				["","","Sum of Price","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["","","Sum of Cost","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","34.76"],
				["","Girl","","","","","","","","","","","","","","","",""],
				["","","Sum of Price","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["","","Sum of Cost","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","35.84"],
				["East Sum of Price","","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["East Sum of Cost","","","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["West","","","","","","","","","","","","","","","","",""],
				["","Boy","","","","","","","","","","","","","","","",""],
				["","","Sum of Price","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["","","Sum of Cost","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","34.18"],
				["","Girl","","","","","","","","","","","","","","","",""],
				["","","Sum of Price","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["","","Sum of Cost","","","","","","","","10.67","10.67","","","","13.29","13.29","23.96"],
				["West Sum of Price","","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["West Sum of Cost","","","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Total Sum of Price","","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","","","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"outline_2row_2col_2data_row2": [
				["","","","Style","Units","","","","","","","","","","","","",""],
				["","","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Values","Gender","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","","","","","","","","","","","","","","","","",""],
				["","Sum of Price","","","","","","","","","","","","","","","",""],
				["","","Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["","","Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["","Sum of Cost","","","","","","","","","","","","","","","",""],
				["","","Boy","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","34.76"],
				["","","Girl","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","35.84"],
				["East Sum of Price","","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["East Sum of Cost","","","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["West","","","","","","","","","","","","","","","","",""],
				["","Sum of Price","","","","","","","","","","","","","","","",""],
				["","","Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["","","Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["","Sum of Cost","","","","","","","","","","","","","","","",""],
				["","","Boy","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","34.18"],
				["","","Girl","","","","","","","","10.67","10.67","","","","13.29","13.29","23.96"],
				["West Sum of Price","","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["West Sum of Cost","","","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Total Sum of Price","","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","","","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"outline_2row_2col_2data_row1": [
				["","","","Style","Units","","","","","","","","","","","","",""],
				["","","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Values","Region","Gender","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["Sum of Price","","","","","","","","","","","","","","","","",""],
				["","East","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["","","Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["","","Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["","West","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["","","Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["","","Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["Sum of Cost","","","","","","","","","","","","","","","","",""],
				["","East","","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["","","Boy","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","34.76"],
				["","","Girl","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","35.84"],
				["","West","","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["","","Boy","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","34.18"],
				["","","Girl","","","","","","","","10.67","10.67","","","","13.29","13.29","23.96"],
				["Total Sum of Price","","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","","","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"tabular_0row_0col_0data": [
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""],
				["","",""]
		],
		"tabular_0row_0col_1data": [
				["Sum of Price"],
				["134.16"]
		],
		"tabular_0row_0col_2data_col": [
				["Sum of Price","Sum of Cost"],
				["134.16","128.74"]
		],
		"tabular_0row_0col_2data_row": [
				["Values",""],
				["Sum of Price","134.16"],
				["Sum of Cost","128.74"]
		],
		"tabular_0row_1col_0data": [
				["Style","","",""],
				["Fancy","Golf","Tee","Grand Total"]
		],
		"tabular_0row_1col_1data": [
				["","Style","","",""],
				["","Fancy","Golf","Tee","Grand Total"],
				["Sum of Price","37.76","49.23","47.17","134.16"]
		],
		"tabular_0row_1col_2data_col": [
				["Style","Values","","","","","",""],
				["Fancy","","Golf","","Tee","","Total Sum of Price","Total Sum of Cost"],
				["Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","",""],
				["37.76","36.58","49.23","46.95","47.17","45.21","134.16","128.74"]
		],
		"tabular_0row_1col_2data_row": [
				["","Style","","",""],
				["Values","Fancy","Golf","Tee","Grand Total"],
				["Sum of Price","37.76","49.23","47.17","134.16"],
				["Sum of Cost","36.58","46.95","45.21","128.74"]
		],
		"tabular_0row_2col_0data": [
				["Style","Units","","","","","","","","","","","","",""],
				["Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["10","11","12","","10","11","12","15","","10","11","12","15","",""]
		],
		"tabular_0row_2col_1data": [
				["","Style","Units","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["Sum of Price","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"]
		],
		"tabular_0row_2col_2data_col": [
				["Style","Units","Values","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["10","","11","","12","","","","10","","11","","12","","15","","","","10","","11","","12","","15","","","","",""],
				["Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","",""],
				["13.74","13.33","12.06","11.51","11.96","11.74","37.76","36.58","12.12","11.95","12.63","11.73","13","12.6","11.48","10.67","49.23","46.95","11.27","10.56","11.44","10.94","11.04","10.42","13.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"tabular_0row_2col_2data_row": [
				["","Style","Units","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Values","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["Sum of Price","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Sum of Cost","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"tabular_1row_0col_0data": [
				["Region"],
				["East"],
				["West"],
				["Grand Total"]
		],
		"tabular_1row_0col_1data": [
				["Region","Sum of Price"],
				["East","73.13"],
				["West","61.03"],
				["Grand Total","134.16"]
		],
		"tabular_1row_0col_2data_col": [
				["Region","Sum of Price","Sum of Cost"],
				["East","73.13","70.6"],
				["West","61.03","58.14"],
				["Grand Total","134.16","128.74"]
		],
		"tabular_1row_0col_2data_row": [
				["Region","Values",""],
				["East","Sum of Price","73.13"],
				["","Sum of Cost","70.6"],
				["West","Sum of Price","61.03"],
				["","Sum of Cost","58.14"],
				["Total Sum of Price","","134.16"],
				["Total Sum of Cost","","128.74"]
		],
		"tabular_1row_1col_0data": [
				["","Style","","",""],
				["Region","Fancy","Golf","Tee","Grand Total"],
				["East","","","",""],
				["West","","","",""],
				["Grand Total","","","",""]
		],
		"tabular_1row_1col_1data": [
				["Sum of Price","Style","","",""],
				["Region","Fancy","Golf","Tee","Grand Total"],
				["East","25.7","25.12","22.31","73.13"],
				["West","12.06","24.11","24.86","61.03"],
				["Grand Total","37.76","49.23","47.17","134.16"]
		],
		"tabular_1row_1col_2data_col": [
				["","Style","Values","","","","","",""],
				["","Fancy","","Golf","","Tee","","Total Sum of Price","Total Sum of Cost"],
				["Region","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","",""],
				["East","25.7","25.07","25.12","24.55","22.31","20.98","73.13","70.6"],
				["West","12.06","11.51","24.11","22.4","24.86","24.23","61.03","58.14"],
				["Grand Total","37.76","36.58","49.23","46.95","47.17","45.21","134.16","128.74"]
		],
		"tabular_1row_1col_2data_row": [
				["","","Style","","",""],
				["Region","Values","Fancy","Golf","Tee","Grand Total"],
				["East","Sum of Price","25.7","25.12","22.31","73.13"],
				["","Sum of Cost","25.07","24.55","20.98","70.6"],
				["West","Sum of Price","12.06","24.11","24.86","61.03"],
				["","Sum of Cost","11.51","22.4","24.23","58.14"],
				["Total Sum of Price","","37.76","49.23","47.17","134.16"],
				["Total Sum of Cost","","36.58","46.95","45.21","128.74"]
		],
		"tabular_1row_2col_0data": [
				["","Style","Units","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","","","","","","","","","","","","","","",""],
				["West","","","","","","","","","","","","","","",""],
				["Grand Total","","","","","","","","","","","","","","",""]
		],
		"tabular_1row_2col_1data": [
				["Sum of Price","Style","Units","","","","","","","","","","","","",""],
				["","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["West","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["Grand Total","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"]
		],
		"tabular_1row_2col_2data_col": [
				["","Style","Units","Values","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["","10","","11","","12","","","","10","","11","","12","","15","","","","10","","11","","12","","15","","","","",""],
				["Region","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","",""],
				["East","13.74","13.33","","","11.96","11.74","25.7","25.07","12.12","11.95","","","13","12.6","","","25.12","24.55","11.27","10.56","","","11.04","10.42","","","22.31","20.98","73.13","70.6"],
				["West","","","12.06","11.51","","","12.06","11.51","","","12.63","11.73","","","11.48","10.67","24.11","22.4","","","11.44","10.94","","","13.42","13.29","24.86","24.23","61.03","58.14"],
				["Grand Total","13.74","13.33","12.06","11.51","11.96","11.74","37.76","36.58","12.12","11.95","12.63","11.73","13","12.6","11.48","10.67","49.23","46.95","11.27","10.56","11.44","10.94","11.04","10.42","13.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"tabular_1row_2col_2data_row": [
				["","","Style","Units","","","","","","","","","","","","",""],
				["","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Values","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","Sum of Price","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["","Sum of Cost","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["West","Sum of Price","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["","Sum of Cost","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Total Sum of Price","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"tabular_2row_0col_0data": [
				["Region","Gender"],
				["East","Boy"],
				["","Girl"],
				["East Total",""],
				["West","Boy"],
				["","Girl"],
				["West Total",""],
				["Grand Total",""]
		],
		"tabular_2row_0col_1data": [
				["Region","Gender","Sum of Price"],
				["East","Boy","36"],
				["","Girl","37.13"],
				["East Total","","73.13"],
				["West","Boy","36.13"],
				["","Girl","24.9"],
				["West Total","","61.03"],
				["Grand Total","","134.16"]
		],
		"tabular_2row_0col_2data_col": [
				["Region","Gender","Sum of Price","Sum of Cost"],
				["East","Boy","36","34.76"],
				["","Girl","37.13","35.84"],
				["East Total","","73.13","70.6"],
				["West","Boy","36.13","34.18"],
				["","Girl","24.9","23.96"],
				["West Total","","61.03","58.14"],
				["Grand Total","","134.16","128.74"]
		],
		"tabular_2row_0col_2data_row": [
				["Region","Gender","Values",""],
				["East","Boy","Sum of Price","36"],
				["","","Sum of Cost","34.76"],
				["","Girl","Sum of Price","37.13"],
				["","","Sum of Cost","35.84"],
				["East Sum of Price","","","73.13"],
				["East Sum of Cost","","","70.6"],
				["West","Boy","Sum of Price","36.13"],
				["","","Sum of Cost","34.18"],
				["","Girl","Sum of Price","24.9"],
				["","","Sum of Cost","23.96"],
				["West Sum of Price","","","61.03"],
				["West Sum of Cost","","","58.14"],
				["Total Sum of Price","","","134.16"],
				["Total Sum of Cost","","","128.74"]
		],
		"tabular_2row_1col_0data": [
				["","","Style","","",""],
				["Region","Gender","Fancy","Golf","Tee","Grand Total"],
				["East","Boy","","","",""],
				["","Girl","","","",""],
				["East Total","","","","",""],
				["West","Boy","","","",""],
				["","Girl","","","",""],
				["West Total","","","","",""],
				["Grand Total","","","","",""]
		],
		"tabular_2row_1col_1data": [
				["Sum of Price","","Style","","",""],
				["Region","Gender","Fancy","Golf","Tee","Grand Total"],
				["East","Boy","11.96","13","11.04","36"],
				["","Girl","13.74","12.12","11.27","37.13"],
				["East Total","","25.7","25.12","22.31","73.13"],
				["West","Boy","12.06","12.63","11.44","36.13"],
				["","Girl","","11.48","13.42","24.9"],
				["West Total","","12.06","24.11","24.86","61.03"],
				["Grand Total","","37.76","49.23","47.17","134.16"]
		],
		"tabular_2row_1col_2data_col": [
				["","","Style","Values","","","","","",""],
				["","","Fancy","","Golf","","Tee","","Total Sum of Price","Total Sum of Cost"],
				["Region","Gender","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","",""],
				["East","Boy","11.96","11.74","13","12.6","11.04","10.42","36","34.76"],
				["","Girl","13.74","13.33","12.12","11.95","11.27","10.56","37.13","35.84"],
				["East Total","","25.7","25.07","25.12","24.55","22.31","20.98","73.13","70.6"],
				["West","Boy","12.06","11.51","12.63","11.73","11.44","10.94","36.13","34.18"],
				["","Girl","","","11.48","10.67","13.42","13.29","24.9","23.96"],
				["West Total","","12.06","11.51","24.11","22.4","24.86","24.23","61.03","58.14"],
				["Grand Total","","37.76","36.58","49.23","46.95","47.17","45.21","134.16","128.74"]
		],
		"tabular_2row_1col_2data_row": [
				["","","","Style","","",""],
				["Region","Gender","Values","Fancy","Golf","Tee","Grand Total"],
				["East","Boy","Sum of Price","11.96","13","11.04","36"],
				["","","Sum of Cost","11.74","12.6","10.42","34.76"],
				["","Girl","Sum of Price","13.74","12.12","11.27","37.13"],
				["","","Sum of Cost","13.33","11.95","10.56","35.84"],
				["East Sum of Price","","","25.7","25.12","22.31","73.13"],
				["East Sum of Cost","","","25.07","24.55","20.98","70.6"],
				["West","Boy","Sum of Price","12.06","12.63","11.44","36.13"],
				["","","Sum of Cost","11.51","11.73","10.94","34.18"],
				["","Girl","Sum of Price","","11.48","13.42","24.9"],
				["","","Sum of Cost","","10.67","13.29","23.96"],
				["West Sum of Price","","","12.06","24.11","24.86","61.03"],
				["West Sum of Cost","","","11.51","22.4","24.23","58.14"],
				["Total Sum of Price","","","37.76","49.23","47.17","134.16"],
				["Total Sum of Cost","","","36.58","46.95","45.21","128.74"]
		],
		"tabular_2row_2col_0data": [
				["","","Style","Units","","","","","","","","","","","","",""],
				["","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Gender","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","Boy","","","","","","","","","","","","","","",""],
				["","Girl","","","","","","","","","","","","","","",""],
				["East Total","","","","","","","","","","","","","","","",""],
				["West","Boy","","","","","","","","","","","","","","",""],
				["","Girl","","","","","","","","","","","","","","",""],
				["West Total","","","","","","","","","","","","","","","",""],
				["Grand Total","","","","","","","","","","","","","","","",""]
		],
		"tabular_2row_2col_1data": [
				["Sum of Price","","Style","Units","","","","","","","","","","","","",""],
				["","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Gender","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["","Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["East Total","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["West","Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["","Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["West Total","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["Grand Total","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"]
		],
		"tabular_2row_2col_2data_col": [
				["","","Style","Units","Values","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","","Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["","","10","","11","","12","","","","10","","11","","12","","15","","","","10","","11","","12","","15","","","","",""],
				["Region","Gender","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","Sum of Price","Sum of Cost","","","",""],
				["East","Boy","","","","","11.96","11.74","11.96","11.74","","","","","13","12.6","","","13","12.6","","","","","11.04","10.42","","","11.04","10.42","36","34.76"],
				["","Girl","13.74","13.33","","","","","13.74","13.33","12.12","11.95","","","","","","","12.12","11.95","11.27","10.56","","","","","","","11.27","10.56","37.13","35.84"],
				["East Total","","13.74","13.33","","","11.96","11.74","25.7","25.07","12.12","11.95","","","13","12.6","","","25.12","24.55","11.27","10.56","","","11.04","10.42","","","22.31","20.98","73.13","70.6"],
				["West","Boy","","","12.06","11.51","","","12.06","11.51","","","12.63","11.73","","","","","12.63","11.73","","","11.44","10.94","","","","","11.44","10.94","36.13","34.18"],
				["","Girl","","","","","","","","","","","","","","","11.48","10.67","11.48","10.67","","","","","","","13.42","13.29","13.42","13.29","24.9","23.96"],
				["West Total","","","","12.06","11.51","","","12.06","11.51","","","12.63","11.73","","","11.48","10.67","24.11","22.4","","","11.44","10.94","","","13.42","13.29","24.86","24.23","61.03","58.14"],
				["Grand Total","","13.74","13.33","12.06","11.51","11.96","11.74","37.76","36.58","12.12","11.95","12.63","11.73","13","12.6","11.48","10.67","49.23","46.95","11.27","10.56","11.44","10.94","11.04","10.42","13.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"tabular_2row_2col_2data_col2": [
				["","","Style","Values","Units","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","","Fancy","","","","","","Fancy Sum of Price","Fancy Sum of Cost","Golf","","","","","","","","Golf Sum of Price","Golf Sum of Cost","Tee","","","","","","","","Tee Sum of Price","Tee Sum of Cost","Total Sum of Price","Total Sum of Cost"],
				["","","Sum of Price","","","Sum of Cost","","","","","Sum of Price","","","","Sum of Cost","","","","","","Sum of Price","","","","Sum of Cost","","","","","","",""],
				["Region","Gender","10","11","12","10","11","12","","","10","11","12","15","10","11","12","15","","","10","11","12","15","10","11","12","15","","","",""],
				["East","Boy","","","11.96","","","11.74","11.96","11.74","","","13","","","","12.6","","13","12.6","","","11.04","","","","10.42","","11.04","10.42","36","34.76"],
				["","Girl","13.74","","","13.33","","","13.74","13.33","12.12","","","","11.95","","","","12.12","11.95","11.27","","","","10.56","","","","11.27","10.56","37.13","35.84"],
				["East Total","","13.74","","11.96","13.33","","11.74","25.7","25.07","12.12","","13","","11.95","","12.6","","25.12","24.55","11.27","","11.04","","10.56","","10.42","","22.31","20.98","73.13","70.6"],
				["West","Boy","","12.06","","","11.51","","12.06","11.51","","12.63","","","","11.73","","","12.63","11.73","","11.44","","","","10.94","","","11.44","10.94","36.13","34.18"],
				["","Girl","","","","","","","","","","","","11.48","","","","10.67","11.48","10.67","","","","13.42","","","","13.29","13.42","13.29","24.9","23.96"],
				["West Total","","","12.06","","","11.51","","12.06","11.51","","12.63","","11.48","","11.73","","10.67","24.11","22.4","","11.44","","13.42","","10.94","","13.29","24.86","24.23","61.03","58.14"],
				["Grand Total","","13.74","12.06","11.96","13.33","11.51","11.74","37.76","36.58","12.12","12.63","13","11.48","11.95","11.73","12.6","10.67","49.23","46.95","11.27","11.44","11.04","13.42","10.56","10.94","10.42","13.29","47.17","45.21","134.16","128.74"]
		],
		"tabular_2row_2col_2data_col1": [
				["","","Values","Style","Units","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				["","","Sum of Price","","","","","","","","","","","","","","Sum of Cost","","","","","","","","","","","","","","Total Sum of Price","Total Sum of Cost"],
				["","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","",""],
				["Region","Gender","10","11","12","","10","11","12","15","","10","11","12","15","","10","11","12","","10","11","12","15","","10","11","12","15","","",""],
				["East","Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","36","34.76"],
				["","Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","37.13","35.84"],
				["East Total","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","73.13","70.6"],
				["West","Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","36.13","34.18"],
				["","Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","","","","","","","","10.67","10.67","","","","13.29","13.29","24.9","23.96"],
				["West Total","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","61.03","58.14"],
				["Grand Total","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","134.16","128.74"]
		],
		"tabular_2row_2col_2data_row": [
				["","","","Style","Units","","","","","","","","","","","","",""],
				["","","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Gender","Values","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","Boy","Sum of Price","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["","","Sum of Cost","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","34.76"],
				["","Girl","Sum of Price","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["","","Sum of Cost","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","35.84"],
				["East Sum of Price","","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["East Sum of Cost","","","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["West","Boy","Sum of Price","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["","","Sum of Cost","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","34.18"],
				["","Girl","Sum of Price","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["","","Sum of Cost","","","","","","","","10.67","10.67","","","","13.29","13.29","23.96"],
				["West Sum of Price","","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["West Sum of Cost","","","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Total Sum of Price","","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","","","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"tabular_2row_2col_2data_row2": [
				["","","","Style","Units","","","","","","","","","","","","",""],
				["","","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Region","Values","Gender","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["East","Sum of Price","Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["","","Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["","Sum of Cost","Boy","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","34.76"],
				["","","Girl","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","35.84"],
				["East Sum of Price","","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["East Sum of Cost","","","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["West","Sum of Price","Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["","","Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["","Sum of Cost","Boy","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","34.18"],
				["","","Girl","","","","","","","","10.67","10.67","","","","13.29","13.29","23.96"],
				["West Sum of Price","","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["West Sum of Cost","","","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Total Sum of Price","","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","","","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"tabular_2row_2col_2data_row1": [
				["","","","Style","Units","","","","","","","","","","","","",""],
				["","","","Fancy","","","Fancy Total","Golf","","","","Golf Total","Tee","","","","Tee Total","Grand Total"],
				["Values","Region","Gender","10","11","12","","10","11","12","15","","10","11","12","15","",""],
				["Sum of Price","East","Boy","","","11.96","11.96","","","13","","13","","","11.04","","11.04","36"],
				["","","Girl","13.74","","","13.74","12.12","","","","12.12","11.27","","","","11.27","37.13"],
				["","East Total","","13.74","","11.96","25.7","12.12","","13","","25.12","11.27","","11.04","","22.31","73.13"],
				["","West","Boy","","12.06","","12.06","","12.63","","","12.63","","11.44","","","11.44","36.13"],
				["","","Girl","","","","","","","","11.48","11.48","","","","13.42","13.42","24.9"],
				["","West Total","","","12.06","","12.06","","12.63","","11.48","24.11","","11.44","","13.42","24.86","61.03"],
				["Sum of Cost","East","Boy","","","11.74","11.74","","","12.6","","12.6","","","10.42","","10.42","34.76"],
				["","","Girl","13.33","","","13.33","11.95","","","","11.95","10.56","","","","10.56","35.84"],
				["","East Total","","13.33","","11.74","25.07","11.95","","12.6","","24.55","10.56","","10.42","","20.98","70.6"],
				["","West","Boy","","11.51","","11.51","","11.73","","","11.73","","10.94","","","10.94","34.18"],
				["","","Girl","","","","","","","","10.67","10.67","","","","13.29","13.29","23.96"],
				["","West Total","","","11.51","","11.51","","11.73","","10.67","22.4","","10.94","","13.29","24.23","58.14"],
				["Total Sum of Price","","","13.74","12.06","11.96","37.76","12.12","12.63","13","11.48","49.23","11.27","11.44","11.04","13.42","47.17","134.16"],
				["Total Sum of Cost","","","13.33","11.51","11.74","36.58","11.95","11.73","12.6","10.67","46.95","10.56","10.94","10.42","13.29","45.21","128.74"]
		],
		"subtotal_compact_none": [
				["Row Labels",""],
				["East",""],
				["Boy",""],
				["Sum of Price",""],
				["Fancy",""],
				["12","11.96"],
				["Golf",""],
				["12","13"],
				["Tee",""],
				["12","11.04"],
				["Sum of Cost",""],
				["Fancy",""],
				["12","11.74"],
				["Golf",""],
				["12","12.6"],
				["Tee",""],
				["12","10.42"],
				["Girl",""],
				["Sum of Price",""],
				["Fancy",""],
				["10","13.74"],
				["Golf",""],
				["10","12.12"],
				["Tee",""],
				["10","11.27"],
				["Sum of Cost",""],
				["Fancy",""],
				["10","13.33"],
				["Golf",""],
				["10","11.95"],
				["Tee",""],
				["10","10.56"],
				["West",""],
				["Boy",""],
				["Sum of Price",""],
				["Fancy",""],
				["11","12.06"],
				["Golf",""],
				["11","12.63"],
				["Tee",""],
				["11","11.44"],
				["Sum of Cost",""],
				["Fancy",""],
				["11","11.51"],
				["Golf",""],
				["11","11.73"],
				["Tee",""],
				["11","10.94"],
				["Girl",""],
				["Sum of Price",""],
				["Golf",""],
				["15","11.48"],
				["Tee",""],
				["15","13.42"],
				["Sum of Cost",""],
				["Golf",""],
				["15","10.67"],
				["Tee",""],
				["15","13.29"],
				["Total Sum of Price","134.16"],
				["Total Sum of Cost","128.74"]
		],
		"subtotal_compact_top": [
				["Row Labels",""],
				["East",""],
				["Boy",""],
				["Sum of Price",""],
				["Fancy","11.96"],
				["12","11.96"],
				["Golf","13"],
				["12","13"],
				["Tee","11.04"],
				["12","11.04"],
				["Sum of Cost",""],
				["Fancy","11.74"],
				["12","11.74"],
				["Golf","12.6"],
				["12","12.6"],
				["Tee","10.42"],
				["12","10.42"],
				["Boy Sum of Price","36"],
				["Boy Sum of Cost","34.76"],
				["Girl",""],
				["Sum of Price",""],
				["Fancy","13.74"],
				["10","13.74"],
				["Golf","12.12"],
				["10","12.12"],
				["Tee","11.27"],
				["10","11.27"],
				["Sum of Cost",""],
				["Fancy","13.33"],
				["10","13.33"],
				["Golf","11.95"],
				["10","11.95"],
				["Tee","10.56"],
				["10","10.56"],
				["Girl Sum of Price","37.13"],
				["Girl Sum of Cost","35.84"],
				["East Sum of Price","73.13"],
				["East Sum of Cost","70.6"],
				["West",""],
				["Boy",""],
				["Sum of Price",""],
				["Fancy","12.06"],
				["11","12.06"],
				["Golf","12.63"],
				["11","12.63"],
				["Tee","11.44"],
				["11","11.44"],
				["Sum of Cost",""],
				["Fancy","11.51"],
				["11","11.51"],
				["Golf","11.73"],
				["11","11.73"],
				["Tee","10.94"],
				["11","10.94"],
				["Boy Sum of Price","36.13"],
				["Boy Sum of Cost","34.18"],
				["Girl",""],
				["Sum of Price",""],
				["Golf","11.48"],
				["15","11.48"],
				["Tee","13.42"],
				["15","13.42"],
				["Sum of Cost",""],
				["Golf","10.67"],
				["15","10.67"],
				["Tee","13.29"],
				["15","13.29"],
				["Girl Sum of Price","24.9"],
				["Girl Sum of Cost","23.96"],
				["West Sum of Price","61.03"],
				["West Sum of Cost","58.14"],
				["Total Sum of Price","134.16"],
				["Total Sum of Cost","128.74"]
		],
		"subtotal_compact_bottom": [
				["Row Labels",""],
				["East",""],
				["Boy",""],
				["Sum of Price",""],
				["Fancy",""],
				["12","11.96"],
				["Fancy Total","11.96"],
				["Golf",""],
				["12","13"],
				["Golf Total","13"],
				["Tee",""],
				["12","11.04"],
				["Tee Total","11.04"],
				["Sum of Cost",""],
				["Fancy",""],
				["12","11.74"],
				["Fancy Total","11.74"],
				["Golf",""],
				["12","12.6"],
				["Golf Total","12.6"],
				["Tee",""],
				["12","10.42"],
				["Tee Total","10.42"],
				["Boy Sum of Price","36"],
				["Boy Sum of Cost","34.76"],
				["Girl",""],
				["Sum of Price",""],
				["Fancy",""],
				["10","13.74"],
				["Fancy Total","13.74"],
				["Golf",""],
				["10","12.12"],
				["Golf Total","12.12"],
				["Tee",""],
				["10","11.27"],
				["Tee Total","11.27"],
				["Sum of Cost",""],
				["Fancy",""],
				["10","13.33"],
				["Fancy Total","13.33"],
				["Golf",""],
				["10","11.95"],
				["Golf Total","11.95"],
				["Tee",""],
				["10","10.56"],
				["Tee Total","10.56"],
				["Girl Sum of Price","37.13"],
				["Girl Sum of Cost","35.84"],
				["East Sum of Price","73.13"],
				["East Sum of Cost","70.6"],
				["West",""],
				["Boy",""],
				["Sum of Price",""],
				["Fancy",""],
				["11","12.06"],
				["Fancy Total","12.06"],
				["Golf",""],
				["11","12.63"],
				["Golf Total","12.63"],
				["Tee",""],
				["11","11.44"],
				["Tee Total","11.44"],
				["Sum of Cost",""],
				["Fancy",""],
				["11","11.51"],
				["Fancy Total","11.51"],
				["Golf",""],
				["11","11.73"],
				["Golf Total","11.73"],
				["Tee",""],
				["11","10.94"],
				["Tee Total","10.94"],
				["Boy Sum of Price","36.13"],
				["Boy Sum of Cost","34.18"],
				["Girl",""],
				["Sum of Price",""],
				["Golf",""],
				["15","11.48"],
				["Golf Total","11.48"],
				["Tee",""],
				["15","13.42"],
				["Tee Total","13.42"],
				["Sum of Cost",""],
				["Golf",""],
				["15","10.67"],
				["Golf Total","10.67"],
				["Tee",""],
				["15","13.29"],
				["Tee Total","13.29"],
				["Girl Sum of Price","24.9"],
				["Girl Sum of Cost","23.96"],
				["West Sum of Price","61.03"],
				["West Sum of Cost","58.14"],
				["Total Sum of Price","134.16"],
				["Total Sum of Cost","128.74"]
		],
		"subtotal_tabular_none": [
				["Region","Gender","Values","Style","Units",""],
				["East","Boy","Sum of Price","Fancy","12","11.96"],
				["","","","Golf","12","13"],
				["","","","Tee","12","11.04"],
				["","","Sum of Cost","Fancy","12","11.74"],
				["","","","Golf","12","12.6"],
				["","","","Tee","12","10.42"],
				["","Girl","Sum of Price","Fancy","10","13.74"],
				["","","","Golf","10","12.12"],
				["","","","Tee","10","11.27"],
				["","","Sum of Cost","Fancy","10","13.33"],
				["","","","Golf","10","11.95"],
				["","","","Tee","10","10.56"],
				["West","Boy","Sum of Price","Fancy","11","12.06"],
				["","","","Golf","11","12.63"],
				["","","","Tee","11","11.44"],
				["","","Sum of Cost","Fancy","11","11.51"],
				["","","","Golf","11","11.73"],
				["","","","Tee","11","10.94"],
				["","Girl","Sum of Price","Golf","15","11.48"],
				["","","","Tee","15","13.42"],
				["","","Sum of Cost","Golf","15","10.67"],
				["","","","Tee","15","13.29"],
				["Total Sum of Price","","","","","134.16"],
				["Total Sum of Cost","","","","","128.74"]
		],
		"subtotal_tabular_top": [
				["Region","Gender","Values","Style","Units",""],
				["East","Boy","Sum of Price","Fancy","12","11.96"],
				["","","","Fancy Total","","11.96"],
				["","","","Golf","12","13"],
				["","","","Golf Total","","13"],
				["","","","Tee","12","11.04"],
				["","","","Tee Total","","11.04"],
				["","","Sum of Cost","Fancy","12","11.74"],
				["","","","Fancy Total","","11.74"],
				["","","","Golf","12","12.6"],
				["","","","Golf Total","","12.6"],
				["","","","Tee","12","10.42"],
				["","","","Tee Total","","10.42"],
				["","Boy Sum of Price","","","","36"],
				["","Boy Sum of Cost","","","","34.76"],
				["","Girl","Sum of Price","Fancy","10","13.74"],
				["","","","Fancy Total","","13.74"],
				["","","","Golf","10","12.12"],
				["","","","Golf Total","","12.12"],
				["","","","Tee","10","11.27"],
				["","","","Tee Total","","11.27"],
				["","","Sum of Cost","Fancy","10","13.33"],
				["","","","Fancy Total","","13.33"],
				["","","","Golf","10","11.95"],
				["","","","Golf Total","","11.95"],
				["","","","Tee","10","10.56"],
				["","","","Tee Total","","10.56"],
				["","Girl Sum of Price","","","","37.13"],
				["","Girl Sum of Cost","","","","35.84"],
				["East Sum of Price","","","","","73.13"],
				["East Sum of Cost","","","","","70.6"],
				["West","Boy","Sum of Price","Fancy","11","12.06"],
				["","","","Fancy Total","","12.06"],
				["","","","Golf","11","12.63"],
				["","","","Golf Total","","12.63"],
				["","","","Tee","11","11.44"],
				["","","","Tee Total","","11.44"],
				["","","Sum of Cost","Fancy","11","11.51"],
				["","","","Fancy Total","","11.51"],
				["","","","Golf","11","11.73"],
				["","","","Golf Total","","11.73"],
				["","","","Tee","11","10.94"],
				["","","","Tee Total","","10.94"],
				["","Boy Sum of Price","","","","36.13"],
				["","Boy Sum of Cost","","","","34.18"],
				["","Girl","Sum of Price","Golf","15","11.48"],
				["","","","Golf Total","","11.48"],
				["","","","Tee","15","13.42"],
				["","","","Tee Total","","13.42"],
				["","","Sum of Cost","Golf","15","10.67"],
				["","","","Golf Total","","10.67"],
				["","","","Tee","15","13.29"],
				["","","","Tee Total","","13.29"],
				["","Girl Sum of Price","","","","24.9"],
				["","Girl Sum of Cost","","","","23.96"],
				["West Sum of Price","","","","","61.03"],
				["West Sum of Cost","","","","","58.14"],
				["Total Sum of Price","","","","","134.16"],
				["Total Sum of Cost","","","","","128.74"]
		],
		"subtotal_tabular_bottom": [
				["Region","Gender","Values","Style","Units",""],
				["East","Boy","Sum of Price","Fancy","12","11.96"],
				["","","","Fancy Total","","11.96"],
				["","","","Golf","12","13"],
				["","","","Golf Total","","13"],
				["","","","Tee","12","11.04"],
				["","","","Tee Total","","11.04"],
				["","","Sum of Cost","Fancy","12","11.74"],
				["","","","Fancy Total","","11.74"],
				["","","","Golf","12","12.6"],
				["","","","Golf Total","","12.6"],
				["","","","Tee","12","10.42"],
				["","","","Tee Total","","10.42"],
				["","Boy Sum of Price","","","","36"],
				["","Boy Sum of Cost","","","","34.76"],
				["","Girl","Sum of Price","Fancy","10","13.74"],
				["","","","Fancy Total","","13.74"],
				["","","","Golf","10","12.12"],
				["","","","Golf Total","","12.12"],
				["","","","Tee","10","11.27"],
				["","","","Tee Total","","11.27"],
				["","","Sum of Cost","Fancy","10","13.33"],
				["","","","Fancy Total","","13.33"],
				["","","","Golf","10","11.95"],
				["","","","Golf Total","","11.95"],
				["","","","Tee","10","10.56"],
				["","","","Tee Total","","10.56"],
				["","Girl Sum of Price","","","","37.13"],
				["","Girl Sum of Cost","","","","35.84"],
				["East Sum of Price","","","","","73.13"],
				["East Sum of Cost","","","","","70.6"],
				["West","Boy","Sum of Price","Fancy","11","12.06"],
				["","","","Fancy Total","","12.06"],
				["","","","Golf","11","12.63"],
				["","","","Golf Total","","12.63"],
				["","","","Tee","11","11.44"],
				["","","","Tee Total","","11.44"],
				["","","Sum of Cost","Fancy","11","11.51"],
				["","","","Fancy Total","","11.51"],
				["","","","Golf","11","11.73"],
				["","","","Golf Total","","11.73"],
				["","","","Tee","11","10.94"],
				["","","","Tee Total","","10.94"],
				["","Boy Sum of Price","","","","36.13"],
				["","Boy Sum of Cost","","","","34.18"],
				["","Girl","Sum of Price","Golf","15","11.48"],
				["","","","Golf Total","","11.48"],
				["","","","Tee","15","13.42"],
				["","","","Tee Total","","13.42"],
				["","","Sum of Cost","Golf","15","10.67"],
				["","","","Golf Total","","10.67"],
				["","","","Tee","15","13.29"],
				["","","","Tee Total","","13.29"],
				["","Girl Sum of Price","","","","24.9"],
				["","Girl Sum of Cost","","","","23.96"],
				["West Sum of Price","","","","","61.03"],
				["West Sum of Cost","","","","","58.14"],
				["Total Sum of Price","","","","","134.16"],
				["Total Sum of Cost","","","","","128.74"]
		],
		"insertBlankRow_1row":[
				["Row Labels","Sum of Price","Sum of Cost"],
				["East","73.13","70.6"],
				["West","61.03","58.14"],
				["Grand Total","134.16","128.74"]
		],
		"insertBlankRow_2row":[
				["Row Labels",""],
				["East",""],
				["Sum of Price","73.13"],
				["Sum of Cost","70.6"],
				["",""],
				["West",""],
				["Sum of Price","61.03"],
				["Sum of Cost","58.14"],
				["",""],
				["Total Sum of Price","134.16"],
				["Total Sum of Cost","128.74"]
		],
		"insertBlankRow_3row":[
				["Row Labels",""],
				["East",""],
				["Sum of Price",""],
				["Boy","36"],
				["Girl","37.13"],
				["Sum of Cost",""],
				["Boy","34.76"],
				["Girl","35.84"],
				["East Sum of Price","73.13"],
				["East Sum of Cost","70.6"],
				["",""],
				["West",""],
				["Sum of Price",""],
				["Boy","36.13"],
				["Girl","24.9"],
				["Sum of Cost",""],
				["Boy","34.18"],
				["Girl","23.96"],
				["West Sum of Price","61.03"],
				["West Sum of Cost","58.14"],
				["",""],
				["Total Sum of Price","134.16"],
				["Total Sum of Cost","128.74"]
		],
		"insertBlankRow_4row":[
				["Row Labels",""],
				["East",""],
				["Sum of Price",""],
				["Boy","36"],
				["Fancy","11.96"],
				["Golf","13"],
				["Tee","11.04"],
				["",""],
				["Girl","37.13"],
				["Fancy","13.74"],
				["Golf","12.12"],
				["Tee","11.27"],
				["",""],
				["Sum of Cost",""],
				["Boy","34.76"],
				["Fancy","11.74"],
				["Golf","12.6"],
				["Tee","10.42"],
				["",""],
				["Girl","35.84"],
				["Fancy","13.33"],
				["Golf","11.95"],
				["Tee","10.56"],
				["",""],
				["East Sum of Price","73.13"],
				["East Sum of Cost","70.6"],
				["",""],
				["West",""],
				["Sum of Price",""],
				["Boy","36.13"],
				["Fancy","12.06"],
				["Golf","12.63"],
				["Tee","11.44"],
				["",""],
				["Girl","24.9"],
				["Golf","11.48"],
				["Tee","13.42"],
				["",""],
				["Sum of Cost",""],
				["Boy","34.18"],
				["Fancy","11.51"],
				["Golf","11.73"],
				["Tee","10.94"],
				["",""],
				["Girl","23.96"],
				["Golf","10.67"],
				["Tee","13.29"],
				["",""],
				["West Sum of Price","61.03"],
				["West Sum of Cost","58.14"],
				["",""],
				["Total Sum of Price","134.16"],
				["Total Sum of Cost","128.74"]
		],
		"filter_downThenOver1":[
			["Region","(All)"],
			["",""],
			["",""]
		],
		"filter_downThenOver3":[
			["Region","(All)"],
			["Gender","(All)"],
			["Style","(All)"],
			["",""],
			["",""]
		],
		"filter_downThenOver3_2wrap":[
			["Region","(All)","","Style","(All)"],
			["Gender","(All)","","",""],
			["","","","",""],
			["","","","",""]
		],
		"filter_downThenOver7_2wrap":[
			["Region","(All)","","Style","(All)","","Units","(All)","","Cost","(All)"],
			["Gender","(All)","","Ship date","(All)","","Price","(All)","","",""],
			["","","","","","","","","","",""],
			["","","","","","","","","","",""]
		],
		"filter_overThenDown7_2wrap":[
			["Region","(All)","","Gender","(All)"],
			["Style","(All)","","Ship date","(All)"],
			["Units","(All)","","Price","(All)"],
			["Cost","(All)","","",""],
			["","","","",""],
			["","","","",""]
		],
		"data_values1":[
			["Row Labels","Count of Price1","Count of Price2","Min of Price3","Max of Price4","Sum of Price5","Average of Price6","Product of Price7","StdDev of Price8","StdDevp of Price9","Var of Price10","Varp of Price11"],
			["East","6","6","11.04","13.74","73.13","12.18833333","3221490.641","1.028132611","0.938552372","1.057056667","0.880880556"],
			["Boy","3","3","11.04","13","36","12","1716.4992","0.980612054","0.800666389","0.9616","0.641066667"],
			["Girl","3","3","11.27","13.74","37.13","12.37666667","1876.779576","1.254843948","1.024575793","1.574633333","1.049755556"],
			["West","5","5","11.44","13.42","61.03","12.206","268454.7463","0.834973053","0.746822603","0.69718","0.557744"],
			["Boy","3","3","11.44","12.63","36.13","12.04333333","1742.515632","0.595175044","0.485958389","0.354233333","0.236155556"],
			["Girl","2","2","11.48","13.42","24.9","12.45","154.0616","1.371787156","0.97","1.8818","0.9409"],
			["Grand Total","11","11","11.04","13.74","134.16","12.19636364","8.64824E+11","0.898601944","0.856783337","0.807485455","0.734077686"]
		],
		"data_values2": [
			["Row Labels","Count of Price1","Count of Price2","Min of Price3","Max of Price4","Sum of Price5","Average of Price6","Product of Price7","StdDev of Price8","StdDevp of Price9","Var of Price10","Varp of Price11"],
			["East","3","3","11.05","12.12","35.13","11.71","1601.75496","0.577148161","0.4712395","0.3331","0.222066667"],
			["Boy","2","2","11.05","11.96","23.01","11.505","132.158","0.643467171","0.455","0.41405","0.207025"],
			["Girl","1","1","12.12","12.12","12.12","12.12","12.12","#DIV/0!","0","#DIV/0!","0"],
			["West","5","5","11.44","13.42","61.03","12.206","268454.7463","0.834973053","0.746822603","0.69718","0.557744"],
			["Boy","3","3","11.44","12.63","36.13","12.04333333","1742.515632","0.595175044","0.485958389","0.354233333","0.236155556"],
			["Girl","2","2","11.48","13.42","24.9","12.45","154.0616","1.371787156","0.97","1.8818","0.9409"],
			["Grand Total","8","8","11.05","13.42","96.16","12.02","429998721.4","0.747968678","0.699660632","0.559457143","0.489525"]
		],
		"data_values3": [
			["Row Labels","Count of Price1","Count of Price2","Min of Price3","Max of Price4","Sum of Price5","Average of Price6","Product of Price7","StdDev of Price8","StdDevp of Price9","Var of Price10","Varp of Price11"],
			["East","6","3","11.05","12.12","35.13","11.71","1601.75496","0.577148161","0.4712395","0.3331","0.222066667"],
			["Boy","3","2","11.05","11.96","23.01","11.505","132.158","0.643467171","0.455","0.41405","0.207025"],
			["Girl","3","1","12.12","12.12","12.12","12.12","12.12","#DIV/0!","0","#DIV/0!","0"],
			["West","5","5","11.44","13.42","61.03","12.206","268454.7463","0.834973053","0.746822603","0.69718","0.557744"],
			["Boy","3","3","11.44","12.63","36.13","12.04333333","1742.515632","0.595175044","0.485958389","0.354233333","0.236155556"],
			["Girl","2","2","11.48","13.42","24.9","12.45","154.0616","1.371787156","0.97","1.8818","0.9409"],
			["Grand Total","11","8","11.05","13.42","96.16","12.02","429998721.4","0.747968678","0.699660632","0.559457143","0.489525"]
		],
		"data_values4": [
			["Row Labels","Count of Price1","Count of Price2","Min of Price3","Max of Price4","Sum of Price5","Average of Price6","Product of Price7","StdDev of Price8","StdDevp of Price9","Var of Price10","Varp of Price11"],
			["East","6","3","11.05","12.12","35.13","11.71","1601.75496","0.577148161","0.4712395","0.3331","0.222066667"],
			["Boy","3","2","11.05","11.96","23.01","11.505","132.158","0.643467171","0.455","0.41405","0.207025"],
			["Girl","3","1","12.12","12.12","12.12","12.12","12.12","#DIV/0!","0","#DIV/0!","0"],
			["West","5","5","11.44","13.42","61.03","12.206","268454.7463","0.834973053","0.746822603","0.69718","0.557744"],
			["Boy","3","3","11.44","12.63","36.13","12.04333333","1742.515632","0.595175044","0.485958389","0.354233333","0.236155556"],
			["Girl","2","2","11.48","13.42","24.9","12.45","154.0616","1.371787156","0.97","1.8818","0.9409"],
			["Grand Total","11","8","11.05","13.42","96.16","12.02","429998721.4","0.747968678","0.699660632","0.559457143","0.489525"]
		],
		"data_values5": [
			["Row Labels","Count of Price1","Count of Price2","Min of Price3","Max of Price4","Sum of Price5","Average of Price6","Product of Price7","StdDev of Price8","StdDevp of Price9","Var of Price10","Varp of Price11"],
			["East","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A"],
			["Boy","3","2","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A"],
			["Girl","3","1","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A"],
			["West","5","5","11.44","13.42","61.03","12.206","268454.7463","0.834973053","0.746822603","0.69718","0.557744"],
			["Boy","3","3","11.44","12.63","36.13","12.04333333","1742.515632","0.595175044","0.485958389","0.354233333","0.236155556"],
			["Girl","2","2","11.48","13.42","24.9","12.45","154.0616","1.371787156","0.97","1.8818","0.9409"],
			["Grand Total","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A","#N/A"]
		],
		"data_values6": [
			["Row Labels","Count of Price1","Count of Price2","Min of Price3","Max of Price4","Sum of Price5","Average of Price6","Product of Price7","StdDev of Price8","StdDevp of Price9","Var of Price10","Varp of Price11"],
			["East","6","6","11.04","13.74","73.13","12.18833333","3221490.641","1.028132611","0.938552372","1.057056667","0.880880556"],
			["Boy","3","3","11.04","13","36","12","1716.4992","0.980612054","0.800666389","0.9616","0.641066667"],
			["Girl","3","3","11.27","13.74","37.13","12.37666667","1876.779576","1.254843948","1.024575793","1.574633333","1.049755556"],
			["West","5","5","11.44","13.42","61.03","12.206","268454.7463","0.834973053","0.746822603","0.69718","0.557744"],
			["Boy","3","3","11.44","12.63","36.13","12.04333333","1742.515632","0.595175044","0.485958389","0.354233333","0.236155556"],
			["Girl","2","2","11.48","13.42","24.9","12.45","154.0616","1.371787156","0.97","1.8818","0.9409"],
			["Grand Total","11","11","11.04","13.74","134.16","12.19636364","8.64824E+11","0.898601944","0.856783337","0.807485455","0.734077686"]
		],
		"data_values7": [
			["Row Labels","Count of Price1","Count of Price2","Min of Price3","Max of Price4","Sum of Price5","Average of Price6","Product of Price7","StdDev of Price8","StdDevp of Price9","Var of Price10","Varp of Price11"],
			["East","1","0","0","0","0","#DIV/0!","0","#DIV/0!","#DIV/0!","#DIV/0!","#DIV/0!"],
			["Boy","","","","","","","","","","",""],
			["Girl","1","0","0","0","0","#DIV/0!","0","#DIV/0!","#DIV/0!","#DIV/0!","#DIV/0!"],
			["West","4","3","1","3","6","2","6","1","0.816496581","1","0.666666667"],
			["Boy","2","1","1","1","1","1","1","#DIV/0!","0","#DIV/0!","0"],
			["Girl","2","2","2","3","5","2.5","6","0.707106781","0.5","0.5","0.25"],
			["Grand Total","5","3","1","3","6","2","6","1","0.816496581","1","0.666666667"]
		],
		"fieldSubtotalNone": [
			["Sum of Price","Column Labels","","",""],
			["Row Labels","Fancy","Golf","Tee","Grand Total"],
			["East","","","",""],
			["Boy","11.96","13","11.04","36"],
			["Girl","13.74","12.12","11.27","37.13"],
			["West","","","",""],
			["Boy","12.06","12.63","11.44","36.13"],
			["Girl","","11.48","13.42","24.9"],
			["Grand Total","37.76","49.23","47.17","134.16"]
		],
		"fieldSubtotalAuto": [
			["Sum of Price","Column Labels","","",""],
			["Row Labels","Fancy","Golf","Tee","Grand Total"],
			["East","25.7","25.12","22.31","73.13"],
			["Boy","11.96","13","11.04","36"],
			["Girl","13.74","12.12","11.27","37.13"],
			["West","12.06","24.11","24.86","61.03"],
			["Boy","12.06","12.63","11.44","36.13"],
			["Girl","","11.48","13.42","24.9"],
			["Grand Total","37.76","49.23","47.17","134.16"]
		],
		"fieldSubtotalCustom": [
			["Sum of Price","Column Labels","","",""],
			["Row Labels","Fancy","Golf","Tee","Grand Total"],
			["East","2","2","2","6"],
			["Boy","11.96","13","11.04","36"],
			["Girl","13.74","12.12","11.27","37.13"],
			["West","1","2","2","5"],
			["Boy","12.06","12.63","11.44","36.13"],
			["Girl","","11.48","13.42","24.9"],
			["Grand Total","37.76","49.23","47.17","134.16"]
		],
		"fieldSubtotalAll": [
			["Sum of Price","Column Labels","","",""],
			["Row Labels","Fancy","Golf","Tee","Grand Total"],
			["East","","","",""],
			["Boy","11.96","13","11.04","36"],
			["Girl","13.74","12.12","11.27","37.13"],
			["East Sum","25.7","25.12","22.31","73.13"],
			["East Count","2","2","2","6"],
			["East Average","12.85","12.56","11.155","12.18833333"],
			["East Max","13.74","13","11.27","13.74"],
			["East Min","11.96","12.12","11.04","11.04"],
			["East Product","164.3304","157.56","124.4208","3221490.641"],
			["East Count","2","2","2","6"],
			["East StdDev","1.258650071","0.622253967","0.16263456","1.028132611"],
			["East StdDevp","0.89","0.44","0.115","0.938552372"],
			["East Var","1.5842","0.3872","0.02645","1.057056667"],
			["East Varp","0.7921","0.1936","0.013225","0.880880556"],
			["West","","","",""],
			["Boy","12.06","12.63","11.44","36.13"],
			["Girl","","11.48","13.42","24.9"],
			["West Sum","12.06","24.11","24.86","61.03"],
			["West Count","1","2","2","5"],
			["West Average","12.06","12.055","12.43","12.206"],
			["West Max","12.06","12.63","13.42","13.42"],
			["West Min","12.06","11.48","11.44","11.44"],
			["West Product","12.06","144.9924","153.5248","268454.7463"],
			["West Count","1","2","2","5"],
			["West StdDev","#DIV/0!","0.813172798","1.400071427","0.834973053"],
			["West StdDevp","0","0.575","0.99","0.746822603"],
			["West Var","#DIV/0!","0.66125","1.9602","0.69718"],
			["West Varp","0","0.330625","0.9801","0.557744"],
			["Grand Total","37.76","49.23","47.17","134.16"]
		],
		"field0":[
			["Row Labels","Units",""],
			["East","",""],
			["","10",""],
			["","Girl",""],
			["","Sum of Price",""],
			["","Fancy","13.74"],
			["","Golf","12.12"],
			["","Tee","11.27"],
			["","Sum of Cost",""],
			["","Fancy","13.33"],
			["","Golf","11.95"],
			["","Tee","10.56"],
			["","Girl Sum of Price","37.13"],
			["","Girl Sum of Cost","35.84"],
			["","10 Sum of Price","37.13"],
			["","10 Sum of Cost","35.84"],
			["","12",""],
			["","Boy",""],
			["","Sum of Price",""],
			["","Fancy","11.96"],
			["","Golf","13"],
			["","Tee","11.04"],
			["","Sum of Cost",""],
			["","Fancy","11.74"],
			["","Golf","12.6"],
			["","Tee","10.42"],
			["","Boy Sum of Price","36"],
			["","Boy Sum of Cost","34.76"],
			["","12 Sum of Price","36"],
			["","12 Sum of Cost","34.76"],
			["East Sum of Price","","73.13"],
			["East Sum of Cost","","70.6"],
			["","",""],
			["West","",""],
			["","11",""],
			["","Boy",""],
			["","Sum of Price",""],
			["","Fancy","12.06"],
			["","Golf","12.63"],
			["","Tee","11.44"],
			["","Sum of Cost",""],
			["","Fancy","11.51"],
			["","Golf","11.73"],
			["","Tee","10.94"],
			["","Boy Sum of Price","36.13"],
			["","Boy Sum of Cost","34.18"],
			["","11 Sum of Price","36.13"],
			["","11 Sum of Cost","34.18"],
			["","15",""],
			["","Girl",""],
			["","Sum of Price",""],
			["","Golf","11.48"],
			["","Tee","13.42"],
			["","Sum of Cost",""],
			["","Golf","10.67"],
			["","Tee","13.29"],
			["","Girl Sum of Price","24.9"],
			["","Girl Sum of Cost","23.96"],
			["","15 Sum of Price","24.9"],
			["","15 Sum of Cost","23.96"],
			["West Sum of Price","","61.03"],
			["West Sum of Cost","","58.14"],
			["","",""],
			["Total Sum of Price","","134.16"],
			["Total Sum of Cost","","128.74"]
		],
		"field4":[
			["Row Labels","UnitsCustom","Gender",""],
			["East","","",""],
			["","10","Girl",""],
			["","","Sum of Price",""],
			["","","Fancy","13.74"],
			["","","Golf","12.12"],
			["","","Tee","11.27"],
			["","","Sum of Cost",""],
			["","","Fancy","13.33"],
			["","","Golf","11.95"],
			["","","Tee","10.56"],
			["","","Girl Sum of Price","37.13"],
			["","","Girl Sum of Cost","35.84"],
			["","10 Sum of Price","","37.13"],
			["","10 Sum of Cost","","35.84"],
			["","11","Boy",""],
			["","","Sum of Price",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Sum of Cost",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Boy Sum of Price",""],
			["","","Boy Sum of Cost",""],
			["","","Girl",""],
			["","","Sum of Price",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Sum of Cost",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Girl Sum of Price",""],
			["","","Girl Sum of Cost",""],
			["","11 Sum of Price","",""],
			["","11 Sum of Cost","",""],
			["","12","Boy",""],
			["","","Sum of Price",""],
			["","","Fancy","11.96"],
			["","","Golf","13"],
			["","","Tee","11.04"],
			["","","Sum of Cost",""],
			["","","Fancy","11.74"],
			["","","Golf","12.6"],
			["","","Tee","10.42"],
			["","","Boy Sum of Price","36"],
			["","","Boy Sum of Cost","34.76"],
			["","12 Sum of Price","","36"],
			["","12 Sum of Cost","","34.76"],
			["","15","Boy",""],
			["","","Sum of Price",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Sum of Cost",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Boy Sum of Price",""],
			["","","Boy Sum of Cost",""],
			["","","Girl",""],
			["","","Sum of Price",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Sum of Cost",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Girl Sum of Price",""],
			["","","Girl Sum of Cost",""],
			["","15 Sum of Price","",""],
			["","15 Sum of Cost","",""],
			["East Sum of Price","","","73.13"],
			["East Sum of Cost","","","70.6"],
			["","","",""],
			["West","","",""],
			["","10","Boy",""],
			["","","Sum of Price",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Sum of Cost",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Boy Sum of Price",""],
			["","","Boy Sum of Cost",""],
			["","","Girl",""],
			["","","Sum of Price",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Sum of Cost",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Girl Sum of Price",""],
			["","","Girl Sum of Cost",""],
			["","10 Sum of Price","",""],
			["","10 Sum of Cost","",""],
			["","11","Boy",""],
			["","","Sum of Price",""],
			["","","Fancy","12.06"],
			["","","Golf","12.63"],
			["","","Tee","11.44"],
			["","","Sum of Cost",""],
			["","","Fancy","11.51"],
			["","","Golf","11.73"],
			["","","Tee","10.94"],
			["","","Boy Sum of Price","36.13"],
			["","","Boy Sum of Cost","34.18"],
			["","11 Sum of Price","","36.13"],
			["","11 Sum of Cost","","34.18"],
			["","12","Boy",""],
			["","","Sum of Price",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Sum of Cost",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Boy Sum of Price",""],
			["","","Boy Sum of Cost",""],
			["","","Girl",""],
			["","","Sum of Price",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Sum of Cost",""],
			["","","Fancy",""],
			["","","Golf",""],
			["","","Tee",""],
			["","","Girl Sum of Price",""],
			["","","Girl Sum of Cost",""],
			["","12 Sum of Price","",""],
			["","12 Sum of Cost","",""],
			["","15","Girl",""],
			["","","Sum of Price",""],
			["","","Golf","11.48"],
			["","","Tee","13.42"],
			["","","Sum of Cost",""],
			["","","Golf","10.67"],
			["","","Tee","13.29"],
			["","","Girl Sum of Price","24.9"],
			["","","Girl Sum of Cost","23.96"],
			["","15 Sum of Price","","24.9"],
			["","15 Sum of Cost","","23.96"],
			["West Sum of Price","","","61.03"],
			["West Sum of Cost","","","58.14"],
			["","","",""],
			["Total Sum of Price","","","134.16"],
			["Total Sum of Cost","","","128.74"]
		]
	};

	function setPivotLayout(pivot, layout) {
		var props = new Asc.CT_pivotTableDefinition();
		switch (layout) {
			case "compact":
				props.asc_setCompact(true);
				props.asc_setOutline(true);
				break;
			case "outline":
				props.asc_setCompact(false);
				props.asc_setOutline(true);
				break;
			case "tabular":
				props.asc_setCompact(false);
				props.asc_setOutline(false);
				break;
		}
		pivot.asc_set(api, props);
	}

	function testValidations() {
		test("Test: Validations ", function() {
			strictEqual(Asc.CT_pivotTableDefinition.prototype.isValidDataRef(dataRef), true, "Validations");
		});
	}

	function testCreate(prefix, init) {
		test("Test: Layout " + prefix, function() {
			var pivot = init();
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);

			AscCommon.History.Clear();
			checkReportValues(pivot, getReportValues(pivot), standards[prefix + "_0data"], "0data");

			pivot = checkHistoryOperation(pivot, standards[prefix + "_1data"], "1data", function(){
				pivot.asc_addDataField(api, 5);
			});

			pivot = checkHistoryOperation(pivot, standards[prefix + "_2data_col"], "2data_col", function(){
				pivot.asc_addDataField(api, 6);
			});

			pivot = checkHistoryOperation(pivot, standards[prefix + "_2data_row"], "2data_row", function(){
				pivot.asc_moveToRowField(api, Asc.st_VALUES);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
		});
	}

	function testLayout(layout) {
		testCreate(layout + "_0row_0col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			return pivot;
		});

		testCreate(layout + "_0row_1col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			pivot.asc_addColField(api, 2);
			return pivot;
		});

		testCreate(layout + "_0row_2col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			pivot.asc_addColField(api, 2);
			pivot.asc_addColField(api, 4);
			return pivot;
		});

		testCreate(layout + "_1row_0col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			pivot.asc_addRowField(api, 0);
			return pivot;
		});

		testCreate(layout + "_1row_1col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addColField(api, 2);
			return pivot;
		});

		testCreate(layout + "_1row_2col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addColField(api, 2);
			pivot.asc_addColField(api, 4);
			return pivot;
		});

		testCreate(layout + "_2row_0col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addRowField(api, 1);
			return pivot;
		});

		testCreate(layout + "_2row_1col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addRowField(api, 1);
			pivot.asc_addColField(api, 2);
			return pivot;
		});

		testCreate(layout + "_2row_2col", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			setPivotLayout(pivot, layout);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addRowField(api, 1);
			pivot.asc_addColField(api, 2);
			pivot.asc_addColField(api, 4);
			return pivot;
		});
	}

	function testLayoutValues(layout) {
		test("Test: Layout Values " + layout, function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);
			setPivotLayout(pivot, layout);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addRowField(api, 1);
			pivot.asc_addColField(api, 2);
			pivot.asc_addColField(api, 4);
			pivot.asc_addDataField(api, 5);
			pivot.asc_addDataField(api, 6);

			AscCommon.History.Clear();
			checkReportValues(pivot, getReportValues(pivot), standards[layout + "_2row_2col_2data_col"], "col3");

			pivot = checkHistoryOperation(pivot, standards[layout + "_2row_2col_2data_col2"], "col2", function(){
				pivot.asc_moveColField(api, 2, 1);
			});

			pivot = checkHistoryOperation(pivot, standards[layout + "_2row_2col_2data_col1"], "col1", function(){
				pivot.asc_moveColField(api, 1, 0);
			});

			pivot = checkHistoryOperation(pivot, standards[layout + "_2row_2col_2data_row"], "row3", function(){
				pivot.asc_moveToRowField(api, Asc.st_VALUES);
			});

			pivot = checkHistoryOperation(pivot, standards[layout + "_2row_2col_2data_row2"], "row2", function(){
				pivot.asc_moveRowField(api, 2, 1);
			});

			pivot = checkHistoryOperation(pivot, standards[layout + "_2row_2col_2data_row1"], "row1", function(){
				pivot.asc_moveRowField(api, 1, 0);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
		});
	}

	function testLayoutSubtotal(layout) {
		test("Test: Subtotal " + layout, function() {
			var props;
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);
			setPivotLayout(pivot, layout);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addRowField(api, 1);
			pivot.asc_addDataField(api, 5);
			pivot.asc_addDataField(api, 6);
			pivot.asc_moveToRowField(api, Asc.st_VALUES);
			pivot.asc_addRowField(api, 2);
			pivot.asc_addRowField(api, 4);

			AscCommon.History.Clear();
			pivot = checkHistoryOperation(pivot, standards["subtotal_" + layout + "_none"], "none", function(){
				props = new Asc.CT_pivotTableDefinition();
				props.asc_setDefaultSubtotal(false);
				pivot.asc_set(api, props);
			});

			pivot = checkHistoryOperation(pivot, standards["subtotal_" + layout + "_bottom"], "bottom", function(){
				props = new Asc.CT_pivotTableDefinition();
				props.asc_setDefaultSubtotal(true);
				props.asc_setSubtotalTop(false);
				pivot.asc_set(api, props);
			});

			pivot = checkHistoryOperation(pivot, standards["subtotal_" + layout + "_top"], "top", function(){
				props = new Asc.CT_pivotTableDefinition();
				props.asc_setDefaultSubtotal(true);
				props.asc_setSubtotalTop(true);
				pivot.asc_set(api, props);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
		});
	}

	function testPivotInsertBlankRow() {
		test("Test: InsertBlankRow", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);
			pivot.asc_addDataField(api, 5);
			pivot.asc_addDataField(api, 6);

			AscCommon.History.Clear();
			pivot = checkHistoryOperation(pivot, standards["insertBlankRow_1row"], "1row", function(){
				pivot.asc_addRowField(api, 0);
			});

			pivot = checkHistoryOperation(pivot, standards["insertBlankRow_2row"], "2row", function(){
				pivot.asc_moveToRowField(api, Asc.st_VALUES);
			});

			pivot = checkHistoryOperation(pivot, standards["insertBlankRow_3row"], "3row", function(){
				pivot.asc_addRowField(api, 1);
			});

			pivot = checkHistoryOperation(pivot, standards["insertBlankRow_4row"], "4row", function(){
				pivot.asc_addRowField(api, 2);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
		});
	}

	function testPivotPageFilterLayout() {
		test("Test: PageFilter layout", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);

			AscCommon.History.Clear();
			pivot = checkHistoryOperation(pivot, standards["filter_downThenOver1"], "downThenOver1", function(){
				pivot.asc_addPageField(api, 0);
			});

			pivot = checkHistoryOperation(pivot, standards["filter_downThenOver3"], "downThenOver3", function(){
				pivot.asc_addPageField(api, 1);
				pivot.asc_addPageField(api, 2);
			});

			pivot = checkHistoryOperation(pivot, standards["filter_downThenOver3_2wrap"], "downThenOver3_2wrap", function(){
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setPageWrap(2);
				pivot.asc_set(api, props);
			});

			pivot = checkHistoryOperation(pivot, standards["filter_downThenOver7_2wrap"], "downThenOver7_2wrap", function(){
				pivot.asc_addPageField(api, 3);
				pivot.asc_addPageField(api, 4);
				pivot.asc_addPageField(api, 5);
				pivot.asc_addPageField(api, 6);
			});

			pivot = checkHistoryOperation(pivot, standards["filter_overThenDown7_2wrap"], "overThenDown7_2wrap", function(){
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setPageOverThenDown(true);
				pivot.asc_set(api, props);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
		});
	}

	function testFieldProperty() {
		test("Test: Field Property", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addRowField(api, 4);
			pivot.asc_addRowField(api, 1);
			pivot.asc_addDataField(api, 5);
			pivot.asc_addDataField(api, 6);
			pivot.asc_moveToRowField(api, Asc.st_VALUES);
			pivot.asc_addRowField(api, 2);

			AscCommon.History.Clear();
			pivot = checkHistoryOperation(pivot, standards["field0"], "field0", function() {
				var pivotField = pivot.asc_getPivotFields()[0];
				var props = new CT_PivotField();
				props.asc_setCompact(false);
				props.asc_setOutline(true);
				props.asc_setSubtotalTop(false);
				props.asc_setInsertBlankRow(true);
				pivotField.asc_set(api, pivot, 0, props);
			});

			pivot = checkHistoryOperation(pivot, standards["field4"], "field4", function() {
				var pivotField = pivot.asc_getPivotFields()[4];
				var props = new CT_PivotField();
				props.asc_setName("UnitsCustom");
				props.asc_setOutline(false);
				props.asc_setCompact(false);
				props.asc_setShowAll(true);
				pivotField.asc_set(api, pivot, 0, props);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
		});
	}

	function testFieldSubtotal() {
		test("Test: Field Subtotal", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);
			pivot.asc_addRowField(api, 0);
			pivot.asc_addRowField(api, 1);
			pivot.asc_addColField(api, 2);
			pivot.asc_addDataField(api, 5);

			AscCommon.History.Clear();

			pivot = checkHistoryOperation(pivot, standards["fieldSubtotalNone"], "fieldSubtotalNone", function() {
				var pivotField = pivot.asc_getPivotFields()[0];
				var props = new CT_PivotField();
				props.asc_setDefaultSubtotal(false);
				pivotField.asc_set(api, pivot, 0, props);
			});

			pivot = checkHistoryOperation(pivot, standards["fieldSubtotalAuto"], "fieldSubtotalAuto", function() {
				var pivotField = pivot.asc_getPivotFields()[0];
				var props = new CT_PivotField();
				props.asc_setDefaultSubtotal(true);
				pivotField.asc_set(api, pivot, 0, props);
			});

			pivot = checkHistoryOperation(pivot, standards["fieldSubtotalCustom"], "fieldSubtotalCustom", function() {
				var pivotField = pivot.asc_getPivotFields()[0];
				var props = new CT_PivotField();
				props.asc_setDefaultSubtotal(true);
				props.asc_setSubtotals([Asc.c_oAscItemType.Count]);
				pivotField.asc_set(api, pivot, 0, props);
			});

			pivot = checkHistoryOperation(pivot, standards["fieldSubtotalAll"], "fieldSubtotalAll", function() {
				var pivotField = pivot.asc_getPivotFields()[0];
				var props = new CT_PivotField();
				props.asc_setDefaultSubtotal(true);
				props.asc_setSubtotals([Asc.c_oAscItemType.Sum, Asc.c_oAscItemType.Count, Asc.c_oAscItemType.Avg,
					Asc.c_oAscItemType.Max, Asc.c_oAscItemType.Min, Asc.c_oAscItemType.Product,
					Asc.c_oAscItemType.CountA, Asc.c_oAscItemType.StdDev, Asc.c_oAscItemType.StdDevP,
					Asc.c_oAscItemType.Var, Asc.c_oAscItemType.VarP]);
				pivotField.asc_set(api, pivot, 0, props);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
		});
	}

	function testDataValues() {
		test("Test: data values", function() {
			var pivot = api._asc_insertPivot(wb, dataRef, ws, reportRange);
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);

			AscCommon.History.Clear();
			pivot = checkHistoryOperation(pivot, standards["data_values1"], "values1", function() {
				pivot.asc_addRowField(api, 0);
				pivot.asc_addRowField(api, 1);
				var i;
				var types = [c_oAscDataConsolidateFunction.Count, c_oAscDataConsolidateFunction.CountNums, c_oAscDataConsolidateFunction.Min,
					c_oAscDataConsolidateFunction.Max, c_oAscDataConsolidateFunction.Sum, c_oAscDataConsolidateFunction.Average,
					c_oAscDataConsolidateFunction.Product, c_oAscDataConsolidateFunction.StdDev, c_oAscDataConsolidateFunction.StdDevp,
					c_oAscDataConsolidateFunction.Var, c_oAscDataConsolidateFunction.Varp];
				for (i = 0; i < types.length; ++i) {
					pivot.asc_addDataField(api, 5);
				}
				var dataFields = pivot.asc_getDataFields();
				for (i = 0; i < types.length; ++i) {
					var dataField = dataFields[i];
					var props = new Asc.CT_DataField();
					props.asc_setName(AscCommonExcel.ToName_ST_DataConsolidateFunction(types[i]) + " of " + pivot.getPivotFieldName(5) + (i + 1));
					props.asc_setSubtotal(types[i]);
					dataField.asc_set(api, pivot, i, props);
				}
			});

			pivot = checkHistoryOperation(pivot, standards["data_values2"], "values2", function() {
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setDataRef(dataRef2);
				pivot.asc_set(api, props);
			});

			pivot = checkHistoryOperation(pivot, standards["data_values3"], "values3", function() {
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setDataRef(dataRef3);
				pivot.asc_set(api, props);
			});

			pivot = checkHistoryOperation(pivot, standards["data_values4"], "values4", function() {
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setDataRef(dataRef4);
				pivot.asc_set(api, props);
			});

			pivot = checkHistoryOperation(pivot, standards["data_values5"], "values5", function() {
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setDataRef(dataRef5);
				pivot.asc_set(api, props);
			});

			pivot = checkHistoryOperation(pivot, standards["data_values6"], "values6", function() {
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setDataRef(dataRef6);
				pivot.asc_set(api, props);
			});

			pivot = checkHistoryOperation(pivot, standards["data_values7"], "values7", function() {
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setDataRef(dataRef7);
				pivot.asc_set(api, props);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());
		});
	}

	function testPivotMisc() {
		test("Test: misc", function() {
			var pivot = api._asc_insertPivot(wb, dataRef2, ws, reportRange);
			pivot.asc_getStyleInfo().asc_setName(api, pivot, pivotStyle);

			AscCommon.History.Clear();
			pivot = checkHistoryOperation(pivot, standards["compact_0row_0col_0data"], "misc", function(){
				var props = new Asc.CT_pivotTableDefinition();
				props.asc_setName("new<&>pivot name");
				props.asc_setTitle("Title");
				props.asc_setDescription("Description");
				pivot.asc_set(api, props);
			});

			ws.deletePivotTables(new AscCommonExcel.MultiplyRange(pivot.getReportRanges()).getUnionRange());

			// prot["asc_setShowHeaders"] = prot.asc_setShowHeaders;
			// prot["asc_setFillDownLabelsDefault"] = prot.asc_setFillDownLabelsDefault;
			// prot["asc_setDataRef"] = prot.asc_setDataRef;
			// prot["asc_addPageField"] = prot.asc_addPageField;
			// prot["asc_addRowField"] = prot.asc_addRowField;
			// prot["asc_addColField"] = prot.asc_addColField;
			// prot["asc_addDataField"] = prot.asc_addDataField;
			// prot["asc_addField"] = prot.asc_addField;
			// prot["asc_removeField"] = prot.asc_removeField;
			// prot["asc_removeNoDataField"] = prot.asc_removeNoDataField;
			// prot["asc_removeDataField"] = prot.asc_removeDataField;
			// prot["asc_moveToPageField"] = prot.asc_moveToPageField;
			// prot["asc_moveToRowField"] = prot.asc_moveToRowField;
			// prot["asc_moveToColField"] = prot.asc_moveToColField;
			// prot["asc_moveToDataField"] = prot.asc_moveToDataField;
			// prot["asc_movePageField"] = prot.asc_movePageField;
			// prot["asc_moveRowField"] = prot.asc_moveRowField;
			// prot["asc_moveColField"] = prot.asc_moveColField;
			// prot["asc_moveDataField"] = prot.asc_moveDataField;
			// prot["asc_refresh"] = prot.asc_refresh;
		});
	}

	module("Pivot");

	function startTests() {
		QUnit.start();

		testValidations();

		testLayout("compact");

		testLayout("outline");

		testLayout("tabular");

		testLayoutValues("compact");

		testLayoutValues("outline");

		testLayoutValues("tabular");

		testLayoutSubtotal("compact");

		testLayoutSubtotal("tabular");

		testPivotInsertBlankRow();

		testPivotPageFilterLayout();

		testFieldProperty();

		testFieldSubtotal();

		testDataValues();

		testPivotMisc();
	}
});
