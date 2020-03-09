import Component from '../core/component.js';
import store from '../store/index.js';

export default class Filter extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-filter-component')
    });
  }

  render() {
    let self = this;

    self.element.innerHTML = `
      <a href="javascript:void(0)" class="js-filter"><i class="fas fa-filter"><span>Filter</span></i></a>
    `;

    self.element.querySelector('.js-filter').addEventListener('click', () => {
      document.getElementById('app-modal').style = 'display:block';
      document.querySelector('.js-modal-container').style = 'display:block';
      document.querySelector('.js-sort-modal').style = 'display:none';
      document.querySelector('.js-filter-modal').style = 'display:block';
    });
  }
}
