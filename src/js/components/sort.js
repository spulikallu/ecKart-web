import Component from '../core/component.js';
import store from '../store/index.js';

export default class Sort extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-sort-component')
    });
  }

  render() {
    let self = this;

    self.element.innerHTML = `
      <a href="javaScript:void(0)" class="js-sort"><i class="fas fa-sort"><span>Sort</span></Sort></i></a>
    `;

    self.element.querySelector('.js-sort').addEventListener('click', () => {
      document.getElementById('app-modal').style = 'display:block';
      document.querySelector('.js-modal-container').style = 'display:block';
      document.querySelector('.js-sort-modal').style = 'display:block';
      document.querySelector('.js-filter-modal').style = 'display:none';
    });
  }
}
