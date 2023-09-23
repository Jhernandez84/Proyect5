const express=require('express')
const router= express.Router()

const{ newProduct, getProducts, getProductById,  updateProduct, deleteProduct}=require('../controllers/Product.controller')
const auth = require('../middlewares/auth')

router.get('/', getProducts)
router.get('/:_id', getProductById)
router.post('/', newProduct) // si recibo el método post, iré a users SignUp
router.put('/',updateProduct) 
router.delete('/',deleteProduct)
// router.delete('/:_id',auth,deleteUserById)

module.exports=router;