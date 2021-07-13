const express = require('express');
const bookRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let books = [
    {title: 'Devil And The White City', author: 'Erik Larson', genre: 'science fiction',_id: uuidv4() },
    {title: 'A Curse So Dark and Lonely', author: 'Bridgit', genre: 'Young Adult', _id: uuidv4()},
    {title: 'Id Tell You I Love You But Then Id have to Kill You', author: 'Ally Carter', genre: 'Young Adult', _id: uuidv4()},
    {title: 'Shiver', author: 'Maggie Stievater', genre: 'Young Adult', _id: uuidv4()}
];

bookRouter
    .get('/', (req, res) => {
        res.send(books)
    })

    .get('book/:bookId', (req,res) => {
        const bookId = req.params.bookId;
        const singularBook = books.find(book => book._id === bookId);
        res.send(singularBook);
    })

    .get('/search/genre', (req, res) => {
        const bookGenre = req.query.genre;
        const filteredBooks = books.filter(book => book.genre === bookGenre)
        res.send(filteredBooks)
    })

    .post('/', (req, res) => {
        const newBook = req.body;
        newBook.id = uuidv4(); 
        books.push(newBook);

        res.send(newBook);
    })
    .delete('/:bookId', (req, res) => {
        const bookId = req.params.bookId;
        const bookIndex = books.findIndex(book => book._id === bookId);
        books.splice(bookIndex, 1);

        res.send('Resource successfully deleted')
    })

    .put('/:bookId', (req, res) => {
        const bookId = req.params.bookId;
        const bookIndex = books.findIndex(book => book._id === bookId);
        Object.assign(books[bookIndex], req.body);

        res.send(`Resource updated`)
    })

module.exports = bookRouter;