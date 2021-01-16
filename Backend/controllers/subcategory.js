const SubCategory = require('../models/subcategory')
const {errorHandler} = require('../helpers/dbErrorHandler')
const slugify = require('slugify')

exports.Add = (req,res)=>{
    const {category_id} = req.params
    const {name,image} = req.body
    const slug = slugify(name).toLowerCase()

    const subcategory = new SubCategory({category:category_id,name,image,slug})
    subcategory.save((err,result)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            message:'SubCategory created!',
            success:true
      })
    })
}


exports.GetAll =(req,res)=>{
    SubCategory.find({})
    .populate('category', '_id name image')
    .exec((err,subcategories)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            subcategories,
            success:true
      })
    })
}

exports.Delete=(req,res)=>{
    const {subcategory_id} = req.params
    SubCategory.findByIdAndRemove({_id:subcategory_id})
    .exec((err,result)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            message:'Subcategory is removed',
            success:true
      })
    })
}

exports.GetSubCategoryById = (req,res)=>{
    const {subcategory_id} = req.params
    SubCategory.findById({_id:subcategory_id}).exec((err,subcategory)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            subcategory,
            success:true
        })
    })
}

exports.UpdateSubCategory = (req,res)=>{
    const {subcategory_id} = req.params
    const {name,image,category} = req.body
    SubCategory.findByIdAndUpdate({_id:subcategory_id},{category:category,name,image})
    .exec((err,data)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            message:'SubCategory is updated!',
            success:true
        })
    })
}