import Store from '../store/store.js';

export default class Component {
  constructor(props = {}) {
    let self = this;
    this.render = this.render || function() {};

    // If there's a store passed in, subscribe to the state change
    if (props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => self.render());
    }

    // Store the HTML element to attach the render to if set
    if (props.hasOwnProperty('element')) {
      this.element = props.element;
    }
  }
}
