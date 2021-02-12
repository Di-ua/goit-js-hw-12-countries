import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import '../node_modules/lodash.debounce/index';
import debounce from '../node_modules/lodash.debounce/index';
// import "../node_modules/@pnotify/core/dist/PNotify.css"
// import '../node_modules/@pnotify/core/dist/BrightTheme.css'
// import  "../node_modules/@pnotify/core/dist/PNotify";



document.querySelector('input').addEventListener('input', debounce(fetchCountries, 800),)
