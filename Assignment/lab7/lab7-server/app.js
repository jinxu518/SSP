const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bookRouter = require('./routes/productRouter');

//instatiation
const app = express();

//configuration



//middleware
app.use(cors());
app.use(express.json());
app.use('/books', bookRouter);



//startup
mongoose.connect('mongodb://127.0.0.1:27017/lab7')
   .then(() => {
      app.listen(3000, () => console.log('listening on 3000'));
   });

app.use((err, req, res, next) => {
   console.log(err.message);
})

