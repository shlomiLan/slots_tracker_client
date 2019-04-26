import Base from './Base';

const resource = '/descriptions/';

export default {
  get() {
    return Base.get(`${resource}`);
  },
};
