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
  }
};
