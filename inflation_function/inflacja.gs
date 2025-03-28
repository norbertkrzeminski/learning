function inflacjaGUS(ignoreEmptyCheck = false) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastColumn = sheet.getLastColumn();
  const dateRow = sheet.getRange(1, 5, 1, lastColumn - 4).getValues()[0]; // Zakładam, że daty zaczynają się od E1

  const monthGUS = Array.from({ length: 12 }, (_, i) => i + 247);

  dateRow.forEach((dateCell, index) => {
    const resultCell = sheet.getRange(17, index + 5); // Komórka w wierszu 17, zaczynając od E17

    try {
      if (dateCell && (ignoreEmptyCheck || resultCell.isBlank())) {
        const date = new Date(dateCell);
        let month = date.getMonth();
        let year = date.getFullYear();

        // Sprawdź, czy jest styczeń
        if (month === 0) {
          month = 11; // Grudzień
          year -= 1; // Poprzedni rok
        } else {
          month -= 1; // poprzedni miesiąc
        }

        const url = `https://api-dbw.stat.gov.pl/api/1.1.0/variable/variable-data-section?id-zmienna=305&id-przekroj=739&id-rok=${year}&id-okres=${monthGUS[month]}&lang=pl`;

        const options = {
          'method': 'get',
          'headers': {
            'accept': ''
          },
        //  'muteHttpExceptions': true
        };

        const response = UrlFetchApp.fetch(url, options);
        const data = JSON.parse(response.getContentText());
        const element = data.data.find(item => item.rownumber === 2);

        Logger.log(element.wartosc - 100); // Wyświetli wartość "wartosc" z elementu, którego "rownumber" wynosi 2
        resultCell.setValue(element.wartosc - 100); // Wkleja wartość inflacji do odpowiedniej komórki w wierszu 17
      }
    } catch (error) {
      const cellAddress = resultCell.getA1Notation();
      Logger.log(`Błąd przy pracy nad komórką ${cellAddress}: ${error.message}`);
      SpreadsheetApp.getActiveSpreadsheet().toast(`Błąd przy pracy nad komórką ${cellAddress}: ${error.message}`, "Błąd", 5);
    }
  });
}

function odswiezInflacje() {
  inflacjaGUS(true); // Wywołaj funkcję inflacjaGUS z parametrem ignorującym sprawdzenie pustej komórki
  SpreadsheetApp.getActiveSpreadsheet().toast("Dane inflacji zostały odświeżone.");
}

