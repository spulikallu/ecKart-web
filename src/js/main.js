import '../css/style.scss';
import './helpers/dom-events.js';
import './helpers/utility.js';
import './helpers/operations.js';
import './helpers/window.js';
import './constants/strings.js';

import store from './store/index.js';
import Header from './components/header.js';
import Sort from './components/sort.js';
import Filter from './components/filter.js';
import List from './components/list.js';
import Checkout from './components/checkout.js';

fetch('/data/products.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    if (data) {
      store.dispatch('load', data);
    }

    const headerComponent = new Header();
    headerComponent.render();
    const sortComponent = new Sort();
    sortComponent.render();
    sortComponent.init();
    const filterComponent = new Filter();
    filterComponent.render();
    filterComponent.init();
    const listComponent = new List();
    listComponent.render();
    const checkoutComponent = new Checkout();
    checkoutComponent.render();
  });
