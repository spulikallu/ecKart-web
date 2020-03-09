export default {
  load(state, payload) {
    payload.ui = [];
    Object.assign(payload.ui, payload.items);
    Object.assign(state, payload);
  },

  sort(state, payload) {
    state.sortby = payload;
    state.ui = this.applySort(state);
    state.ui = this.applyFilter(state);
  },

  filter(state, payload) {
    Object.assign(state.ui, state.items);
    Object.assign(state, payload);
    state.ui = this.applyFilter(state);
    state.ui = this.applySort(state);
  },

  search(state, payload) {
    Object.assign(state.ui, state.items);
    state.searchText = payload;
    let filtered = state.ui.filter(item => {
      return item.name.toLowerCase().startsWith(payload.toLowerCase());
    });
    state.ui = Object.assign([], filtered);
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
  },

  applyFilter(state) {
    return state.ui.filter(item => {
      let price = item.price - (item.price * item.discount) / 100;
      return price > state.filterMin && price < state.filterMax;
    });
  }
};
