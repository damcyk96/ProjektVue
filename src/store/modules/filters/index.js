import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      filters: {
        react: true,
        csharp: true,
        java: true,
        python: true,
        tester: true
      }
    };
  },
  mutations,
  actions,
  getters
};
