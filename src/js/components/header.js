import Component from '../core/component.js';
import store from '../store/index.js';
import Search from '../components/search.js';
import Cart from '../components/cart.js';

export default class Header extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-header-component')
    });
  }

  render() {
    let self = this;
    self.element.innerHTML = `
      <div class="header__container">
        <div class="header__logo js-logo">
            <i class="fas fa-star"></i>
        </div>
        <div class="header__search js-search-component">

        </div>
        <div class="header__cart js-cart-component">
            
        </div>
      </div>
      `;

    setTimeout(function() {
      new Search().render();
      new Cart().render();
    });

    self.element.querySelector('.js-logo').addEventListener('click', () => {
      document.querySelector('.js-cart-page').style = 'display:none';
      document.querySelector('.js-product-page').style = 'display:block';
    });
  }
}
