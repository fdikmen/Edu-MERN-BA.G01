//import mongoose
const mongoose = require('mongoose');
//using schema
const Schema = mongoose.Schema;

//create movie schema
const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true, 'The field `{PATH}` is required.'],
        maxlength: [50, '`{PATH}` field (`{VALUE}`), must be less than ({MAXLENGTH}) characters.'],
        minlength: [5, '`{PATH}` field (`{VALUE}`), must be more than ({MINLENGTH}) characters.']
    },
    category: String,
    country: {type: String,default: 'Turkey'},
    year: {
        type: Number,
        max: 2200,
        min: [1900, '`{PATH}` field (`{VALUE}`), must be more than ({MIN}).']
    },
    imdb_score: {type: Number,max: 10,min: 0},
    createdAt: {type: Date,default: Date.now}
});

//export movie schema
module.exports = mongoose.model('movie', MovieSchema);
