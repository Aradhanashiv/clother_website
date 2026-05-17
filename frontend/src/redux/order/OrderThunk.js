import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const createRazorpayOrder = createAsyncThunk(
    "order/createRazorpayOrder",
    async (amount, thunkAPI) => {
        try {
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/order/create-order`, { amount }  );
         return data.order
        } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)

export const verifyPayment = createAsyncThunk(
    "order/verifyPayment",
    async(paymentData, thunkAPI) => {
        try {
            const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/order/verify-order` , {paymentData})
        } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
        }
    }
)