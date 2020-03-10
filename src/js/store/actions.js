export default {
  load(context, products) {
    context.commit('load', products);
  },

  search(context, payload) {
    context.commit('search', payload);
  },

  filter(context, filterBy) {
    context.commit('filter', filterBy);
  },

  sort(context, sortby) {
    context.commit('sort', sortby);
  },

  addItem(context, payload) {
    context.commit('addItem', payload);
  },

  removeItem(context, payload) {
    context.commit('removeItem', payload);
  },

  removeItems(context, payload) {
    context.commit('removeItems', payload);
  }
};
