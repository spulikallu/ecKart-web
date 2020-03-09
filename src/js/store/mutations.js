export default {
  init(state, payload) {
    state.ui.push(...payload);
    state.ui = this.applySort(state);
  },

  sort(state, payload) {
    state.sortby = payload;
    state.ui = this.applySort(state);
  },

  /*filter(state, payload) {},*/

  search(state, payload) {
    state.ui = [];
    state.ui.push(...state.items);
    state.searchText = payload;
    let filtered = state.ui.filter(item => {
      return item.name.toLowerCase().startsWith(payload.toLowerCase());
    });
    state.ui = filtered;
  },

  add(state, payload) {
    state.items.push(payload);
    return state;
  },

  clear(state, payload) {
    state.items.splice(payload.index, 1);
    return state;
  },

  applySort(state) {
    return state.ui.sort((item1, item2) => {
      if (state.sortby === 'priceHigh' && item1.price < item2.price) {
        return 1;
      } else if (state.sortby === 'priceLow' && item1.price > item2.price) {
        return 1;
      } else if (state.sortby === 'discount' && item1.discount < item2.discount) {
        return 1;
      } else {
        return -1;
      }
    });
  }
};
