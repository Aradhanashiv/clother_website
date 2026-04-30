import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import { createToken } from '../config/token.js'

export const handleSignUp = async (req,res) => {
    try {
      const {name, email, password, mobileNumber} = req.body
      if(!name || !email || !password || !mobileNumber)  {
        return res.status(400).json({success:false, "message": "All Fields are Required"})
      }
      const isExistingUser = await userModel.findOne({email : email.toLowerCase()})
      if(isExistingUser){
        return res.status(409).json({success:false, "message": "User Already Exists"})
      }
      if(mobileNumber.length < 10){
      return res.status(400).json({success:false, "message": "Mobile Number is Not Valid"}) 
      }
      if(password.length < 6){
      return res.status(400).json({success:false, "message": "Password must be Atleast six character"}) 
      }
      
      const hashPassword = await bcrypt.hash(password, 10)
      const user = await userModel.create({
        name,
        email,
        password: hashPassword,
        mobileNumber
      })
      const token = createToken(user._id)   
      res.cookie("token" , token, {
        httpOnly: true,
        secure: true,
        maxAge: 7*24*60*60*1000,
        sameSite: "None"
      })
      return res.status(201).json({success:true, message:"User Created Successfully", user})
     
    } catch (error) {
      console.log('Error' , error);
      return res.status(500).json({success:false, msg: "SignUp Request Failed"})  
    }
}

export const handleSignIn = async (req,res) => {
    try {
      const {email, password} = req.body
      if( !email || !password )  {
        return res.status(400).json({success:false, "message": "All Fields are Required"})
      }
      const user = await userModel.findOne({email: email.trim().toLowerCase()})
      if(!user){
        return res.status(404).json({success:false, message: "Invalid Email or Password"})
      }
      const isValidPassword = await bcrypt.compare(password, user.password)
      if(!isValidPassword){
        return res.status(401).json({success:false, message: "Invalid Email or Password"})
      }
     const token = createToken(user._id)
        res.cookie("token" , token, {
          httpOnly: true,
          secure: true,
          maxAge: 7*24*60*60*1000,
          sameSite: "None"
        })
      return res.status(200).json({success:true, message:"User Signed In Successfully", user})
     
    } catch (error) {
      console.log('Error' , error);
      return res.status(500).json({success:false, msg: "Request fail for Signup"})  
    }
}

export const handleSignOut = (req,res) => {
  try {
    res.clearCookie("token" , {
      httpOnly : true,
      sameSite: 'strict',
      secure:true
    })
    return res.status(200).json({success: true, message:"User Deleted Successfully"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false, message:'SignOut Request Failed'})
  }
}

export const handleUserData = async (req,res) => {
  try {
    const userId = req.user
    if(!userId){
      return res.status(400).json({success:false, message: "User Not Found"})
    }
    const user = await userModel.findById(userId)
    if(!user){
      return res.status(400).json({success:false, message: "User Not Found"})
    }
    return res.status(200).json({success:true, message: 'User Data' , user})
  } catch (error) {
    console.log('Error' , error);
    return res.status(500).json({success:false, msg: "Request fail for fetching UserData"})  
  }
}