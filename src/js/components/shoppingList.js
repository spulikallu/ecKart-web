import Component from '../core/component.js';
import store from '../store/index.js';

export default class ShoppingList extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-shopping-list'),
    });
  }

  render() {
    let self = this;

    if (store.state.items.length === 0) {
      self.element.innerHTML = `<p class="no-items">You've done nothing yet</p>`;
      return;
    }

    self.element.innerHTML = `
        
                ${store.state.items
                  .map(item => {
                    return `
                    <ul class="app__items">
                  <li><img src='${item.img_url}'></img></li> 
                        <li>${item.id}</li>
                        <li>${item.name}</li>
                        <li>${item.price}</li>
                        <li>${item.discount}</li>
                        <li>${item.category}</li>
                        </ul>
                        ------------------------
                   
                    `;
                  })
                  .join('')}
       
            
            <br/><br/>
        `;

    self.element.querySelectorAll('button').forEach((button, index) => {
      button.addEventListener('click', () => {
        store.dispatch('clearItem', { index });
      });
    });
  }
}
