import { qs, getViewPortWidth } from './utility.js';

window.onresize = function() {
  const SORT_MODAL_CONTAINER = '#sort-modal';
  const FILTER_MODAL_CONTAINER = '#filter-modal';
  const CHECKOUT_VIEW = '.js-checkout-page';
  const PRODUCTS_VIEW = '.js-product-page';
  const IS_MODAL_OPEN = 'data-modal-open';

  if (getViewPortWidth() > 768) {
    qs(SORT_MODAL_CONTAINER).style = 'display:block';
    qs(FILTER_MODAL_CONTAINER).style = 'display:block';
    if (qs(PRODUCTS_VIEW).offsetParent) {
      qs(CHECKOUT_VIEW).style = 'display:none';
    } else {
      qs(CHECKOUT_VIEW).style = 'display:flex';
    }
  } else {
    console.log();
    if (qs(SORT_MODAL_CONTAINER).getAttribute(IS_MODAL_OPEN) === 'false') {
      qs(SORT_MODAL_CONTAINER).style = 'display:none';
    }
    if (qs(FILTER_MODAL_CONTAINER).getAttribute(IS_MODAL_OPEN) === 'false') {
      qs(FILTER_MODAL_CONTAINER).style = 'display:none';
    }
    if (qs(PRODUCTS_VIEW).offsetParent) {
      qs(CHECKOUT_VIEW).style = 'display:none';
    } else {
      qs(CHECKOUT_VIEW).style = 'display:block';
    }
  }
};
