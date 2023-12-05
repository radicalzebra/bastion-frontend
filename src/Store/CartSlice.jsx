import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
   name:"cart",
   initialState: {touched : false},
   reducers:{
      touchHandler : (state,action) => {
         // console.log("redux-cartSlice",state.touched)
         state.touched = action.payload ?? !state.touched  //very important implementatiom broooo
      }
   }
})

export const { actions: cartActions, reducer: cartReducer } = Cart;
