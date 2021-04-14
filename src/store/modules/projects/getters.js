export default {
  projects(state) {
    return state.projects;
  },
  hasProjects(_, getters) {
    return getters.projects && getters.projects.length > 0;
  }
};
