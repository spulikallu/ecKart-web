import '../css/style.scss';
import store from './store/index.js';
import Header from './components/header.js';
import Sort from './components/Sort.js';
import Filter from './components/Filter.js';
import List from './components/list.js';
import Modal from './components/modal.js';

fetch('/data/products.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data &&
      data.items.map(item => {
        store.dispatch('add', item);
      });
    data && store.dispatch('init', data.items);

    const headerComponent = new Header();
    headerComponent.render();
    const sortComponent = new Sort();
    sortComponent.render();
    const filterComponent = new Filter();
    filterComponent.render();
    const listComponent = new List();
    listComponent.render();
    new Modal().init();
  });

/*
// Instantiate components
const countInstance = new Count();
//const listInstance = new List();
const statusInstance = new Status();
const shoppingListInstance = new ShoppingList();

// Initial renders
countInstance.render();
//listInstance.render();
statusInstance.render();
shoppingListInstance.render();
*/

//import store from './store/index.js';

// Load up components
//import Count from './components/cart.js';

//import ShoppingList from './components/shoppingList.js';

//import Status from './components/header.js';

// Load up some DOM elements
//const formElement = document.querySelector('.js-form');
//const inputElement = document.querySelector('#new-item-field');

// Add a submit event listener to the form and prevent it from posting back
/*formElement.addEventListener('submit', evt => {
  evt.preventDefault();
  */
/*
  // Grab the text value of the textbox and trim any whitespace off it
  let value = inputElement.value.trim();

  // If there's some content, trigger the action and clear the field, ready for the next item
  if (value.length) {
    store.dispatch('add', value);
    inputElement.value = '';
    inputElement.focus();
  }
});
*/ import noUiSlider from 'nouislider/distribute/nouislider.js';

var nonLinearStepSlider = document.getElementById('slider-non-linear-step');

noUiSlider.create(nonLinearStepSlider, {
  start: [100, 10000],
  range: {
    min: [100, 100],
    '10%': [500, 500],
    '50%': [4000, 1000],
    max: [10000]
  }
});

var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

nonLinearStepSlider.noUiSlider.on('update', function(values) {
  nonLinearStepSliderValueElement.innerHTML = `<div class='filter-modal__range-start'> <i class="fas fa-rupee-sign"></i>${parseInt(
    values[0]
  )}</div>
     <div class='filter-modal__range-end'> <i class="fas fa-rupee-sign"></i>${parseInt(
       values[1]
     )}</div>`;
});