const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new BrotliPlugin(),
    ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
