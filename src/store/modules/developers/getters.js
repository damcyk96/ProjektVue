export default {
  developers(state) {
    return state.developers;
  },
  hasDevelopers(state) {
    return state.developers && state.developers.length > 0;
  },
  isDeveloper(_, getters, _2, rootGetters) {
    const developers = getters.developers;
    const userId = rootGetters.userId;
    return developers.some(developer => developer.id === userId);
  },
  fullNameDeveloper(_, getters, _2, rootGetters) {
    const developers = getters.developers;
    const userId = rootGetters.userId;
    const selectedDeveloper = developers.filter(
      developer => developer.id === userId
    );
    return selectedDeveloper[0].firstName + ' ' + selectedDeveloper[0].lastName;
  },
  isFeedbackDev(_, getters, _2, rootGetters) {
    const developers = getters.developers;
    const userId = rootGetters.userId;
    const superDevelopers = developers.filter(
      developer => developer.privilege == 'superDev'
    );

    return superDevelopers.some(developer => developer.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};
