import { v2 as cloudinary } from 'cloudinary'
import streamifier from 'streamifier'
import fs from 'fs'

const uploadtoCloudinary = async(fileBuffer) => {
   cloudinary.config({
      cloud_name : process.env.CLOUDINARY_NAME,
      api_key : process.env.CLOUDINARY_API_KEY,
      api_secret : process.env.CLOUDINARY_SECRET,
    });
    return new Promise((resolve,reject)=>{
       const stream = cloudinary.uploader.upload_stream(
      {folder: "products"},
       (error, result)=>{
        if(result) resolve(result.secure_url)
        else reject(error)  
       }
    ) 
    streamifier.createReadStream(fileBuffer).pipe(stream)
    })
   
}



export default uploadtoCloudinary