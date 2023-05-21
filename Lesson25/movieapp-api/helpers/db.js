//import mongoose
const mongoose = require('mongoose');

//connect to mongodb
const mongodbURI = 'mongodb+srv://fdikmen:PB7TtBv4IKsGm5c5@dbcloud.2cu5vhs.mongodb.net/';
const mongodbName = 'MovieAppDB';
const connection =  mongoose.connect(mongodbURI+mongodbName);

//check mongodb connection
connection.then((db) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('MongoDB connection error: ', err);
});

//export mongoose
//module.exports = () => {connection}

module.exports = connection;