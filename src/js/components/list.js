import { qs, qsAll, iterator } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';

export default class List extends Component {
  constructor() {
    super({
      store,
      element: qs('.js-product-list-component')
    });

    this.ADD_TO_CART_BTN = '.js-add-to-cart';
    this.ITEM_ID = 'data-item-id';
  }

  render() {
    let self = this;
    self.element.innerHTML =
      `    
    <section class="products">     
    ` +
      store.state.products
        .map(item => {
          return (
            ` 
            <div class="products__item">
                <img src="${item.img_url}" alt="${item.name}">
                <h2>${item.name}</h2>
                <div class="products__cost">
                    <span class="products__selling-price"><i class="fas fa-rupee-sign"></i>
                    ${item.price - (item.price * item.discount) / 100}</span>
                    <span class="products__actual-price">${item.price}</span>
                    <span class="products__discount">${item.discount}% off</span>
                </div>
                <div class="products__add">
                    <button class="js-add-to-cart" data-item-id="` +
            item.id +
            `">Add to Cart</button>
                </div>
            </div>`
          );
        })
        .join(' ') +
      `
  </section>`;

    iterator(
      qsAll(this.ADD_TO_CART_BTN, self.element),
      item => {
        store.dispatch('addItem', parseInt(item.getAttribute(this.ITEM_ID)));
      },
      'click'
    );
  }
}
