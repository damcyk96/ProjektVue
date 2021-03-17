import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuex from 'vuex';
import store from '../../src/store/index';
import { DeveloperFilter } from '../../src/components/developers/DeveloperFilter.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('DeveloperFilter', () => {
  let wrapper, store;
  store = new Vuex.Store({
    modules: {}
  });

  beforeEach(() => {
    wrapper = shallowMount(DeveloperFilter, { store, localVue });
  });
  // \/ to po to by sprawdzic czy w ogole test przechodzi
  it('should render filters from store', () => {
    expect(wrapper.find('[data-testid="dev__filter-h2"]').text()).to(
      'Find Devs'
    );
  });

  it('should change the state on false if unchecked all checkboxes', () => {});

  it('should return to default state (true) if double clicked all checkboxes', () => {});

  //dynamic state change?
  it('should change filtering if I change the state of elements in object', () => {});

  // Testy e2e powinny sprawdzić jeżeli zmieniam filtry to czy labelka przy wszystkich developerach zawiera również ten filtr.
  // A wyświetlanie developerów według state filtrów to jest inny komponent już jako tako. Wydaje mi się, ze tylko tego typu testy.
});
