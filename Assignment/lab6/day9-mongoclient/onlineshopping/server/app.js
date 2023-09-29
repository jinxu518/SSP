const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/productRouter');
const { createDB } = require('./utils/database');

//instatiation
const app = express();

//configuration



//middleware
app.use(cors());
app.use(express.json());
app.use('/products', productRouter);



//startup
createDB(() => {
   app.listen(3000, () => console.log('listening on 3000'));
});



