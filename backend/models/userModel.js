import { model, Model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
       type: Number,
       required: true
    }
}, {timestamps: true}     
)

const User = model('User', userSchema)

export default User

 // role: {
    //     type: String,
    //     enum: ['admin' , 'user'],
    //     required: true
    // },
    // isOtpVerified: {
    //     type: Boolean,
    //     default: false
    // },
    // resetOtp: {
    //     type: String
    // },
    // otpExpires: {
    //     type:Date
    // } 