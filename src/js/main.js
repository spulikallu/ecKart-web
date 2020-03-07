//TODO:

import '../css/global.css';
import store from './store/index.js';

// Load up components
import Count from './components/cart.js';

import ShoppingList from './components/shoppingList.js';

import Status from './components/header.js';

// Load up some DOM elements
const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');

// Add a submit event listener to the form and prevent it from posting back
formElement.addEventListener('submit', evt => {
  evt.preventDefault();

  // Grab the text value of the textbox and trim any whitespace off it
  let value = inputElement.value.trim();

  // If there's some content, trigger the action and clear the field, ready for the next item
  if (value.length) {
    store.dispatch('addItem', value);
    inputElement.value = '';
    inputElement.focus();
  }
});

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
