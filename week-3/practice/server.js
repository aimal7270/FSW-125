const express = require('express');
const app = express();
const { v4:uuidv4} = require('uuid');

const bookRouter = require('./bookRouter');
const tvRouter = require('./tvRouter');

const PORT = 3000;


app.use(express.json())

app.use('/books', bookRouter)
app.use('/tvShows', tvRouter)


app.listen(PORT, () => {
    console.log(`App started on port terminal ${PORT}`)
})