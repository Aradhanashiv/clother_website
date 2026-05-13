import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createRazorpayOrder = createAsyncThunk(
    "payment/createOrder",
    async (amount) => {
     const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/payment/create-order` , {amount})
     return data
    }
)