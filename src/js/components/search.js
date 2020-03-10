import { qs } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';

export default class Search extends Component {
  constructor() {
    super({
      store,
      element: qs('.js-search-component')
    });

    this.SEARCH_ICON = '.js-search';
    this.SEARCH_TEXT = '.js-search-text';
  }

  render() {
    let self = this;
    self.element.innerHTML = `
      <input type="text" class="js-search-text" placeholder="Search" value=${store.state
        .searchText || ''}></input>
      <i class="fas fa-search js-search"></i>
    `;

    qs(this.SEARCH_ICON, self.element).addEventListener('click', () => {
      store.dispatch('search', qs(this.SEARCH_TEXT).value);
    });
  }
}
