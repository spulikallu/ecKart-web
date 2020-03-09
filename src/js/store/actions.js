export default {
  load(context, payload) {
    context.commit('load', payload);
  },

  search(context, payload) {
    context.commit('search', payload);
  },

  sort(context, payload) {
    context.commit('sort', payload);
  },

  filter(context, payload) {
    context.commit('filter', payload);
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
