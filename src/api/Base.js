import axios from 'axios';

const baseURL = process.env.VUE_APP_API_BASE_URL;
console.log(baseURL);
export default axios.create({
  baseURL,
});
