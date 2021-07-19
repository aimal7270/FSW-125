const inventory = require('../inventory.json')
const express = require('express')
const clothesRouter = express.Router();

clothesRouter

    //clothes
    .get('/', (req, res)=>{
        const clothes = inventory.filter(cloth => cloth.type === "clothes")
        console.log(clothes)
        res.send(clothes)
    })

    //  find?name=banana
    .get('/find/', (req, res) => {
        const specific = req.query.name;
        const filteredClothes = inventory.filter(cloth => cloth.name === specific)
        res.send(filteredClothes)
    })

module.exports = clothesRouter