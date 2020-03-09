import '../css/style.scss';
import store from './store/index.js';
import Header from './components/header.js';
import Sort from './components/Sort.js';
import Filter from './components/Filter.js';
import List from './components/list.js';
import Modal from './components/modal.js';
import noUiSlider from 'nouislider/distribute/nouislider.js';

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
    new Modal().init();
  });

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
  nonLinearStepSliderValueElement.innerHTML = `
  <div class='filter-modal__range-start'> <i class="fas fa-rupee-sign"></i><span>${parseInt(
    values[0]
  )}</span></div>
     <div class='filter-modal__range-end'> <i class="fas fa-rupee-sign"></i><span>${parseInt(
       values[1]
     )}</span></div>`;
});
