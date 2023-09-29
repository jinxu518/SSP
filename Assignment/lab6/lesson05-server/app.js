const express = require('express');
const cors = require('cors');

const bookRouter = require('./routes/book');

const { createDB } = require('./utils/database');

const app = express();


app.use(cors());
app.use(express.json());
app.use('/books', bookRouter);


createDB(() => {
    app.listen(3000, () => console.log('listening on 3000'));
 });
 