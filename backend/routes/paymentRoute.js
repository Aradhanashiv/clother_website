import express from 'express'
const route = express.Router()

route.post('/create-order' , createOrder)

export default route