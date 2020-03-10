import { on } from './dom-events.js';

export function qs(selector, container) {
  if (container) {
    return container.querySelector(selector);
  }
  return document.querySelector(selector);
}

export function qsAll(selector, container) {
  if (container) {
    return container.querySelectorAll(selector);
  }
  return document.querySelectorAll(selector);
}

export function iterator(ele, callback, eventName) {
  if (eventName) {
    return ele.forEach(element => {
      on(element, eventName, event => callback(element, event));
    });
  }
  return ele.forEach(element => {
    callback(element);
  });
}
