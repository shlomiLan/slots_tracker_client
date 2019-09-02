import Base from './Base';

const resource = '/expenses/';

export default {
  get(filterByPayMethod) {
    return Base.get(`${resource}?pay_methods=${filterByPayMethod}`);
  },

  createExpense(payments, payload) {
    return Base.post(`${resource}?payments=${payments}`, payload);
  },

  updateExpense(expenseId, payload) {
    return Base.put(`${resource}${expenseId}`, payload);
  },
};
