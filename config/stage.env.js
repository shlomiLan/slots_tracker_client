const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"staging"',
  API_BASE_URL: '"https://slots-tracker-stage.herokuapp.com/"',
});
