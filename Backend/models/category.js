const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
   name:{
        type:String,
        required:true,
        max:50
    },image:{
        type:String,
        required:true,
        max:50
    },
    slug:{
        type:String,
        unique:true,
        index:true
    }
},{timestamps:true})

module.exports = mongoose.model('Category',categorySchema)