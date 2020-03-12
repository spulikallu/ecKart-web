import { applySearch, applyFilter, applySort, getPropertyByKey } from '../helpers/operations.js';
import { clone } from '../helpers/copy.js';

export default {
  load(state, products) {
    let stateNow = {};
    stateNow.items = products.items;
    stateNow.products = products.items;
    return stateNow;
  },

  search(state, searchText) {
    let stateNow = {};
    stateNow.searchText = searchText;
    stateNow.products = clone(state.items);
    stateNow.products = applySearch(stateNow.products, searchText);
    stateNow.products = applyFilter(stateNow.products, state.filterMin, state.filterMax);
    stateNow.products = applySort(stateNow.products, state.sortby);
    return stateNow;
  },

  filter(state, filterBy) {
    let stateNow = {};
    stateNow.filterMin = filterBy.filterMin;
    stateNow.filterMax = filterBy.filterMax;
    stateNow.products = clone(state.items);
    stateNow.products = applySearch(stateNow.products, state.searchText);
    stateNow.products = applyFilter(stateNow.products, stateNow.filterMin, stateNow.filterMax);
    stateNow.products = applySort(stateNow.products, state.sortby);
    return stateNow;
  },

  sort(state, sortby) {
    let stateNow = {};
    stateNow.sortby = sortby;
    stateNow.products = clone(state.products);
    stateNow.products = applySort(stateNow.products, sortby);
    return stateNow;
  },

  addItem(state, productId) {
    let stateNow = {};
    stateNow.cart = clone(state.cart);
    let product = getPropertyByKey(stateNow.cart, productId);
    if (product) {
      product.quantity = product.quantity + 1;
    } else {
      product = getPropertyByKey(state.products, productId);
      product.quantity = 1;
      stateNow.cart.push(product);
    }
    return stateNow;
  },

  removeItem(state, productId) {
    let stateNow = {};
    stateNow.cart = clone(state.cart);
    let product = getPropertyByKey(stateNow.cart, productId);
    if (product) {
      product.quantity = product.quantity - 1;
      if (product.quantity == 0) {
        stateNow.cart.splice(
          stateNow.cart.findIndex(list => {
            return list.id === productId;
          }),
          1
        );
      }
    }
    return stateNow;
  },

  removeItems(state, productId) {
    let stateNow = {};
    stateNow.cart = clone(state.cart);
    stateNow.cart.splice(
      stateNow.cart.findIndex(list => {
        return list.id === productId;
      }),
      1
    );
    return stateNow;
  }
};
