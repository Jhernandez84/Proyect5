const express = require('express')
const { createPayment, paymentApproved,paymentPending, paymentFailed } = require('../controllers/Payment.controller')
const router = express.Router()



router.get('/',(req,res)=>{
    res.json({
      message:'ruta payment'
  })
  })

router.post('/create-payment',createPayment)

router.post('/payment-approved',paymentApproved)

router.post('/payment-pending',paymentPending)

router.post('/payment-failed',paymentFailed)

module.exports =router