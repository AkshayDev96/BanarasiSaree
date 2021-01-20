const User = require('../models/user')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const {errorHandler} = require('../helpers/dbErrorHandler')

require('dotenv').config()

exports.signup = (req,res)=>{
    User.findOne({email:req.body.email}).exec((err,user)=>{
        if(user){
            return res.status(400).json({
                  error:'Email is taken'
            })
        }

        const {email,password} = req.body
        //creating new user
        let newUser = new User({
            email,password
        })
        newUser.save((err,success)=>{
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                })
            }
            res.status(200).json({
                message:'Signup success! Please signin'
            })
        })
    })
};

exports.signin = (req,res)=>{
    const {email,password} = req.body
    // check if user exists
    User.findOne({email}).exec((err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error:'User with that email does not exist, Please sign up.',
                success:false
            })
        }
        // authenticate
        if(!user.authenticate(password)){
            return res.status(400).json({
                error:"Invalid password.",
                success:false
            })
        }
        // generate a token and send to client
            const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
            res.cookie('token',token,{expiresIn:'1d'})
            const {_id,name,email} = user
            return res.status(200).json({
                token,user: {_id,name,email}
            })
        })
}

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
    userProperty: "user", 
  });