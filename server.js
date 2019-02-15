// const http = require('http');
// const fs = require('fs');
// const httpPort = process.env.PORT || 3000;
//
// http.createServer((req, res) => {
//   console.log('req is:');
//   console.log(req);
//   console.log('res is:');
//   console.log(res);
//   fs.readFile('.index.html', 'utf-8', (err, content) => {
//     console.log('content is:');
//     console.log(content);
//     if (err) {
//       console.log('err is: ' + err);
//       console.log('We cannot open "index.html" file.')
//     }
//
//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//     });
//
//     res.end(content)
//   })
// }).listen(httpPort, () => {
//   console.log('Server listening on port: %s', httpPort)
// });


// const express = require('express');
// const serveStatic = require("serve-static");
// const path = require('path');
// app = express();
// app.use(serveStatic(path.join(__dirname, 'dist')));
// const port = process.env.PORT || 3000;
// app.listen(port);
//
// //
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //     console.log(`Our app is running on port ${ PORT }`);
// // });


/**************************************************************************
IMPORTS
**************************************************************************/


var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
var serveStatic = require('serve-static');


/**************************************************************************
EXPRESS SERVER
**************************************************************************/


var app = express();

app.use(history({verbose: true}));
app.use(serveStatic(path.join(__dirname, '/dist')));

var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server started at http://localhost:5000')
});
