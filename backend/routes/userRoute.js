import express from 'express'
import {handleSignUp, handleSignIn, handleSignOut, handleUserData, handleAddUserAddress, handleDeleteUserAddress} from '../controllers/userController.js'
import {autheticateUser} from '../middlewares/authenticate.js'
const route = express.Router()

route.post('/signup' , handleSignUp)
route.post('/signin' , handleSignIn)
route.post('/signout' , handleSignOut)

route.get('/user-data' ,autheticateUser, handleUserData)
route.post('/add-user-address' , autheticateUser, handleAddUserAddress)
route.delete('/delete-address/:addressId', autheticateUser, handleDeleteUserAddress)

export default route