import mongoose from "mongoose";
import productModel from '../models/productModel.js'
import uploadtoCloudinary from "../config/cloudinary.js";
import categoryModel from '../models/categoryModel.js'

export const handleAddCategories = async (req,res) => {
   try {
    const {categoryName} = req.body
    
    let categoryImage = []
    categoryImage = await Promise.all(req.files.map((image) => (
        uploadtoCloudinary(image.buffer)
     )))

     if(!categoryName){
        return res.status(400).json({success: false, message: 'All fields are Required'})
     }
     
      if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Category image is required"
      });
    }
    
     const isCategoryExists = await categoryModel.findOne({categoryName:categoryName.trim()})
     if(isCategoryExists){
        return res.status(409).json({success:false, message:'Category Already Exists'})
     }
     const category = await categoryModel.create({
        categoryName,
        image:categoryImage
     })
     return res.status(200).json({success:true,message:'Category Created Successfully', category: category})
   } catch (error) {
    console.log(error);
    if(error.code === 11000)
     return res.status(500).json({success:false, message:'Category Already Exists'})
   }
    return res.status(500).json({success:false, message:'Internal Server Error'})
}

export const handleAllCategories = async (req,res) => {
   try {
     const allCategories = await categoryModel.find()
     console.log(allCategories);
     return res.status(200).json({success:true, message:"All Categories Fetched successfully", category:allCategories})
   } catch (error) {
     console.log(error);
     return res.status(500).json({success:false, message:"Internal Server Error"})  
  }
}

export const handleGetProductsCategoryWise = async(req,res) => {
  try {
    const {category} = req.query
     console.log("CATEGORY:", category);
    if(!category){
      return res.status(400).json({success:false, message:"Category is Required"})
    }
   const categoryname = await categoryModel.findOne({categoryName:category})
    if(!categoryname){
      return res.status(400).json({success:false, message:"Category Not Found "})
    }
    console.log("CATEGORY DOC:", categoryname);
   const products =await productModel.find({category: categoryname._id}).populate('category', "categoryName")
  return res.status(200).json({success:true , products})
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false, message:"Internal Server Error"})
  }
}