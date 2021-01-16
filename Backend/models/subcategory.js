const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const subcategorySchema = new mongoose.Schema({
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
    ,category:{
        type:ObjectId,
        ref:'Category',
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model('SubCategory',subcategorySchema)