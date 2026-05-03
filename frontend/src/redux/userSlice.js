import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
    name: "user",

    initialState: {
        userData: {
            name: "",
            email: "",
            mobileNumber: "",
            addresses: []
        },

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
       addAddress: (state, action) => {
       state.userData.addresses = action.payload;
}
    }
})

export const {setUserData, clearUserData,addAddress} = userSlice.actions
export default userSlice.reducer