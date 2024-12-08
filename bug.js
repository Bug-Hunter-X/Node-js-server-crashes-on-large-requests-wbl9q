const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request is very large
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  });
}).listen(3000);