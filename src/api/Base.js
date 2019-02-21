import axios from 'axios';

console.log('In base');
console.log(process.env.API_BASE_URL);
const baseURL = process.env.API_BASE_URL;
export default axios.create({
  baseURL,
});
