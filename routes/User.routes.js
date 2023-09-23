// acá quedará la ruta para todo lo que llegue como dominio/users
const express=require('express')
const router= express.Router()

const{ signup, getUsers, updateUser, deleteUser, login, getUserById, deleteUserById}=require('../controllers/User.controller')
const auth = require('../middlewares/auth')

router.get('/', getUsers)
router.post('/',signup) // si recibo el método post, iré a users SignUp
router.put('/',updateUser) 
router.delete('/',deleteUser)
router.post('/login',login)
router.get('/:_id',auth,getUserById)
router.delete('/:_id',auth,deleteUserById)

module.exports=router;