const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"test"',
  API_BASE_URL: '"google.com"',
});
