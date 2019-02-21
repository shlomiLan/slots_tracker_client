const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
console.log('In test.env');
console.log(prodEnv.API_BASE_URL);
module.exports = merge(prodEnv, {
  NODE_ENV: '"testing"',
  API_BASE_URL: '"https://slots-tracker-test.herokuapp.com"',
});
console.log(prodEnv.API_BASE_URL);
