import  "../templates/countries.hbs"

import '@pnotify/core/dist/BrightTheme.css';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaultModules.set(PNotifyMobile, {});
alert({
  text: ' Enter a country name!'
});


document.querySelector('.countries').innerHTML =localStorage.getItem('country') || "";
const fetchCountries = function (event) {
    event.target.value === '' ? document.querySelector('.countries-list').textContent = "" : ""
    if (event.target.value.length > 0) {
        fetch(`https://restcountries.eu/rest/v2/name/{name}${event.target.value}`)
        .then(response => (response.ok) ? response.json() : Promise.reject(`Error status` + response.status))
 .then(data => {
     if (data.length > 10) {
         console.error({ delay: 3500, text: "Too many entries found. Please, try again!"});
     };
     return data;
 })   
 .then(data => {
     document.querySelector('.countries-list').textContent = ""
     if (data.length >= 2 && data.length < 10) {
         data.forEach(el => document.querySelector('.counries-list').insertAdjacentHTML('beforeend', `<li class="list-item">${el.name}</li>`))
      document.querySelector('.countries-list').addEventListener('click', (event) => {
  data.forEach(el => {
      if (el.name === event.target.textContent) {
          let markup = countriesTemplate(el);
          document.querySelector('.countries').innerHTML = markup;
          document.querySelector('.countries-list').textContent = "";
          localStorage.setItem('country', markup);
      }
  })  
      })   
     }
return data;

 })
 .then(data => {
     if (data.length === 1){
         let markup = countriesTemplate(data[0])
         document.querySelector('countries').innerHTML = markup;
         localStorage.setItem('country', markup);
     };
     return data;
 })
 .catch(error => document.querySelector('.countries').innerHTML = `<h2 class="error">${error}. </br>The country was not found. Try again.</h2> `)
    }
}
export default fetchCountries


