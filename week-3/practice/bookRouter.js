const express = require('express');
const bookRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let books = [
    {title: 'Devil And The White City', author: 'Erik Larson', _id: uuidv4() },
    {title: 'A Curse So Dark and Lonely', author: 'Bridgit',  _id: uuidv4()},
    {title: 'Id Tell You I Love You But Then Id have to Kill You', author: 'Ally Carter',  _id: uuidv4()},
    {title: 'Shiver', author: 'Maggie Stievater',  _id: uuidv4()}
];

bookRouter.get('/', (req, res) => {
    res.send(books)
});

bookRouter.post('/', (req, res) => {
    const newBook = req.body;
    newBook.id = uuidv4(); 
    books.push(newBook);

    res.send(`Successfully added ${newBook.title} to the database`);
});

module.exports = bookRouter;