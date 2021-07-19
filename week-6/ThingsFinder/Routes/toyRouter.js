const inventory = require('../inventory.json')
const express = require('express');
const toyRouter = express.Router();

toyRouter

    //toys
    .get('/', (req, res)=>{
        const toys = inventory.filter(toy => toy.type === "toy")
        console.log(toys)
        res.send(toys)
    })

    //  find?name=banana
    .get('/find/', (req, res, next) => {
        const specific = req.query.name;
        const filteredToy = inventory.filter(toy => toy.name === specific)
        res.send(filteredToy)
    })

module.exports = toyRouter