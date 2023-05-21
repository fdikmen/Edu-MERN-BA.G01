//import express
const express = require('express');
//using router
const router = express.Router();

//import movie model
const MovieModel = require('../models/Movie.Model');

// .../api/movies/
//GET Movies
router.get('/', (req, res, next) => {
    const movies = MovieModel.find({});
    movies.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}
);

//ADD Movie
router.post('/', (req, res, next) => {
    /*const newMovie = 
    {
        title: req.body.title,
        category: req.body.category,
        country: req.body.country,
        year: req.body.year,
        imdb_score: req.body.imdb_score

    }
   const movie = new MovieModel(newMovie);*/

    const movie = new MovieModel(req.body);

    movie.save().then((data) => {
        res.json({ status: 'OK' ,
        data:data,
        message:'Movie added successfully'});
    }
    ).catch((err) => {
        res.json(err);
    }
    );
});


//Export router
module.exports = router;