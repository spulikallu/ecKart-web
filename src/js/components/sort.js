import { qs } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';

export default class Sort extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-sort-component')
    });

    this.SORT_BTN = '.js-sort';
    this.APP_MODAL = 'app-modal';
    this.MODAL_CONTAINER = '.js-modal-container';
    this.SORT_MODAL = '.js-sort-modal';
    this.FILTER_MODAL = '.js-filter-modal';
  }

  render() {
    let self = this;

    self.element.innerHTML = `
      <a href="javaScript:void(0)" class="js-sort"><i class="fas fa-sort"><span>Sort</span></Sort></i></a>
    `;

    qs(this.SORT_BTN).addEventListener('click', () => {
      document.getElementById(this.APP_MODAL).style = 'display:block';
      qs(this.MODAL_CONTAINER).style = 'display:block';
      qs(this.SORT_MODAL).style = 'display:block';
      qs(this.FILTER_MODAL).style = 'display:none';
    });
  }
}
