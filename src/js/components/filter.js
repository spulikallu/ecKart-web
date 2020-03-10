import { qs } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';

export default class Filter extends Component {
  constructor() {
    super({
      store,
      element: qs('.js-filter-component')
    });
    this.FILTER_BTN = '.js-filter';
    this.APP_MODAL = 'app-modal';
    this.MODAL_CONTAINER = '.js-modal-container';
    this.SORT_MODAL = '.js-sort-modal';
    this.FILTER_MODAL = '.js-filter-modal';
  }

  render() {
    let self = this;
    self.element.innerHTML = `
      <a href="javascript:void(0)" class="js-filter"><i class="fas fa-filter"><span>Filter</span></i></a>
    `;

    qs(this.FILTER_BTN).addEventListener('click', () => {
      document.getElementById(this.APP_MODAL).style = 'display:block';
      qs(this.MODAL_CONTAINER).style = 'display:block';
      qs(this.SORT_MODAL).style = 'display:none';
      qs(this.FILTER_MODAL).style = 'display:block';
    });
  }
}
