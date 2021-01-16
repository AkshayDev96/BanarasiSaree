const {check} = require('express-validator')


exports.userSigninValidator = [
    check('email').not().isEmpty().withMessage('Email is require'),
    check('email').isEmail().withMessage('Email must be a valid email address'),
    check('password').not().isEmpty().withMessage('Password is required'),
    check('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
]