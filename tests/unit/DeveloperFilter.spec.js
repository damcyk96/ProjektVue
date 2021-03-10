import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import { DeveloperFilter } from '../../src/components/developers/DeveloperFilter.vue';

describe('DeveloperFilter', () => {
  let wrapper = '';

  beforeEach(() => {
    wrapper = shallowMount(DeveloperFilter);
  });
});
