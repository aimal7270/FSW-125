const express = require('express');
const bounties = express.Router();
const {v4: uuidv4} = require('uuid');

const PORT = 3000;
bounties.use(express.json())

let bountyList = [
    {firstName : 'John', lastName :'Green', living : true, type : 'Sith', _id: uuidv4()},
    {firstName :"Hank", lastName :"Green", living : true, type : "Jedi", _id: uuidv4()},
    {firstName : "Bethany", lastName : "Johnson", living : false, type : "Sith", _id: uuidv4()}
]
bounties
    .get('/', (req, res) => {
        res.send(bountyList);
    })

    .post('/', (req, res) => {
         const bounty = req.body;
         bounty._id = uuidv4();
        bountyList.push(bounty);

         res.send(`${bounty.firstName} ${bounty.lastName} has been cataloged`);
    });

module.exports = bounties;