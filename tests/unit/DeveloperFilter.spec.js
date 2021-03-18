import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import Vuex from 'vuex';
import store from '../../src/store/index';
import { DeveloperFilter } from '../../src/components/developers/DeveloperFilter.vue';

describe('DeveloperFilter', () => {
  let wrapper;
  // store = new Vuex.Store({
  //   modules: {}
  // });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    wrapper = shallowMount(DeveloperFilter, { store, localVue });
  });
  // \/ to po to by sprawdzic czy w ogole test przechodzi - wszystkie key czy istnieją
  it('should change the state on false if unchecked all checkboxes', () => {});

  it('should return to default state (true) if double clicked all checkboxes', () => {});

  //dynamic state change?
  it('should change filtering if I change the state of elements in object', () => {});

  it('should render checkboxes from filters', () => {});
  // Testy e2e powinny sprawdzić jeżeli zmieniam filtry to czy labelka przy wszystkich developerach zawiera również ten filtr.
  // A wyświetlanie developerów według state filtrów to jest inny komponent już jako tako. Wydaje mi się, ze tylko tego typu testy.
});
