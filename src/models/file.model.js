'use strict'

const mongoose = require('mongoose')

const DOCUMENT_NAME = 'File'
const COLLECTION_NAME = 'Files'

// Declare the Schema of the Mongo model
const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    code:{
        type:String,
        required:true,
        unique:true,
    },
    link:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, fileSchema);