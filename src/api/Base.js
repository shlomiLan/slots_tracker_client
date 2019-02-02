import axios from 'axios';

// TODO: fix this
// const baseURL = process.env.API_BASE_URL;
const baseURL = 'http://127.0.0.1:5000/';

export default axios.create({
  baseURL,
});
