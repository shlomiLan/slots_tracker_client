const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"staging"',
  API_BASE_URL: '"http://127.0.0.1:5000/"',
});
