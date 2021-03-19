export default {
  setFilter(state, { key, value }) {
    state.filters = {
      ...state.filters,
      [key]: value
    };
    console.log(state);
  }
};
