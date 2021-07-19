const express = require('express');
const morgan = require('morgan')

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(morgan('dev'))

const bounties = (require('./Routes/bounties'));

app.use('/bounty', bounties)

app. listen(PORT, () => {
    console.log(`App started on port terminal ${PORT}`)
})