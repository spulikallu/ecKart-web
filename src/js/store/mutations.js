import { applySearch, applyFilter, applySort, getItemById } from '../helpers/operations.js';

export default {
  load(state, products) {
    Object.assign(state.items, products.items);
    Object.assign(state.products, applySort(products.items));
    return state;
  },

  search(state, payload) {
    state.searchText = payload;
    Object.assign(state.products, state.items);
    state.products = Object.assign([], applySearch(state.products, payload));
    return state;
  },

  filter(state, filterBy) {
    Object.assign(state.products, state.items);
    Object.assign(state, filterBy);
    state.products = Object.assign([], applyFilter(state));
    return state;
  },

  sort(state, sortby) {
    state.sortby = sortby;
    Object.assign(state.products, applySort(state.products, sortby));
    return state;
  },

  addItem(state, payload) {
    let cartItems = state.cart;
    let item = getItemById(cartItems, payload);
    if (item) {
      item.quantity = item.quantity + 1;
    } else {
      item = getItemById(state.products, payload);
      item.quantity = 1;
      cartItems.push(item);
    }
    state.cart = cartItems;
    return state;
  },

  removeItem(state, payload) {
    let cartItems = state.cart;
    let item = getItemById(cartItems, payload);
    if (item) {
      item.quantity = item.quantity - 1;
      if (item.quantity == 0) {
        cartItems.splice(
          cartItems.findIndex(list => {
            return list.id === payload;
          }),
          1
        );
      }
    }
    state.cart = cartItems;
    return state;
  },

  removeItems(state, payload) {
    let cartItems = state.cart;
    cartItems.splice(
      cartItems.findIndex(list => {
        return list.id === payload;
      }),
      1
    );
    state.cart = cartItems;
    return state;
  }
};
