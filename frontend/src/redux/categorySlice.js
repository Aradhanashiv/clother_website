import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",

    initialState: {
        categoryData: []
    },

    reducers:{ setCategoryData:(state,action)=> {
        state.categoryData = action.payload
    }}
})

export const {setCategoryData} = categorySlice.actions
export default categorySlice.reducer