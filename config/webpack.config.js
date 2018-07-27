const path = require('path');

const webpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config');

webpackConfig['dev'].resolve.alias = {
  "@env": path.resolve(`./src/env/env.ts`)
}
webpackConfig['prod'].resolve.alias = {
  "@env": path.resolve(`./src/env/env.prod.ts`)
}
