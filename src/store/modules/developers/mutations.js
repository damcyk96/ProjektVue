export default {
  registerDeveloper(state, payload) {
    state.developers.push(payload);
  },
  setDeveloper(state, payload) {
    state.developers = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
