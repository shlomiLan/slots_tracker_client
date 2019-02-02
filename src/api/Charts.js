import Base from './Base';

const resource = '/charts/';

export default {
  get() {
    return Base.get(`${resource}`);
  },
};
