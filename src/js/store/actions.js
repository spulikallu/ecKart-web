export default {
  init(context, payload) {
    context.commit('init', payload);
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

  add(context, payload) {
    context.commit('add', payload);
  }
};
