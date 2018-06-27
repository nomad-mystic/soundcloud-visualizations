// depends
const express = require('express');
const router = express.Router();
const _ = require('lodash');


const genreController = require(`${process.cwd()}/api/controllers/genre.controller`);


/**
 * @author nomadmystics@gmail.com
 * @description Get track example
 * @param {string}
 * @param {callback}
 * @return void
 */


router.get('/genre/:genre', (req, res, next) => {
    console.log(req);
    console.log(req.params);

    let genre;

    if (!_.isEmpty(req.params)) {
        genre = req.params.genre;
    } else {
        genre = 'hip-hop';
    }

    genreController.getTracksByGenre(genre, req, res, next);

});

module.exports = router;
