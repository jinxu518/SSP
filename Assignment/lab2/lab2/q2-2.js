// use buffer
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./dog.jpg', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error');
    } else {
      res.setHeader('Content-Type', 'image/jpeg');
      res.end(data);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});