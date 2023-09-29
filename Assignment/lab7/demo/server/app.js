const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRouter = require('./routes/productRouter');
// const { createDB, closeConnection } = require('./utils/database');

//instatiation
const app = express();

//configuration



//middleware
app.use(cors());
app.use(express.json());
app.use('/products', productRouter);



//startup
mongoose.connect('mongodb://127.0.0.1:27017/onlineshopping')
   .then(() => {
      app.listen(3000, () => console.log('listening on 3000'));
   });

app.use((err, req, res, next) => {
   console.log(err.message);
})

