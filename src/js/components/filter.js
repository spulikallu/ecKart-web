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
    this.FILTER_MODAL_CONTAINER = 'filter-modal';
  }

  render() {
    let self = this;
    self.element.innerHTML = `
      <a href="javascript:void(0)" class="js-filter"><i class="fas fa-filter"><span>Filter</span></i></a>
    `;

    qs(this.FILTER_BTN).addEventListener('click', () => {
      let modalContainer = document.getElementById(this.FILTER_MODAL_CONTAINER);
      if (!modalContainer.classList.contains('helper-modal')) {
        document.getElementById(this.FILTER_MODAL_CONTAINER).classList.add('helper-modal');
      }
      document.getElementById(this.FILTER_MODAL_CONTAINER).style = 'display:block';
    });
  }
}
