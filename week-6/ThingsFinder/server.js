const express = require('express');
const morgan = require('morgan')

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(morgan('dev'));

const foodRouter = require('./Routes/foodRouter');
const toyRouter = require('./Routes/toyRouter');
const clothesRouter = require('./Routes/clothesRouter');

app.use('/food', foodRouter);
app.use('/toys', toyRouter);
app.use('/clothes', clothesRouter);



app.listen(PORT, () =>{
    console.log(`App started on port ${PORT}`)
})