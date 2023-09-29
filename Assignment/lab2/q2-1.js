// use stream
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const imageStream = fs.createReadStream('./dog.jpg');
    res.setHeader('Content-Type', 'image/jpeg');
    imageStream.pipe(res);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});