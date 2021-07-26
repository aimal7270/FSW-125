const fullInventory = require('../data')
const express = require('express')
const Search = express.Router();

Search
    .get('/', (req, res) => {
        console.log('Server Active')
        res.send('Server Active')
    })

    
    .get('/byTitle/', (req, res) => {
        const specific = req.query.Title;
        const byTitle = fullInventory.filter(book => book.Title === specific)
        res.status(200).send(byTitle)
    })
    .get('/byGenre/', (req, res) => {
        const specific = req.query.Genre;
        const byGenre = fullInventory.filter(book => book.Genre.includes(specific))
        res.status(200).send(byGenre)
    })
    .get('/byAuthor/', (req, res) => {
        const specific = req.query.Author;
        const byAuthor = fullInventory.filter(book => book.Author === specific)
        res.status(200).send(byAuthor)
    })
    .get('/Available/', (req,res)=>{
        const Available = fullInventory.filter(book => book.CheckedOut !== true);
        res.status(200).send(Available)
    })
    .get('/:bookId', (req, res, next) => {
        const bookId = req.params.bookId;
        const byId = fullInventory.find(book => book._id === bookId);

        if (!byId){
            const error = new Error('This item was not found');
            return next(error);
        }
        res.status(200).send(byId)
    })

module.exports = Search