import { qs } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';
import Search from '../components/search.js';
import Cart from '../components/cart.js';

export default class Header extends Component {
  constructor() {
    super({
      store,
      element: qs('.js-header-component')
    });

    this.LOGO = '.js-logo';
    this.CART_VIEW = '.js-checkout-page';
    this.PRODUCT_VIEW = '.js-product-page';
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

    qs(this.LOGO, self.element).addEventListener('click', () => {
      qs(this.CART_VIEW).style = 'display:none';
      qs(this.PRODUCT_VIEW).style = 'display:block';
    });
  }
}
