import { mount } from '@vue/test-utils';
import { expect } from 'chai';

const App = {
  template: `<div>Hello</div>`
};

test('App', () => {
  const wrapper = mount(App);
  console.log(wrapper.html());
  expect(wrapper.html()).toBe('<div>Hello</div>');
});

// import { mount } from '@vue/test-utils';
// import { expect } from 'chai';
// import { DeveloperFilter } from '../../src/components/developers/DeveloperFilter.vue';

// describe('DevFilters', () => {
//   it('renders a filters using mock store', () => {
//     const wrapper = mount(DeveloperFilter, {
//       mocks: {
//         $store: {
//           state: { react: true }
//         }
//       }
//     });
//     expect(wrapper.find('[data-testid="dev__filter-h2"]').text()).to.contain(
//       'Find Devs'
//     );
//   });
// });

// it('should change the state on false if unchecked all checkboxes', () => {});

// it('should return to default state (true) if double clicked all checkboxes', () => {});

// //dynamic state change?
// it('should change filtering if I change the state of elements in object', () => {});

// it('should render checkboxes from filters', () => {});
// Testy e2e powinny sprawdzić jeżeli zmieniam filtry to czy labelka przy wszystkich developerach zawiera również ten filtr.
// A wyświetlanie developerów według state filtrów to jest inny komponent już jako tako. Wydaje mi się, ze tylko tego typu testy.
