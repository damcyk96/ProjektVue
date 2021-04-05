export default {
  addProject(state, payload) {
    state.projects.push(payload);
  },
  setProjects(state, payload) {
    state.projects = payload;
  }
};
