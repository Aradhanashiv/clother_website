import express from 'express'
import { handleAddCategories, handleAllCategories,handleGetProductsCategoryWise } from '../controllers/categoryController.js'
import upload from '../middlewares/multer.js'

const route = express.Router()

route.post('/add-category' ,upload.array("image", 5), handleAddCategories)
route.get('/all-category' , handleAllCategories)
route.get('/' , handleGetProductsCategoryWise)



export default route