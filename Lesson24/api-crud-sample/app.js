var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// STEP-1: import mongoose
const mongoose = require('mongoose');

// STEP-2: connect to MongoDB
//Set up default mongoose connection
const mongoDBURL = 'mongodb+srv://fdikmen:PB7TtBv4IKsGm5c5@dbcloud.2cu5vhs.mongodb.net/';
const mongoDBName = 'CustomDB';

mongoose.connect(mongoDBURL+mongoDBName).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Not Connected to MongoDB ERROR! ', err);
});

// STEP-X: Custom Events
// Control to MongoDB Connection
// eventEmitter.on('eventName',callbackFunction) --> eventEmitter.emit('eventName')
// eventEmitter.once('eventName',callbackFunction) --> eventEmitter.emit('eventName')

mongoose.connection.on('connected', () => {
  console.log('Mongoose Connected to ' + mongoDBName + ' on ' + mongoDBURL);
});
mongoose.connection.on('error', (err) => {
  console.log('Mongoose Connection Error: ' + err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose Disconnected');
});

// STEP-3.1: Create a Schema
// Create a collection(TABLE)-Schema
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  userId: Number,
  id: Number,
  title: String
});
// STEP-3.2: Create a Model
// Create a model
const AlbumModel = mongoose.model('Album', AlbumSchema);

// CRUD Operations (Create, Read, Update, Delete) + Aggregate (Join) + All Read + All Delete
// STEP-4: (CREATE) Create a Document / Insert a Record / Add a data
const addAlbum = (_newAlbum) => {
  //Create a new Album from AlbumModel(Clone)
  const newAlbum = new AlbumModel(_newAlbum);
  //INSERT
  newAlbum.save().then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });
};
/*
addAlbum({userId: 2, id: 101, title: 'My Album'});
addAlbum({userId: 3, id: 103, title: 'My Album 2'});
addAlbum({userId: 4, id: 104, title: 'My Album 3'});
*/

// STEP-5: (DELETE) Delete a Document / Delete a Record / Delete a data
AlbumModel.deleteOne({userId: '2'}).then((data) => {
  console.log("Deleted: ", data);
}).catch((err) => {
  console.log(err);
});

// STEP-6: (UPDATE) Update a Document / Update a Record / Update a data
AlbumModel.updateOne({userId: '3'}, {title: 'My Album 444 Updated',id:444}).then((data) => {
  console.log("Updated: ", data);
}).catch((err) => {
  console.log(err);
});

// STEP-7: (READ) Read a Document / Read a Record / Read a data
AlbumModel.find({userId: '4'}).then((data) => {
  console.log("Read: ", data);
}).catch((err) => {
  console.log(err);
});


// STEP-8: (READ) Read all Documents / Read all Records / Read all data
AlbumModel.find({}).then((data) => {
  console.log("Read All: ", data);
}).catch((err) => {
  console.log(err);
});

// STEP-9: (DELETE) Delete all Documents / Delete all Records / Delete all data
/*
AlbumModel.deleteMany({}).then((data) => {
  console.log("Deleted All: ", data);
}).catch((err) => {
  console.log(err);
});
*/

// STEP-10: JOIN  Users and Albums
// Create a collection(TABLE)-Schema
const UserSchema = new Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String
    }
  },
  phone: String,
  website: String,
  company: {name: String,
    catchPhrase: String,
    bs: String
  }
});
// Create a model
const UserModel = mongoose.model('User', UserSchema);

// Aggregate - Join
UserModel.aggregate([
  {
    $lookup: {
      from: 'albums',
      localField: 'id',
      foreignField: 'userId',
      as: 'userAlbumsTable'
    }
  }
]).then((data) => {
  console.log("User Albums: ", data);
}).catch((err) => {
  console.log(err);
});



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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
