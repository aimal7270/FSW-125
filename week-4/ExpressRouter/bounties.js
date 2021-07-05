const express = require('express');
const bounties = express.Router();
const {v4: uuidv4} = require('uuid');

bounties.use(express.json())

let bountyList = [
    {firstName : 'John', lastName :'Green', living : true, type : 'Sith', _id: uuidv4()},
    {firstName :"Hank", lastName :"Green", living : true, type : "Jedi", _id: uuidv4()},
    {firstName : "Bethany", lastName : "Johnson", living : false, type : "Sith", _id: uuidv4()}
]

bounties
    .get('/', (req, res) =>{
        res.send(bountyList);
    })

    .post('/', (req, res) => {
        const bounty = req.body;
        bounty._id = uuidv4();
        bountyList.push(bounty);

        res.send(`${bounty.firstName} ${bounty.lastName} has been cataloged`);
    })

    .delete('/:bountyId', (req,res) =>{
        const bountyId = req.params.bountyId;
        const bountyIndex = bountyList.findIndex(oneBounty => oneBounty._id === bountyId);
        bountyList.splice(bountyIndex, 1);

        res.send('Bounty Deleted')
    })

    .put('/:bountyId', (req,res) =>{
        const bountyId = req.params.bountyId;
        const bountyIndex = bountyList.findIndex(oneBounty => oneBounty._id === bountyId);
        Object.assign(bountyList[bountyIndex], req.body);
        res.send('Bounty Updated')
    })

    module.exports = bounties;