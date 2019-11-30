const BrotliPlugin = require('brotli-webpack-plugin');
const packagesData = require('./package.json');

module.exports = {
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      const temp = definitions;
      temp[0]['process.env'].PACKAGE_VERSION = JSON.stringify(packagesData.version);
      config.module.rules.delete('eslint');
      return temp;
    });
  },
  configureWebpack: {
    plugins: (module.exports.plugins || []).concat([
      new BrotliPlugin(),
    ]),
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/firebase-messaging-sw.js',
    },
  },
};
