const cors = require('cors');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const history = require('connect-history-api-fallback');

const port = process.env.PORT || 8080;

const app = express();
app.use(history());

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(cors());
app.options('*', cors());

app.listen(port);
console.log(`server started ${port}`);

app.use('/', expressStaticGzip(`${__dirname}/dist`, {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz',
  }],
  orderPreference: ['br'],
}));
