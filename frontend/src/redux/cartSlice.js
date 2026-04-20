import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",

    initialState: {
        products: [],
        totalQuantiy: 0
    },

    reducers: { 

    addtoCart:(state, action)=> {
        const product = action.payload
        const ExistingProduct = state.products.find( i => i._id === product._id)
       if(ExistingProduct){
         ExistingProduct.quantity += 1
       }else{
        state.products.push({...product, quantity:1})
       }
       state.totalQuantiy += 1
    },

    IncreaseItemQuantity: (state, action) => {
      const item = state.products.find(
      (item) => item._id === action.payload)
      if(item.quantity < 10){
      item.quantity += 1
     }
    
   },

   DecreaseQuantity: (state, action) => {
    const item = state.products.find(
      (item) => item._id === action.payload
    )
    if(item){
      if(item.quantity > 1){
        item.quantity -= 1;
      }
    }
   },

   removeFromCart: (state, action) => {
    state.products = state.products.filter(
      (item) => item._id !== action.payload
    )
    state.totalQuantiy -= 1
   }
      
    }
})

export const {addtoCart, removeFromCart,IncreaseItemQuantity, DecreaseQuantity} = cartSlice.actions
export default cartSlice.reducer