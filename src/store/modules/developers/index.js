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
        },
        {
          id: 'c2',
          firstName: 'Lorem',
          lastName: 'Ipsum',
          areas: ['react', 'python'],
          description:
            'Ut eu faucibus nisl, id euismod diam. Vestibulum cursus odio metus, quis pellentesque elit vehicula in. Integer consectetur euismod mauris. Praesent blandit purus turpis, quis porta magna lobortis ut. Nunc luctus vel nisi quis faucibus. Phasellus pharetra porttitor diam non sollicitudin. ',
          hourlyRate: 30
        },
        {
          id: 'c3',
          firstName: 'Lorem',
          lastName: 'Ipsum',
          areas: ['java'],
          description:
            'Ut eu faucibus nisl, id euismod diam. Vestibulum cursus odio metus, quis pellentesque elit vehicula in. Integer consectetur euismod mauris. Praesent blandit purus turpis, quis porta magna lobortis ut. Nunc luctus vel nisi quis faucibus. Phasellus pharetra porttitor diam non sollicitudin. ',
          hourlyRate: 30
        },
        {
          id: 'c4',
          firstName: 'Lorem',
          lastName: 'Ipsum',
          areas: ['csharp', 'react'],
          description:
            'Ut eu faucibus nisl, id euismod diam. Vestibulum cursus odio metus, quis pellentesque elit vehicula in. Integer consectetur euismod mauris. Praesent blandit purus turpis, quis porta magna lobortis ut. Nunc luctus vel nisi quis faucibus. Phasellus pharetra porttitor diam non sollicitudin. ',
          hourlyRate: 30
        },
        {
          id: 'c5',
          firstName: 'Lorem',
          lastName: 'Ipsum',
          areas: ['tester'],
          description:
            'Ut eu faucibus nisl, id euismod diam. Vestibulum cursus odio metus, quis pellentesque elit vehicula in. Integer consectetur euismod mauris. Praesent blandit purus turpis, quis porta magna lobortis ut. Nunc luctus vel nisi quis faucibus. Phasellus pharetra porttitor diam non sollicitudin. ',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
