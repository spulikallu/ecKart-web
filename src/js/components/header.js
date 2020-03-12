import { qs } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';

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
      <i class="fas fa-star"></i>
    `;

    qs(this.LOGO).addEventListener('click', () => {
      qs(this.CART_VIEW).style = 'display:none';
      qs(this.PRODUCT_VIEW).style = 'display:block';
    });
  }
}
