const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
const monthGUS = Array.from({ length: 12 }, (_, i) => i + 247);

// Sprawdź, czy jest styczeń
if (month === 0) {
  month = 11; // Grudzień
  year -= 1; // Poprzedni rok
}
else 
    month -= 1; // poprzedni miesiąc

fetch(`https://api-dbw.stat.gov.pl/api/1.1.0/variable/variable-data-section?id-zmienna=305&id-przekroj=739&id-rok=${year}&id-okres=${monthGUS[month]}&lang=pl`, {
  headers: { 'accept': '' }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const element = data.data.find(item => item.rownumber === 2);
    console.log(element.wartosc); // Wyświetli wartość "wartosc" z elementu, którego "rownumber" wynosi 2
  })
  .catch(error => console.error('Błąd:', error));