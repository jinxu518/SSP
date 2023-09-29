const express = require('express');

const app = express();

app.get('/users', (req, res, next) => {
    console.log(1);
    next();
});

app.post('/users', (req, res, next) => {
    console.log(2);
    next();
});

app.use('/users',(req, res, next) => {
    console.log(3);
    res.status(200).send('Try later');
});

app.listen(3000);