const express = require('express');
const Manage = express.Router();
const {v4: uuidv4} = require('uuid');
const fullInventory = require('../data');

Manage
    .get('/', (req, res, next)=>{
        res.status(200)
        res.send(fullInventory)
    })


    .post('/', (req, res, next) => {
        const newBook = req.body;
        newBook._id = uuidv4();
        fullInventory.push(newBook);

        res.status(201).send(newBook);
    })

    .delete('/:bookId', (req,res) =>{
        const bookId = req.params.bookId;
        const bookIndex = fullInventory.findIndex(oneBook => oneBook._id === bookId);
        fullInventory.splice(bookIndex, 1);

        res.send('Book Deleted')
    })

    .put('/:bookId', (req,res) =>{
        const bookId = req.params.bookId;
        const bookIndex = fullInventory.findIndex(oneBook => oneBook._id === bookId);
        Object.assign(fullInventory[bookIndex], req.body);
        req.body._id = uuidv4()
        res.status(201).send(req.body)
    })

    module.exports = Manage;