var express = require('express');
var router = express.Router();

// STEP-3: import AlbumModel
const AlbumModel = require('../models/Album.Model');

/* GET album page. */
router.get('/', function (req, res, next) {
    // STEP-7: (READ) Read a Document / Read a Record / Read a data
    AlbumModel.find({ }).then((data) => {
        console.log("Read: ", data);
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
   
    //res.render('index', { title: 'Album Get (List)' });
});

/* ADD album page. */
router.get('/add', function (req, res, next) {
    // CRUD Operations (Create, Read, Update, Delete) + Aggregate (Join) + All Read + All Delete
    // STEP-4: (CREATE) Create a Document / Insert a Record / Add a data
        //Create a new Album from AlbumModel(Clone)
        const newAlbum = new AlbumModel(
            {userId: 3, id: 101, title: 'My Album'}
        );
        //INSERT
        newAlbum.save().then((data) => {
            console.log(data);
            res.json(data);
        }).catch((err) => {
            console.log(err);
        });
    //res.render('index', { title: 'Album Added' });
});

/* EDIT album page. */
router.get('/edit', function (req, res, next) {
    // STEP-6: (UPDATE) Update a Document / Update a Record / Update a data
    AlbumModel.updateOne({ userId: '3' }, { title: 'My Album 444 Updated', id: 444 }).then((data) => {
        console.log("Updated: ", data);
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
    //res.render('index', { title: 'Album Edited' });
});

/* DELETE album page. */
router.get('/delete', function (req, res, next) {
    // STEP-5: (DELETE) Delete a Document / Delete a Record / Delete a data
    AlbumModel.deleteOne({ userId: '2' }).then((data) => {
        console.log("Deleted: ", data);
    }).catch((err) => {
        console.log(err);
    });
    res.render('index', { title: 'Album Deleted' });
});

/* GET All album page. */
router.get('/all', function (req, res, next) {
    // STEP-8: (READ) Read all Documents / Read all Records / Read all data
    AlbumModel.find({}).then((data) => {
        console.log("Read All: ", data);
    }).catch((err) => {
        console.log(err);
    });
    res.render('index', { title: 'Album Get (All)' });
});

/* DELETE All album page. */
router.get('/all/delete', function (req, res, next) {
    // STEP-9: (DELETE) Delete all Documents / Delete all Records / Delete all data
    AlbumModel.deleteMany({}).then((data) => {
        console.log("Deleted All: ", data);
    }).catch((err) => {
        console.log(err);
    });
    res.render('index', { title: 'Album Deleted (All)' });
});


module.exports = router;