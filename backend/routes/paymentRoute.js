import express from 'express'
import {createOrder} from '../controllers/paymentController.js'
const route = express.Router()


route.post('/create-order' , createOrder)

export default route