// import Vue from 'vue';
// import { shallowMount } from '@vue/test-utils'
// import Expenses from '../../../src/components/Expenses';
// import {mount} from "@vue/test-utils";
// jest.setTimeout(30000);
// // jest.mock('axios');
//
//
//
// it('Test ExpensesAPI', (done) => {
//
//   // const wrapper = shallowMount(Expenses);
//   const wrapper = mount(Expenses, { Vue });
//   wrapper.vm.getPayMethods()
//     .then((res) => {
//       expect(res.data).toBeInstanceOf(Array);
//       expect(res.data).not.toHaveLength(0);
//       done()
//   })
// });
//
// // import Vue from 'vue';
// //
// // import ExpensesAPI from '../../../src/api/Expenses';
// // import Categories from '../../../src/components/Categories';
// // import {mount} from "@vue/test-utils";
// //
// // describe('ExpensesAPI', () => {
// //   const wrapper = mount(Categories, { Vue });
// //   Categories.methods.getCategories();
// //   console.log(Categories.data().categories);
// //   console.log|(wrapper.vm.categories);
// //
// //   // expect(wrapper.vm.expenses).toEqual([]);
// //
// //   // Inspect the raw component options
// //   it('Get expenses list', () => ExpensesAPI.get()
// //     .then((res) => {
// //       expect(res).toBeDefined();
// //       expect(res.data).toBeInstanceOf(Array);
// //     })
// //   );
// //
// //   it('Create new expense', () => ExpensesAPI.createExpense(1, {
// //     amount: '100', description: 'aaa', category: '5ba3e7492c88842df49ca27b',
// //         pay_method: '5ba3e7472c88842df49ca270',
// //         timestamp: '2019-02-22',
// //         one_time: false,
// //     })
// //     .then((res) => {
// //       expect(res).toBeDefined();
// //       expect(res.data).toBeInstanceOf(Array);
// //     })
// //   );
// // });
import ExpensesAPI from '../../../src/api/Expenses';


describe('ExpensesAPI', () => {
  // Inspect the raw component options
  it('Get expenses list', () => ExpensesAPI.get()
    .then((res) => {
      expect(res).toBeDefined();
      expect(res.data).toBeInstanceOf(Array);
    }));
});
