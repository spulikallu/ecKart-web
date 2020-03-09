import Component from '../core/component.js';
import store from '../store/index.js';

export default class Checkout extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-cart-component')
    });
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

    self.element.querySelector('.js-cart').addEventListener('click', () => {
      document.querySelector('.js-checkout-page').style = 'display:block';
      document.querySelector('.js-product-page').style = 'display:none';
    });
  }
}
