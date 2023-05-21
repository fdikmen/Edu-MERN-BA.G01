// import mongoose
const mongoose = require('mongoose');
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
module.exports = mongoose.model('Album', AlbumSchema);