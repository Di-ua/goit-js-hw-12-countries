import refs from "./refs";
import countryCardMarkup from "../templates/country.hbs";
import countryName from "../templates/name-country.hbs";
import notify from "./components/notifications";
import debounce from "lodash.debounce";
import API from "./api-service";



refs.searchForm.addEventListener("input", debounce(findCountry, 500));
// функция отрисовки карточки страны

function renderCountryCard(country) {
    const marcup = countryCardMarkup(country);
    refs.countryCard.innerHTML = marcup;
}

// функция отрисовки списка стран
function listCountries(country) {
    const marcup = countryName(country);
    refs.countryCard.innerHTML = marcup;
  }

//  функция поиска страны 

function findCountry(event) {
    event.preventDefault();

    const input = refs.searchForm;
    const searchQuery = input.elements.query.value;
    
    API.fetchCountryByName(searchQuery)
    .then((renderCountryCard) => {
      renderCountryCard;
      countryNumber(renderCountryCard);
      console.log(renderCountryCard.length);
    })
    .catch((error) => {
      console.log(error);
    });
}

// функция, которая считает кол-во стран  //
function countryNumber(countryNumber) {
  if (countryNumber.length > 10) {
    notify();
  } else if (countryNumber.length > 1 && countryNumber.length <= 10) {
    //удалить нотификашку
    listCountries(countryNumber);
  } else if (countryNumber.length === 1) {
    //удалить нотификашку
    renderCountryCard(countryNumber);
  }
}
