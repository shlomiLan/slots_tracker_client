import Base from './Base';

const resource = '/categories/';

export default {
  get(added_by_user) {
    if (added_by_user !== undefined){
      return Base.get(`${resource}?added_by_user=${added_by_user}`);
    }else {
      return Base.get(`${resource}`);
    }
  },

  create(payload) {
    return Base.post(`${resource}`, payload);
  },

  update(categoryId, payload) {
    return Base.put(`${resource}${categoryId}`, payload);
  }
};
