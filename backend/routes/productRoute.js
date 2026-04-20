import express from 'express'
import {handleAddProduct, handleAllProducts, handleEditProduct,handleGetProductDetails} from '../controllers/productController.js'
import upload from '../middlewares/multer.js'
const route = express.Router()

route.post('/add-product', upload.array("productImage", 5) ,handleAddProduct)
route.patch('/update-product/:id', upload.array("productImage", 5) ,handleEditProduct)
route.get('/all-products' , handleAllProducts)
route.get('/product-details/:id' , handleGetProductDetails)

export default route