function inflationGUS(ignoreEmptyCheck = false) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastColumn = sheet.getLastColumn();
  const dateRow = sheet.getRange(1, 5, 1, lastColumn - 4).getValues()[0]; // Assuming dates start from cell E1

  const monthGUS = Array.from({ length: 12 }, (_, i) => i + 247);

  dateRow.forEach((dateCell, index) => {
    const resultCell = sheet.getRange(17, index + 5); // Cell in row 17, starting from E17

    try {
      if (dateCell && (ignoreEmptyCheck || resultCell.isBlank())) {
        const date = new Date(dateCell);
        let month = date.getMonth();
        let year = date.getFullYear();

        // Check if it's January
        if (month === 0) {
          month = 11; // December
          year -= 1; // Previous year
        } else {
          month -= 1; // Previous month
        }

        const url = `https://api-dbw.stat.gov.pl/api/1.1.0/variable/variable-data-section?id-zmienna=305&id-przekroj=739&id-rok=${year}&id-okres=${monthGUS[month]}&lang=pl`;

        const options = {
          'method': 'get',
          'headers': {
            'accept': ''
          },
        // Uncomment this line if you want to handle HTTP exceptions silently
        // 'muteHttpExceptions': true
        };

        const response = UrlFetchApp.fetch(url, options);
        const data = JSON.parse(response.getContentText());
        const element = data.data.find(item => item.rownumber === 2);

        Logger.log(element.wartosc - 100); // Displays the "wartosc" value from the element with "rownumber" equal to 2
        resultCell.setValue(element.wartosc - 100); // Inserts the inflation value into the appropriate cell in row 17
      }
    } catch (error) {
      const cellAddress = resultCell.getA1Notation();
      Logger.log(`Error while processing cell ${cellAddress}: ${error.message}`);
      SpreadsheetApp.getActiveSpreadsheet().toast(`Error while processing cell ${cellAddress}: ${error.message}`, "Error", 5);
    }
  });
}

function refreshInflation() {
  inflationGUS(true); // Call the inflationGUS function with the parameter to ignore checking for empty cells
  SpreadsheetApp.getActiveSpreadsheet().toast("Inflation data has been refreshed.");
}
