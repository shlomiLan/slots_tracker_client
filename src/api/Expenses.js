import Base from './Base';

const resource = '/expenses/';

export default {
  get(searchQuery, category, pay_method) {
    return Base.get(`${resource}?amount=${searchQuery}&category=${category}&pay_method=${pay_method}`);
  },

  createExpense(payments, payload) {
    return Base.post(`${resource}?payments=${payments}`, payload);
  },

  updateExpense(expenseId, payload) {
    return Base.put(`${resource}${expenseId}`, payload);
  },
};
