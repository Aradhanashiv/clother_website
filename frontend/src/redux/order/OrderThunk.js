import { createAsyncThunk } from "@reduxjs/toolkit";




export const createRazorpayOrder = createAsyncThunk(
    "order/createRazorpayOrder",
    async (amount, thunkAPI) => {
        try {
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/order/create-order`, { amount }  );
         return data.order
        } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)