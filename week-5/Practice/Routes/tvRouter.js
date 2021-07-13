const express = require('express');
const tvRouter = express.Router();
const {v4: uuidv4} = require('uuid');


let tvShows = [
    {title: 'Lucifer', channel: 'Netflix', genre: 'Comedy', _id: uuidv4()},
    {title: 'FairyTail', channel: 'Hulu', genre: 'anime',_id: uuidv4()},
    {title: 'Loki', channel: 'Disney+', genre: 'Superhero',_id:uuidv4()},
    {title: 'ICarly', channel: 'HBOMax',genre: 'Comedy', _id: uuidv4()}
]


tvRouter
    .get('/', (req, res) => {
        res.send(tvShows)
    })
    .get('/:showId', (req,res) => {
        const showId = req.params.showId;
        const singularShow = tvShows.find(show => show._id === showId);
        res.send(singularShow);
    })
    .get('/search/genre', (req, res) => {
        const tvGenre = req.query.genre;
        const filteredshows = tvShows.filter(show => show.genre === tvGenre)
        res.send(filteredshows)
    })
    .post('/', (req, res) => {
        const tvShow = req.body;
        tvShow._id = uuidv4();
        tvShows.push(tvShow);

        res.send(`Successfully added ${tvShow.title} to the database`);
    })
    .delete('/:showId', (req, res) => {
        const showId = req.params.showId;
        const showIndex = tvShows.findIndex(show => show._id === showId);
        tvShows.splice(showIndex, 1);

        res.send('Resource successfully deleted')
    })

    .put('/:showId', (req, res) => {
        const showId = req.params.showId;
        const showIndex = tvShows.findIndex(show => show._id === showId);
        const updatedShow = Object.assign(tvShows[showIndex], req.body);

        res.send(`Resource updated`)
    })

module.exports = tvRouter;