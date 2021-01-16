const express = require('express')
const router = express.Router()

const {Add,GetAll,Delete,GetSubCategoryById,UpdateSubCategory} = require('../controllers/subcategory')
const {runValidation} = require('../validators')
const {categoryValidation} = require('../validators/category')

router.post('/subcategory/:category_id',categoryValidation,runValidation,Add)
router.get('/subcategories',GetAll)
router.get('/subcategory/:subcategory_id',GetSubCategoryById)
router.delete('/subcategory/:subcategory_id',Delete)
router.put('/subcategory/:subcategory_id',UpdateSubCategory)

module.exports = router