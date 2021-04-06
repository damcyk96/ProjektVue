export default {
  projects(state, _, _2, rootGetters) {
    const developerId = rootGetters.userId;
    return state.projects.filter(req => req.developerId === developerId);
  },
  hasProjects(_, getters) {
    return getters.projects && getters.projects.length > 0;
  }
};
