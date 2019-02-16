// server.js
const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 5000;

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(history());
app.listen(port);


