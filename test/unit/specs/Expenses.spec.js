import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Expenses from '../../../src/components/Expenses';

describe('Expenses', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    const wrapper = mount(Expenses, { Vue });
    expect(wrapper.vm.expenses).toEqual([]);
  });
});
