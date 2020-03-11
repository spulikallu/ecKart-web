const NOT_BUBBLED_EVENTS = ['load', 'loadedmetadata', 'scroll'];
export function on(element, event, callback, delegation = '', useCapture = false) {
  const notBubbledEvent = NOT_BUBBLED_EVENTS.indexOf(event) !== -1;
  const eventListener = delegation
    ? e => {
        const target = (e.target || e.currentTarget).closest(delegation);
        if (target) {
          e.targetEl ||
            Object.defineProperty(e, 'targetEl', {
              value: target
            });
          return callback(e);
        }
        return void 0;
      }
    : callback;

  if (notBubbledEvent && delegation) {
    let offs = Array.from(element.querySelectorAll(delegation)).map(element =>
      on(element, event, callback, '', useCapture)
    );
    return () => {
      if (offs) {
        offs.forEach(off => off());
        offs = null;
      }
    };
  } else {
    element.addEventListener(event, eventListener, useCapture);
    return () => {
      element.removeEventListener(event, eventListener, useCapture);
    };
  }
}
