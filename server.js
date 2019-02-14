// const http = require('http');
// const fs = require('fs');
// const httpPort = 5000;
//
// http.createServer((req, res) => {
//   fs.readFile('index.htm', 'utf-8', (err, content) => {
//     if (err) {
//       console.log('We cannot open "index.htm" file.')
//     }
//
//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//     });
//
//     res.end(content)
//   })
// }).listen(httpPort, "0.0.0.0", () => {
//   console.log('Server listening on: http://localhost:%s', httpPort)
// });
//

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
