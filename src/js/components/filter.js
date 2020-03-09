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
      <a href=""><i class="fas fa-filter"><span>Filter</span></i></a>
    `;
  }
}
