import { applySearch, applyFilter, applySort, getItemById } from '../helpers/operations.js';

export default {
  load(state, products) {
    Object.assign(state.items, products.items);
    Object.assign(state.products, applySort(products.items));
    return state;
  },

  search(state, searchText) {
    state.searchText = searchText;
    Object.assign(state.products, state.items);
    state.products = Object.assign([], applySearch(state.products, searchText));
    return state;
  },

  filter(state, filterBy) {
    Object.assign(state.products, state.items);
    Object.assign(state, filterBy);
    state.products = applySearch(state.products, state.searchText);
    state.products = Object.assign([], applyFilter(state));
    state.products = Object.assign(state.products, applySort(state.products, state.sortby));
    return state;
  },

  sort(state, sortby) {
    state.sortby = sortby;
    Object.assign(state.products, applySort(state.products, sortby));
    return state;
  },

  addItem(state, product) {
    let cartItems = state.cart;
    let item = getItemById(cartItems, product);
    if (item) {
      item.quantity = item.quantity + 1;
    } else {
      item = getItemById(state.products, product);
      item.quantity = 1;
      cartItems.push(item);
    }
    state.cart = cartItems;
    return state;
  },

  removeItem(state, product) {
    let cartItems = state.cart;
    let item = getItemById(cartItems, product);
    if (item) {
      item.quantity = item.quantity - 1;
      if (item.quantity == 0) {
        cartItems.splice(
          cartItems.findIndex(list => {
            return list.id === product;
          }),
          1
        );
      }
    }
    state.cart = cartItems;
    return state;
  },

  removeItems(state, product) {
    let cartItems = state.cart;
    cartItems.splice(
      cartItems.findIndex(list => {
        return list.id === product;
      }),
      1
    );
    state.cart = cartItems;
    return state;
  }
};
