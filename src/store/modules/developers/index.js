import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      developers: [
        {
          id: 'c1',
          firstName: 'Janusz',
          lastName: 'Kowalski',
          areas: ['tester', 'csharp'],
          description:
            'Nunc vehicula eleifend enim sed semper. Nam egestas nulla sit amet risus fermentum, nec maximus lectus vehicula. Nullam ornare arcu nisl, at sodales justo ullamcorper sed.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
