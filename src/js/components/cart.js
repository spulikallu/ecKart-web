import { qs, getViewPortWidth } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';

export default class Checkout extends Component {
  constructor() {
    super({
      store,
      element: qs('.js-cart-component')
    });

    this.CART_ICON = '.js-cart';
    this.CHECKOUT_VIEW = '.js-checkout-page';
    this.PRODUCTS_VIEW = '.js-product-page';
  }

  render() {
    let self = this;
    let cartCount = 0;
    store.state.cart.forEach(element => {
      cartCount = cartCount + element.quantity;
    });

    self.element.innerHTML = `
      <i class="fas fa-shopping-cart js-cart" data-badge="${cartCount}"></i>
      `;

    qs(this.CART_ICON, self.element).addEventListener('click', () => {
      if (getViewPortWidth() > 768) {
        qs(this.CHECKOUT_VIEW).style = 'display:flex';
      } else {
        qs(this.CHECKOUT_VIEW).style = 'display:block';
      }
      qs(this.PRODUCTS_VIEW).style = 'display:none';
    });
  }
}
