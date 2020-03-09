import Component from '../core/component.js';
import store from '../store/index.js';

export default class Checkout extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-checkout-page')
    });
  }

  render() {
    let self = this;

    self.element.innerHTML =
      `
    <section class="cart">
    ` +
      store.state.cart
        .map(item => {
          return (
            `
          <div class="cart__item">
          <div class="cart__item-image">
              <img src="${item.img_url}"></img>
          </div>
          <div class="cart__item-content">
              <h2 class="cart__item-name">
                  ${item.name}
              </h2>
              <div class="cart__item-cost">
                  <span class="cart__item-selling-price"><i class="fas fa-rupee-sign"></i>
                  ${item.price - (item.price * item.discount) / 100}
                  </span>
                  <span class="cart__item-actual-price">${item.price}</span>
                  <span class="cart__item-discount">${item.discount}% off</span>
              </div>
              <div class="cart__item-action">
                  <div class="cart__item-minus js-item-minus"  data-item-id="` +
            item.id +
            `">
                  <i class="fa fa-minus" aria-hidden="true"></i> </div>
                  <div class="cart__item-text"><input type="text" value="${item.quantity}" maxlength="2"> </div>
                  <div class="cart__item-plus js-item-plus" data-item-id="` +
            item.id +
            `"> 
                  <i class="fa fa-plus" aria-hidden="true" ></i> </div>
              </div>
              <div class="cart__item-remove">
                  <button>Remove</button>
              </div>
          </div>
      </div>`
          );
        })
        .join(' ') +
      `   
    </section>
    <section class="price">
        <h2>PRICE DETAILS</h2>
        <div class="price__cost">
            <div class="price__item-cost">
                Price <span class="quantity">(2 item(s))</span>
            </div>
            <div class="price__item-seperator">
                :
            </div>
            <div class="price__item-price">
                <span class="products__selling-price"><i class="fas fa-rupee-sign"></i>319</span>
            </div>

        </div>
        <div class="price__cost price__cost--discount">
            <div class="price__item-cost">
                Discount
            </div>
            <div class="price__item-seperator">
                :
            </div>
            <div class="price__item-price">
                <span class="products__selling-price"><i class="fas fa-rupee-sign"></i>579</span>
            </div>

        </div>
        <div class="price__payable">
            <div>
                <p>Total Payable</p>
            </div>
            <div class="price__payable__price">
                <span class="products__selling-price"><i class="fas fa-rupee-sign"></i>579</span>
            </div>
        </div>
    </section>
    `;

    if (store.state.cart.length > 0) {
      self.element.querySelectorAll('.js-item-plus').forEach(item => {
        item.addEventListener('click', () => {
          store.dispatch('addItem', parseInt(item.getAttribute('data-item-id')));
        });
      });

      self.element.querySelectorAll('.js-item-minus').forEach(item => {
        item.addEventListener('click', () => {
          store.dispatch('removeItem', parseInt(item.getAttribute('data-item-id')));
        });
      });
    }
  }
}
