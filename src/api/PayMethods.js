import Base from './Base';

const resource = '/pay_methods/';

export default {
  get() {
    return Base.get(`${resource}`);
  },

  create(payload) {
    return Base.post(`${resource}`, payload);
  },

  update(expenseId, payload) {
    return Base.put(`${resource}${expenseId}`, payload);
  },
};
