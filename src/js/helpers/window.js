import { qs } from './utility.js';

window.onresize = function() {
  const SORT_MODAL_CONTAINER = 'sort-modal';
  const FILTER_MODAL_CONTAINER = 'filter-modal';
  const CHECKOUT_VIEW = '.js-checkout-page';
  const PRODUCTS_VIEW = '.js-product-page';

  if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768) {
    document.getElementById(SORT_MODAL_CONTAINER).style = 'display:block';
    document.getElementById(FILTER_MODAL_CONTAINER).style = 'display:block';
    if (qs(PRODUCTS_VIEW).offsetParent) {
      qs(CHECKOUT_VIEW).style = 'display:none';
    } else {
      qs(CHECKOUT_VIEW).style = 'display:flex';
    }
  } else {
    document.getElementById(SORT_MODAL_CONTAINER).style = 'display:none';
    document.getElementById(FILTER_MODAL_CONTAINER).style = 'display:none';
    qs(CHECKOUT_VIEW).style = 'display:block';
  }
};
