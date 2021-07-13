const express = require('express');
const morgan = require('morgan')

const bookRouter = require('./Routes/bookRouter');
const tvRouter = require('./Routes/tvRouter');

const app = express();
const PORT = 9000;


app.use(express.json())
app.use(morgan('dev'))

app.use('/books', bookRouter)
app.use('/tvShows', tvRouter)


app.listen(PORT, () => {
    console.log(`App started on port terminal ${PORT}`)
})