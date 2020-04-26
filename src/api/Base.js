import axios from 'axios';
import auth from '../auth';

const baseURL = process.env.VUE_APP_API_BASE_URL;
let headers = {};

headers['Authorization'] = `Bearer ${auth.getAccessToken()}`;


export default axios.create({
  baseURL: baseURL, headers
});
