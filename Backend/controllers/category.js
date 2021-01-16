const Category = require('../models/category')
const SubCategory = require('../models/subcategory')
const slugify = require('slugify')
const {errorHandler} = require('../helpers/dbErrorHandler')

exports.MakeCategory = (req,res)=>{
    const {name,image} = req.body
    const slug = slugify(name).toLowerCase()
    const category = new Category({name,image,slug})
    category.save((err,data)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            message:'Category created!',
            success:true
      })
    })
}

exports.GetAll = (req,res)=>{
    Category.find({}).exec((err,data)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            categories:data,
            success:true
      })
    })
}

exports.RemoveCategory = async (req,res)=>{
    const {id} = req.params
    if(id){
       await Category.findByIdAndRemove({_id:id}).exec((err,result)=>{
            if(err){
                return res.status(400).json({
                      error:errorHandler(err),
                      success:false
                })
            }
            SubCategory.deleteMany({category:id}).exec((err,s)=>{
                if(err){
                    return res.status(400).json({
                          error:errorHandler(err),
                          success:false
                    })
                }
                res.status(200).json({
                    message:'Category delete successfully',
                    success:true
            })
          })
        })
    }else{
        return res.status(400).json({
            error:'category id is required',
            success:false
      })
    }
}


exports.GetCategoryById = (req,res)=>{
    const {id} = req.params
    Category.findById({_id:id}).exec((err,category)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            category,
            success:true
        })
    })
}

exports.UpdateCategory = (req,res)=>{
    const {id} = req.params
    const {name,image} = req.body
    Category.findByIdAndUpdate({_id:id},{name,image}).exec((err,category)=>{
        if(err){
            return res.status(400).json({
                  error:errorHandler(err),
                  success:false
            })
        }
        res.status(200).json({
            message:'Category is updated!',
            success:true
        })
    })
}