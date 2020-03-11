import { qs, qsAll, iterator } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';
import noUiSlider from 'nouislider/distribute/nouislider.js';
import { SLIDER_DEFAULTS } from '../constants/strings.js';

export default class Filter extends Component {
  constructor() {
    super({
      store,
      element: qs('.js-filter-component')
    });

    this.FILTER_BTN = '.js-filter';
    this.FILTER_MODAL_CONTAINER = 'filter-modal';
    this.FILTER_CANCEL = '#filter-modal .js-modal-cancel';
    this.FILTER_APPLY = '#filter-modal .js-modal-apply';
    this.FILTER_SLIDER_STEP = 'slider-non-linear-step';
    this.FILTER_SLIDER_STEP_VALUE = 'slider-non-linear-step-value';
    this.HELPER_MODAL = 'helper-modal';
    this.FILTER_RANGE_START = '.filter-modal__range-start span';
    this.FILTER_RANGE_END = '.filter-modal__range-end span';
  }
  init() {
    let self = this;

    let stepElement = document.getElementById(this.FILTER_SLIDER_STEP);
    let stepValue = document.getElementById(this.FILTER_SLIDER_STEP_VALUE);
    noUiSlider.create(stepElement, SLIDER_DEFAULTS);

    stepElement.noUiSlider.on('update', function(values) {
      stepValue.innerHTML = `
        <div class='filter-modal__range-start'>
          <i class="fas fa-rupee-sign"></i><span>${parseInt(values[0])}</span>
        </div>
        <div class='filter-modal__range-end'>
          <i class="fas fa-rupee-sign"></i><span>${parseInt(values[1])}</span>
        </div>`;
    });

    let setFilterDefaults = function(filterMin, filterMax) {
      let stepElement = document.getElementById(self.FILTER_SLIDER_STEP);
      stepElement.noUiSlider.set([filterMin, filterMax]);
    };

    qs(self.FILTER_CANCEL).addEventListener('click', function() {
      setFilterDefaults(store.state.filterMin, store.state.filterMax);
      document.getElementById(self.FILTER_MODAL_CONTAINER).style = 'display:none';
    });

    iterator(
      qsAll(this.FILTER_APPLY),
      () => {
        store.dispatch('filter', {
          filterMin: parseInt(qs(self.FILTER_RANGE_START).innerHTML),
          filterMax: parseInt(qs(self.FILTER_RANGE_END).innerHTML)
        });
        if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768) {
          document.getElementById(self.FILTER_MODAL_CONTAINER).style = 'display:none';
        }
      },
      'click'
    );
  }

  render() {
    let self = this;
    self.element.innerHTML = `
      <a href="javascript:void(0)" class="js-filter"><i class="fas fa-filter"><span>Filter</span></i></a>
    `;

    qs(this.FILTER_BTN).addEventListener('click', () => {
      let modalContainer = document.getElementById(this.FILTER_MODAL_CONTAINER);
      if (!modalContainer.classList.contains(this.HELPER_MODAL)) {
        document.getElementById(this.FILTER_MODAL_CONTAINER).classList.add(this.HELPER_MODAL);
      }
      document.getElementById(this.FILTER_MODAL_CONTAINER).style = 'display:block';
    });
  }
}
