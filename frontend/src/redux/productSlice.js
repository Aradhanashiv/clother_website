import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../App";


//ASYNC THUNK

export const fetchProductsByCategory = createAsyncThunk(
   "product/fetchByCategory" ,
   async (category, thunkAPI) => {
      try{
         const res = await axios.get(`${serverUrl}/category?category=${category}`)
      return {
         products: res.data.products,
         category
       }
      }
    catch(error){
      return thunkAPI.rejectWithValue(
         error.response?.data?.message || "failed to fetch Products"
      )
    }
   }
)

export const fetchAllProducts = createAsyncThunk(
   "product/fetchAllProducts",
   async (_ , thunkAPI) => {
      try{
         const res = await axios.get(`${serverUrl}/product/all-products`)
         return {
            products:res.data.data
         }
      }
      catch(error){
         return thunkAPI.rejectWithValue(
            error.response?.data?.message || "Failed to fetch All Products"
         )
      }
   }
)


const productSlice = createSlice({
    name: "product",

    initialState: {
        myProductsData: [],
        allProducts: [],
        currentCategory: null,
        loadingCategory: false,
        loadingAll: false,
        errorCategory: null,
        error: null
    },

    reducers: {
      clearProducts: (state) => {
        state.myProductsData = [];
        state.currentCategory = null;
        state.allProducts = [];
        state.errorCategory = null;
        state.error = null;
      }
   },
   extraReducers: (builder)=>{
      builder
      .addCase(fetchProductsByCategory.pending , (state)=>{
          state.loadingCategory = true;
          state.errorCategory = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state,action)=>{
         state.loadingCategory = false;
         state.myProductsData = action.payload.products;
          state.currentCategory = action.payload.category;
      })
      .addCase(fetchProductsByCategory.rejected, (state,action)=>{
         state.loadingCategory = false;
         state.errorCategory = action.payload;
      })
      .addCase(fetchAllProducts.pending , (state)=>{
          state.loadingAll = true;
          state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state,action)=>{
          console.log("Fetched all products:", action.payload.products);
         state.loadingAll = false;
         state.allProducts = action.payload.products;
      })
      .addCase(fetchAllProducts.rejected, (state,action)=>{
         state.loadingAll = false;
         state.error = action.payload;
      })
   }
})

export const {clearProducts} = productSlice.actions
export default productSlice.reducer