import axios from 'axios';

// TODO: move to global file
const baseURL = process.env.VUE_APP_API_BASE_URL;
const resource = 'login/';


export default {
  login(payload) {
    return axios.post(`${baseURL}${resource}`, payload);
  },
};
