const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.createReadStream('index.html').pipe(res);
  } else if (req.url === '/submit' && req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
       const formData = new URLSearchParams(data);
       const firstName = formData.get('firstname');
       const lastName = formData.get('lastname');
 
       const post = `FirstName: ${firstName} LastName: ${lastName}`;
       const fileStream = fs.createWriteStream(path.join(__dirname,'request_logs.txt'));
 
       fileStream.write(post, err => {
         if (err) {
           res.end('Error: Failed to save the blog post.');
         } else {
           res.end('Data saved successfully');
         }
       });
     });
   } else {
     res.end('Page not found');
   }
}).listen(3000, () => console.log('server is on 3000'));
