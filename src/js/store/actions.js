export default {
  load(context, products) {
    context.commit('load', products);
  },

  search(context, searchText) {
    context.commit('search', searchText);
  },

  filter(context, filterBy) {
    context.commit('filter', filterBy);
  },

  sort(context, sortby) {
    context.commit('sort', sortby);
  },

  addItem(context, productId) {
    context.commit('addItem', productId);
  },

  removeItem(context, productId) {
    context.commit('removeItem', productId);
  },

  removeItems(context, productId) {
    context.commit('removeItems', productId);
  }
};
