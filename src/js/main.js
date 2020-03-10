import '../css/style.scss';
import './helpers/dom-events.js';
import './helpers/utility.js';
import './helpers/operations.js';
import './constants/strings.js';

import store from './store/index.js';
import Header from './components/header.js';
import Sort from './components/sort.js';
import Filter from './components/filter.js';
import List from './components/list.js';
import Checkout from './components/checkout.js';
import Modal from './components/modal.js';
import Slider from './components/slider.js';

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
    const filterComponent = new Filter();
    filterComponent.render();
    const listComponent = new List();
    listComponent.render();
    const checkoutComponent = new Checkout();
    checkoutComponent.render();
    new Modal().init();
    new Slider().init(
      document.getElementById('slider-non-linear-step'),
      document.getElementById('slider-non-linear-step-value')
    );
  });
