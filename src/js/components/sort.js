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
    this.SORT_MODAL_CONTAINER = 'sort-modal';
    this.FILTER_MODAL_CONTAINER = 'filter-modal';
  }

  render() {
    let self = this;

    self.element.innerHTML = `
      <a href="javaScript:void(0)" class="js-sort">
      <i class="fas fa-sort"><span>Sort</span></Sort></i></a>
    `;

    qs(this.SORT_BTN).addEventListener('click', () => {
      let modalContainer = document.getElementById(this.SORT_MODAL_CONTAINER);
      if (!modalContainer.classList.contains('helper-modal')) {
        document.getElementById(this.SORT_MODAL_CONTAINER).classList.add('helper-modal');
      }
      document.getElementById(this.SORT_MODAL_CONTAINER).style = 'display:block';
    });
  }
}
