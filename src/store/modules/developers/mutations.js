export default {
  registerDeveloper(state, payload) {
    state.developers.push(payload);
  },
  setDevelopers(state, payload) {
    state.developers = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
