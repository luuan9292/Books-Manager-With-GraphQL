//The Book Schema
//This Schema is the schema of mongoDB not GraphQL

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//No need to define type of id because Atlas will be auto generate id
const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);
