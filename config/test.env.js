const path = require('path');
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
console.log('In test.env');
console.log(prodEnv.API_BASE_URL);
module.exports = merge(prodEnv, {
  NODE_ENV: '"testing"',
  API_BASE_URL: '"https://slots-tracker-test.herokuapp.com"',
  verbose: true,
  testURL: 'http://localhost/',
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
});
console.log(prodEnv.API_BASE_URL);




// console.log(process.env);
// module.exports = {
// };
// console.log(process.env);
