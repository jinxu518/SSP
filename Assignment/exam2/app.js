const express = require('express');
const mongoose = require('mongoose');
const app = express();
const studentsRoutes = require('./routes/students');


app.use(express.json());
app.use('/students', studentsRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/finalExam')
   .then(() => {
      app.listen(3000, () => console.log('listening on 3000'));
   });
