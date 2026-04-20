import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
    name: "user",

    initialState: {
        userData: null,
        loading: true
    },

    reducers: {
        setUserData: (state,action) => {
            state.userData = action.payload
            state.loading = false
        },
        clearUserData: (state) => {
         state.userData = null;
         state.loading = false;
       },
    }
})

export const {setUserData, clearUserData} = userSlice.actions
export default userSlice.reducer