import Base from './Base';

const resource = '/expenses/';

export default {
  get() {
    return Base.get(`${resource}`);
  },

  createExpense(payments, payload) {
    return Base.post(`${resource}?payments=${payments}`, payload);
  },

  updateExpense(expenseId, payload) {
    return Base.put(`${resource}${expenseId}`, payload);
  },
};
