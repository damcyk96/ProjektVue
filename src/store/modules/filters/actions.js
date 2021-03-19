export default {
  setFilter(context, payload) {
    context.commit('setFilter', payload);
    console.log(payload);
  }
};
