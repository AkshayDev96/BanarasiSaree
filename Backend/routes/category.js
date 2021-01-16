const express = require('express')
const router = express.Router()

const {MakeCategory,GetAll,RemoveCategory,GetCategoryById,UpdateCategory} = require('../controllers/category')
const {runValidation} = require('../validators')
const {categoryValidation} = require('../validators/category')

router.post('/category',categoryValidation,runValidation,MakeCategory)
router.get('/categories',GetAll)
router.get('/category/:id',GetCategoryById)
router.delete('/category/:id',RemoveCategory)
router.put('/category/:id',categoryValidation,runValidation,UpdateCategory)

module.exports = router