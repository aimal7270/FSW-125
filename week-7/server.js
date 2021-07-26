const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(morgan('dev'))


const Search = (require('./Routes/Search'));
const Manage = (require('./Routes/InventoryManagment'));


app.use('/Search', Search );
app.use('/Manage', Manage);

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`App started on port terminal ${PORT}`)
})