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

  addItem(context, product) {
    context.commit('addItem', product);
  },

  removeItem(context, product) {
    context.commit('removeItem', product);
  },

  removeItems(context, product) {
    context.commit('removeItems', product);
  }
};
