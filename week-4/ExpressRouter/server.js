const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());;

const bounties = (require('./bounties'));

app.use('/bounty', bounties)

app. listen(PORT, () => {
    console.log(`App started on port terminal ${PORT}`)
})