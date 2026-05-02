import "dotenv/config"
import express from 'express'
import {connectMongoDB} from './config/db.js'
import cors from 'cors'
import cookieParser from "cookie-parser"
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import searchRoute from './routes/searchRoute.js'
import paymentRoute from './routes/paymentRoute.js'


const app = express()
const port = process.env.PORT || 4001

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser()) 

app.use('/user' , userRoute)
app.use('/product' , productRoute)
app.use('/category' , categoryRoute)
app.use('/search', searchRoute)
app.use('/payment', paymentRoute)

connectMongoDB()
app.listen(port, ()=>{
    console.log(`server started at port:${port}`);
})

