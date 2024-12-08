const http = require('http');
const stream = require('stream');

const server = http.createServer((req, res) => {
  // Use a stream to handle large requests
  let body = new stream.PassThrough();
  req.pipe(body);

  body.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  });

  //Handle errors
  req.on('error',(err)=>{console.error(err)});
}).listen(3000);