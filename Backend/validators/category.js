const {check} = require('express-validator')


exports.categoryValidation = [
    check('name').not().isEmpty().withMessage('Category name is require'),
    check('name').isLength({min:3}).withMessage('Category name must be minimum 3 characters'),
    check('name').isLength({max:50}).withMessage('Category name must be maximum 50 characters'),
    check('image').not().isEmpty().withMessage('Image is require')
]
