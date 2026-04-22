import "dotenv/config"
import express from 'express'
import {connectMongoDB} from './config/db.js'
import cors from 'cors'
import cookieParser from "cookie-parser"
import userRoute from './routes/userRoute.js'
import homeRoute from './routes/homeRoute.js'
import productRoute from './routes/productRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import searchRoute from './routes/searchRoute.js'


const app = express()
const port = process.env.PORT || 4001

app.use(cors({
    origin:true,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser()) 

app.use('/user' , userRoute)
app.use('/product' , productRoute)
app.use('/category' , categoryRoute)
app.use('/search', searchRoute)

connectMongoDB()
// app.listen(port, ()=>{
//     console.log(`server started at port:${port}`);
// })

export default app