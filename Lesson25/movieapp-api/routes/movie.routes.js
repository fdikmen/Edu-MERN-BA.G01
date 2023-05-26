//import mongoose
const mongoose = require('mongoose');
//import express
const express = require('express');
//using router
const router = express.Router();

//import movie model
const MovieModel = require('../models/Movie.Model');

// .../api/movies/
//GET Movies
router.get('/', (req, res, next) => {
    //const movies = MovieModel.find({ "imdb_score": 6}); // GET all movies from MongoDB with filter => imdb_score = 6
    const movies = MovieModel.find(); // GET all movies from MongoDB without filter
    movies.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}
);

// .../api/movies/listWithDirector
//GET Movies with Director
router.get('/listWithDirector', (req, res, next) => {
    const queryResult = MovieModel.aggregate([
        {
            $lookup: {
                from: 'directors',
                localField: 'director_id',
                foreignField: '_id',
                as: 'director'
            }
        }]);
    queryResult
        .then((data) => { res.json(data); })
        .catch((err) => { res.json(err); });
    // Get Director by ID
    router.get('/:director_id', function (req, res, next) {
        const queryResult = DirectorModel.findById(req.params.director_id)
        queryResult
            .then((result) => { res.json({ status: 200, message: "Director", director: result }); })
            .catch((error) => { res.json({ status: 400, message: "Error", error: error }); });
    });
});


    //ADD Movie
    router.post('/', (req, res, next) => {
        /*const newMovie = 
        {
            title: req.body.title,
            category: req.body.category,
            country: req.body.country,
            year: req.body.year,
            imdb_score: req.body.imdb_score,
            director_id: req.body.director_id
    
        }
       const movie = new MovieModel(newMovie);*/

        // Convert director_id to ObjectId
        // const director_id = mongoose.Types.ObjectId(req.body.director_id); 


        const newMovie = new MovieModel(req.body);

        // Save to MongoDB
        newMovie.save().then((movie) => {
            res.json({
                status: 'OK',
                data: movie,
                message: 'Movie added successfully'
            });
        }
        ).catch((err) => {
            res.json(err);
        }
        );
    });

    // .../api/movies/top10
    //GET Top 10 Movies
    router.get('/top10', (req, res, next) => {
        const movies = MovieModel.find().limit(10).sort({ imdb_score: -1 }); // GET top 10 movies from MongoDB
        movies.then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });

    // .../api/movies/:movie_id
    //GET Movie by ID
    router.get('/:movie_id', (req, res, next) => {
        const movie = MovieModel.findById(req.params.movie_id); // GET movie from MongoDB by ID
        movie.then((data) => {
            if (!data)
                res.json({ message: 'The movie was not found.', status: 99 });
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    });

    // .../api/movies/:movie_id
    //PUT Movie by ID
    router.put('/:movie_id', (req, res, next) => {
        MovieModel.findByIdAndUpdate(req.params.movie_id, req.body, { new: true })
            .then((movie) => {
                if (!movie)
                    res.json({ message: 'The movie was not found.', status: 99 });
                res.json({ status: 1, message: 'Movie updated successfully', data: movie });
            }).catch((err) => {
                next(err);
            });
    });

    // .../api/movies/:movie_id
    //DELETE Movie by ID
    router.delete('/:movie_id', (req, res, next) => {
        MovieModel.findByIdAndRemove(req.params.movie_id)
            .then((movie) => {
                if (!movie)
                    res.json({ message: 'The movie was not found.', status: 99 });
                res.json({ status: 1, message: 'Movie deleted successfully', data: movie });
            }).catch((err) => {
                next(err);
            });
    });

    // .../api/movies/between/:start_year/:end_year
    //GET Movies between two years
    router.get('/between/:start_year/:end_year', (req, res, next) => {
        const { start_year, end_year } = req.params;
        const movies = MovieModel.find(
            {   // start_year <= year <= end_year    
                year: { "$gte": parseInt(start_year), "$lte": parseInt(end_year) }
                // "$gte" => greater than or equal to, "$lte" => less than or equal to
            }
        ); // GET movies from MongoDB between two years
        movies.then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });




    //Export router
    module.exports = router;