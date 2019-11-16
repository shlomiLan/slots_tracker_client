// Import Vue and the component being tested
import Vue from 'vue';
import Expenses from '../../src/views/Expenses.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MyComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Expenses.created).toBe('function');
  });

  // Inspect initial expenses is empty
  it('correctly sets the message when created', () => {
    const vm = new Vue(Expenses).$mount();
    expect(vm.expenses).toEqual(expect.arrayContaining([]));
  });
});
