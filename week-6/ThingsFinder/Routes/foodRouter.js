const inventory = require('../inventory.json')
const express = require('express')
const foodRouter = express.Router();

foodRouter

    //fruit
    .get('/', (req, res)=>{
        const foods = inventory.filter(food => food.type === "food")
        console.log(foods)
        res.send(foods)
    })

    //  find?name=banana
    .get('/find/', (req, res) => {
        const specific = req.query.name;
        const filteredFood = inventory.filter(food => food.name === specific)
        res.send(filteredFood)
    })

module.exports = foodRouter