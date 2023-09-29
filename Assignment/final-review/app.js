const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());


const studentRouter = require('./routes/studentRouter');

app.use('/students', studentRouter);






mongoose.connect('mongodb://127.0.0.1:27017/final')
   .then(() => {
      app.listen(3000, () => console.log('listening on 3000'));
   });



