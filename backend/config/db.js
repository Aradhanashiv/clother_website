import mongoose from "mongoose"

export const connectMongoDB = async () => {
    try {
         await mongoose.connect(process.env.MONGODB_URL) 
         console.log("MongoDB Atlas Connected", mongoose.connection.host);
    } catch (error) {
        console.log('Error' , error);
    }
}


//Serverless function to upload on vercel

// let isConnected = false;
// export const connectMongoDB = async () =>{
//         if(isConnected) {
//             return;
//         }
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             dbName: "clother"
//         });
//         isConnected = true
//         console.log('MongoDB Atlas Database Connected Successfully');
//     } catch (error) {
//         console.log("Error Connecting Database" , error);
//         throw error
//     }
// }