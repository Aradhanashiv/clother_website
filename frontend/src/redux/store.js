import {configureStore} from '@reduxjs/toolkit'
import productSlice from './productSlice'
import categortSlice from './categorySlice'
import cartSlice from './cartSlice'
import userSlice from './userSlice'

export const store = configureStore({
     reducer:{
        product : productSlice,
        category: categortSlice,
        cart: cartSlice,
        user: userSlice
     }
})