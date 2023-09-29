const dns = require('dns');

const domainName = 'www.miu.edu';

dns.resolve4(domainName, (err, addresses) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log(`IP Address is ${domainName}: ${addresses[0]}`);
  }
});