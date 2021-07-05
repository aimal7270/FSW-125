const express = require('express');
const app = express();
const morgan = require('morgan');

const todoRouter = require('./todoList');

const PORT = 3000;

app.use (express.json());
app.use(morgan('dev'));

app.use('/todoList', todoRouter);

app.listen(PORT, ()=> {
    console.log(`App started on port terminal ${PORT}`)
})