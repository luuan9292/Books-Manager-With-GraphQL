//The Author Schema
//This Schema is the schema of mongoDB not GraphQL

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//No need to define type of id because Atlas will be auto generate id
const authorSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', authorSchema);