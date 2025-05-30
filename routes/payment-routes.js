const express = require('express')
const authenticate = require('../middlewares/authenticate')
const payment = require('../constrollers/payment-constrollet')
const router = express.Router()
const upload = require('../middlewares/upload')


router.post('/payments', payment.payment)
router.post('/pay',upload.array("image",1), payment.paymentmats)
router.get('/getpayments', payment.getpayment)
router.put('/putstatuspayments', payment.putstatuspaymentbyid)
router.get('/transfers', payment.getpaymentmats)





module.exports = router