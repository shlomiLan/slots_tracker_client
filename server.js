const cors = require('cors');
const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 5000;

app = express();
app.use(history());
app.use(serveStatic(__dirname + "/dist"));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(cors());
app.options('*', cors());

app.listen(port);
console.log('server started '+ port);
