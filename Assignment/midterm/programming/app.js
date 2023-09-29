const express = require('express');

const path = require('path');
const fs = require('fs');

const app = express();


//place code below

app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '..','index.html')));

function appendToDatabase(data) {
  fs.appendFile('database.txt', data, (err) => {
    if (err) {
      console.error('Error saving data:', err);
    } else {
      console.log('Data saved successfully');
    }
  });
}

function validateInputs(firstname, lastname) {
  return firstname && lastname;
}

app.get('/', (req, res) => {
    fs.createReadStream(path.join(__dirname,'..','index.html')).pipe(res);
});

app.post('/signup', (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;

  if (!validateInputs(firstname, lastname)) {
    res.send('Firstname and lastname are required');
  } else {
    const userData = `${firstname}=${lastname},`;
    appendToDatabase(userData);
    res.send('Saved successfully');
  }
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
