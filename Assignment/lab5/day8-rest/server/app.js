const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/productRouter');

//instatiation
const app = express();

//configuration



//middleware
app.use(cors());
app.use(express.json());
app.use('/products', productRouter);



//startup
app.listen(3000);