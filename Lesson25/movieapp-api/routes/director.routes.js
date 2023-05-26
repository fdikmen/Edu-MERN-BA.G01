var express = require('express');
var router = express.Router();

// Models
const DirectorModel = require('../models/Director.Model');

// Get All Directors
router.get('/', function (req, res, next) {
    const queryResult = DirectorModel.find()
    //const queryResult = DirectorModel.find({name:req.query.name})

    queryResult
        .then((result) => { res.json({ status: 200, message: "All Directors", directors: result }); })
        .catch((error) => { res.json({ status: 400, message: "Error", error: error }); });
});
// Get All Directors with Movies
router.get('/WithMovies', function (req, res, next) {
    const queryResult = DirectorModel.aggregate([
        {//JOIN with Movies
            $lookup: {
                from: 'movies',
                localField: '_id',
                foreignField: 'director_id',
                as: 'movies'
            }
        },
        {// Column Selection
            $project: {
                _id: 1,//FALSE
                name: 1,
                surname: true,//1
                createdAt: true,
                'movies.title': 1,
                'movies.imdb_score': true
            }
        },
        {
            $unwind: {
                path: '$movies',
                preserveNullAndEmptyArrays: false
            },
        },
        {
            $group: {
                _id: {
                    isim: '$name',
                    soyisim: '$surname',
                    tarih: '$createdAt'
                },
                movies: {
                    $push: '$movies'
                }
            }
        }
    ])



    queryResult
        .then((result) => { res.json({ status: 200, message: "All Directors with Movies", directors: result }); })
        .catch((error) => { res.json({ status: 400, message: "Error", error: error }); });
});

// Get Director by ID
router.get('/:director_id', function (req, res, next) {
    const queryResult = DirectorModel.findById(req.params.director_id)
    queryResult
        .then((result) => { res.json({ status: 200, message: "Director", director: result }); })
        .catch((error) => { res.json({ status: 400, message: "Error", error: error }); });
});

// Update Director by ID
router.put('/:director_id', function (req, res, next) {
    const queryResult =  DirectorModel.findByIdAndUpdate(req.params.director_id, req.body, { new: true })
    queryResult
        .then((result) => { res.json({ status: 200, message: "Updated Director", director: result }); })
        .catch((error) => { res.json({ status: 400, message: "Error", error: error }); });
});

// Remove/Delete Director by ID
router.delete('/:director_id', function (req, res, next) {
    const queryResult = DirectorModel.findByIdAndRemove(req.params.director_id)
    queryResult
        .then((result) => { res.json({ status: 200, message: "Deleted Director", director: result }); })
        .catch((error) => { res.json({ status: 400, message: "Error", error: error }); });
});

// Add Director
router.post('/', function (req, res, next) {
    const newDirector = new DirectorModel(req.body);
    newDirector.save()
        .then((result) => { res.json({ status: 200, message: "Added Director", newMovie: result }); })
        .catch((error) => { res.json({ status: 400, message: "Error", error: error }); });
    //.catch((error)=>{next({status:400, message:"Error",error:error});});


});

module.exports = router;