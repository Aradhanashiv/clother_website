import mongoose from "mongoose"

export const connectMongoDB = async () => {
    // const isConnected = true
    try {
        //  if(isConnected) {return}
         await mongoose.connect(process.env.MONGODB_URL) 
        //  isConnected = true
         console.log("MongoDB Atlas Connected", mongoose.connection.host);
    } catch (error) {
        console.log('Error' , error);
    }
}