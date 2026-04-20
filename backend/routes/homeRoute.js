import express from 'express'
import {autheticateUser} from '../middlewares/authenticate.js'

const route = express.Router()


// route.get('/' , autheticateUser, handleUserData)

export default route