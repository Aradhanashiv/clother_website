import mongoose from 'mongoose'
import productModel from '../models/productModel.js'
import uploadtoCloudinary from '../config/cloudinary.js'
import { json } from 'express'

export const handleAddProduct = async (req,res) => {
      try {
          const {productName, price, description, material, sizes, category} = req.body
          let productImages = []
          productImages = await Promise.all(
            req.files.map(file => uploadtoCloudinary(file.buffer))
          )

          let Sizes = JSON.parse(sizes)
          if(!Array.isArray(Sizes)){
            return res.status(400).json({success:false, message:'Sizes is not Array'})
          }
        
          if(!productName || productImages.length === 0 || price == null ||!description  || !material){
            return res.status(400).JSON({success:false, message: 'All Fields are Required'})
          } 

          if( price <= 0 ){
            return res.status(400).json({success:false, message: 'Price is Not Valid'})  
          }

          for(const s of Sizes){
            if(!s.size || s.stock == null || s.stock< 0){
            return res.status(400).json({success:false, message: 'stock should not be Null or less then 0'})   
            }
          }   
          if(!mongoose.Types.ObjectId.isValid(category)){
          return res.status(403).json({success:false, message: 'Invalid Category'})   
          }
          const ExistingProduct = await productModel.findOne({productName: productName.trim()}) 
          if(ExistingProduct){
            return res.status(403).json({success:false, message: 'Product Already Exists'})   
          }
          const product = await productModel.create({
            productName, 
            productImage : productImages, 
            price,
            category, 
            description,
            sizes: Sizes, 
            material,
          })
          return res.status(201).json({success:true, message:"Product Created Successfully", product:product})
       } catch (error) {
          console.log(error);
          if(error.code === 11000){
          return res.status(500).json({success:false, message:"Product Already Exists"})  
        }
      return res.status(500).json({success:false, message:"Internal Server Error"})  
      }
  }

export const handleEditProduct = async (req,res) => {
      try {
          const productId = req.params.id
          if(!productId){
             return res.status(404).json({success:false, message:'Product Not Found'})
          }
           
          const product = await productModel.findById(productId)
          if(!product){
            return res.status(404).json({success:false, message:'Product Not Found'}) 
          }
          const updatedFields = {}
          if(req.body.productName !== undefined)updatedFields.productName = req.body.productName;
          if(req.body.price !== undefined){
            if(req.body.price <= 0 ){
            return res.status(400).json({success:false, message: 'Price is Not Valid'})  
            }
            updatedFields.price = req.body.price
            } 
           if(req.body.description !== undefined) updatedFields.description = req.body.description   
           if(req.body.material !== undefined) updatedFields.material = req.body.material 
           if(req.body.sizes !== undefined) {
            const Sizes = typeof req.body.sizes === "string" ? JSON.parse(req.body.sizes) : req.body.sizes
            if(!Array.isArray(Sizes)){
              return res.status(400).json({message: "Sizes must be valid Array"})
            }
            for(const s of Sizes){
              if(!s.size || s.stock == null || s.stock < 0){
                return res.status(400).json({message: "Each Size must have valid Stock"})
              }
            }
            updatedFields.sizes = Sizes
           } 
           if(req.body.category !== undefined){
             if(!mongoose.Types.ObjectId.isValid(req.body.category)){
              return res.status(403).json({success:false, message: 'Invalid Category'})   
            }
            updatedFields.category = req.body.category
           }
           
            if(req.files && req.files.length > 0){
            const productImages = await Promise.all(
            req.files.map(file => uploadtoCloudinary(file.buffer))
            )}
            updatedFields.productImage = productImages
           
          const updatedProduct = await productModel.findByIdAndUpdate(productId , updatedFields, {new:true, runValidators:true})
         if(!updatedProduct){
          return res.status(404).json({success:false, message:'Product Not Found'})
         }
        return res.status(200).json({success:true, message:"Product Updated Successfully", product:updatedProduct})
      } catch (error) {
          console.log(error)
      return res.status(500).json({success:false, message:"Internal Server Error"})  
      }
  }

export const handleAllProducts = async(req,res) => {
  try {
    const allProducts = await productModel.find().sort({createdAt: -1})
    console.log(allProducts);
    res.status(200).json({success: true, message: "all products" , data: allProducts})
  } catch (error) {
    console.log(error);
     return res.status(500).json({success:false, message:"Internal Server Error"})  
  }
}

export const handleGetProductDetails = async(req,res) => {
  try {
    const productId = req.params.id
    if(!productId || !mongoose.Types.ObjectId.isValid(productId)){
      return res.status(404).json({success:false, message: "Invalid Product ID"})
    }
    const product = await productModel.findById(productId).populate("category")
    if(!product){
      return res.status(404).json({success:false, message: "Product Not Found"})  
    }
      return res.status(200).json({success:true, message: "Product Details Fetched Successfully" , product: product})
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({success:false, message: "Internal Server Error"})
  }
}

