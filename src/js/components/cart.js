import Component from '../core/component.js';
import store from '../store/index.js';

export default class Cart extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-cart-component')
    });
  }

  render() {
    let self = this;

    self.element.innerHTML = `
      <i class="fas fa-shopping-cart js-cart" data-badge="${store.state.cart.length}"></i>
      `;

    self.element.querySelector('.js-cart').addEventListener('click', () => {
      document.querySelector('.js-cart-page').style = 'display:block';
      document.querySelector('.js-product-page').style = 'display:none';
    });
  }
}
