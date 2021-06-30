const express = require('express');
const tvRouter = express.Router();
const {v4: uuidv4} = require('uuid');


let tvShows = [
    {title: 'Lucifer', channel: 'Netflix', _id: uuidv4()},
    {title: 'FairyTail', channel: 'Hulu', _id: uuidv4()},
    {title: 'Loki', channel: 'Disney+', _id:uuidv4()},
    {title: 'ICarly', channel: 'HBOMax', _id: uuidv4()}
]


tvRouter.get('/', (req, res) => {
    res.send(tvShows)
});

tvRouter.post('/', (req, res) => {
    const tvShow = req.body;
    tvShow._id = uuidv4();
    tvShows.push(tvShow);

    res.send(`Successfully added ${tvShow.title} to the database`);
})

module.exports = tvRouter;