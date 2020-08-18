const mongoose = require('mongoose')
const Schema = mongoose.Schema


//create schema and model

const marioCharSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    weight: Number
})
const marioChar = mongoose.model('mariochar',marioCharSchema)// marioChar is a collection
module.exports = marioChar 