const express = require('express')
const router = express.Router()
const {signup,signin,requireSignin} = require('../controllers/auth')

const {runValidation} = require('../validators')
const {userSigninValidator} = require('../validators/auth')

router.post('/signup',signup)
router.post('/signin',userSigninValidator,runValidation,signin)
//test
router.get('/user-route',requireSignin,(req,res)=>{
    if(req.user){
        res.json({
            ok:true
        })
    }else{
        res.json({
            ok:false
        })
    }
    
})

module.exports = router