import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import updateCountryMarkup from './js/update-country-markup';
import refs from './js/refs';

refs.searchCountry.addEventListener(
  'input',
  debounce(function (event) {
    event.preventDefault();
    const nameCauntry = event.target.value;
    if (nameCauntry.trim().length === 0) {
      return;
    }
    refs.containerCountry.innerHTML = '';
    fetchCountries(nameCauntry).then(updateCountryMarkup);
  }, 500),
);
