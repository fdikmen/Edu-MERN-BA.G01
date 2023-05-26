var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//import movie router
var movieRouter = require('./routes/movie.routes');
//import director router
var directorRouter = require('./routes/director.routes');

//db connection
require('./helpers/db.js');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//use movie router
app.use('/api/movies', movieRouter);
//use director router
app.use('/api/directors', directorRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  //res.json({status:err.code || 500, message:err.message});
  //console.log("gelen",err);
  res.render('error', { error: err });

});

module.exports = app;
