import Component from '../core/component.js';
import store from '../store/index.js';

export default class List extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-product-list-component')
    });
  }

  render() {
    let self = this;
    self.element.innerHTML =
      `    
  <section class="products">
     
    ` +
      store.state.ui
        .map(item => {
          return (
            ` 
      <div class="products__item">
          <img src="${item.img_url}">
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

    self.element.querySelectorAll('.js-add-to-cart').forEach(item => {
      item.addEventListener('click', () => {
        store.dispatch('addItem', parseInt(item.getAttribute('data-item-id')));
      });
    });
  }
}
