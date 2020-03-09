import Component from '../core/component.js';
import store from '../store/index.js';

export default class Search extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-search-component')
    });
  }

  render() {
    let self = this;
    self.element.innerHTML = `
      <input type="text" class="js-search-text" placeholder="Search" value=${store.state
        .searchText || ''}></input>
      <i class="fas fa-search js-search"></i>
    `;

    self.element.querySelector('.js-search').addEventListener('click', () => {
      store.dispatch('search', document.querySelector('.js-search-text').value);
    });
  }
}
