

const BASE_URL = `https://restcountries.eu/rest/v2/name/`;

// функция, которая возвращает ответ с бекенда в виде json//
function fetchCountryByName(countryName) {
  return fetch(`${BASE_URL}${countryName}`).then((response) => {
    return response.json();
  });
}
export default { fetchCountryByName };



// export default function fetchCountries(searchQuery) {
//     if (searchQuery) {
//         return fetch(
//             `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;population;flag;languages;capital`
//         )
//         .then(response => {
//             if (response.ok) return response.json();
//             throw new Error('Error fetching data');
//         })
//         .catch(error => {
//             console.error('Error: ', error);
//         });
//     }
// }











// function fetchCountries(country) {
// const url = `https://restcountries.eu/rest/v2/name/${country}`;
// return fetch(url)
// .then(res => res.json())

// .then({ name })
// .catch(
//     error({
//         text: 'Something went wrong',
//         delay: 1000,
//     }),
//     ); 
// }

// export default fetchCountries;

