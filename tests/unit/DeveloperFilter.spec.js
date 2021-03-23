import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import { createStore } from 'vuex';
import { DeveloperFilter } from '../../src/components/developers/DeveloperFilter.vue';

const store = createStore({
  state: {
    firstName: 'Alice',
    lastName: 'Doe'
  },

  getters: {
    fullname: state => state.firstName + ' ' + state.lastName
  }
});

it('renders a username using a real Vuex getter', () => {
  const wrapper = mount(DeveloperFilter, {
    global: {
      plugins: [store]
    }
  });

  expect(wrapper.exists(DeveloperFilter)).toBe(true);
});

// it('should change the state on false if unchecked all checkboxes', () => {});

// it('should return to default state (true) if double clicked all checkboxes', () => {});

// //dynamic state change?
// it('should change filtering if I change the state of elements in object', () => {});

// it('should render checkboxes from filters', () => {});
// Testy e2e powinny sprawdzić jeżeli zmieniam filtry to czy labelka przy wszystkich developerach zawiera również ten filtr.
// A wyświetlanie developerów według state filtrów to jest inny komponent już jako tako. Wydaje mi się, ze tylko tego typu testy.
