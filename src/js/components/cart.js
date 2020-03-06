import Component from '../core/component.js';
import store from '../store/index.js';

export default class Count extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-count'),
    });
  }

  render() {
    let suffix = store.state.items.length !== 1 ? 's' : '';
    let emoji = store.state.items.length > 0 ? '🙌' : '😢';

    this.element.innerHTML = `
            <small>You've done</small>
            <span>${store.state.items.length}</span>
            <small>thing${suffix} today ${emoji}</small>
        `;
  }
}
