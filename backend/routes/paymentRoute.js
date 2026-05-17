import express from 'express'
import {createOrder, verifyOrder} from '../controllers/paymentController.js'
const route = express.Router()


route.post('/create-order' , createOrder)
route.post('/verify-order' , verifyOrder)


export default route