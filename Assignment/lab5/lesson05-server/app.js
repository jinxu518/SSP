const express = require('express');
const bookRouter = require('./routes/book');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
app.use('/books', bookRouter);

app.listen(3000, () => console.log('listening to 3000...'));