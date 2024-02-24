import { createSlice } from "@reduxjs/toolkit";






const initialState = {touched : false }

const Cart = createSlice({
   name:"cart",
   initialState: initialState,
   reducers:{
      touchHandler(state,action) {
         // console.log("redux-cartSlice",state.touched)
         state.touched = action.payload ?? !state.touched  //very important implementatiom bro
      },

      addToCart(state,action) {
         // state.cart.unshift(action.payload)
         // console.log(state.cart,"added")
         let cart = action.payload.cart
         cart.unshift(action.payload.item)
         console.log(cart,"added")
      },

      removeFromCart(state,action) {
         // state.cart =  state.cart.filter((el,i) => el !== action.payload)  
         // console.log(state.cart,"removed")
         let cart = action.payload.cart
         cart =  cart.filter((el,i) => el !== action.payload.item)  
         console.log(cart,"removed")

      }
   }
})



export const updateCart = (item,userCart,action) => {
 

   return async (dispatch) => {

      let cart = [...userCart]


      if(action === "add") dispatch(Cart.actions.addToCart({cart,item}))
      if(action === "remove") dispatch(Cart.actions.removeFromCart({cart,item}))

      
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bastion/api/users/updateCart`,{
         method:"PUT",
         body: JSON.stringify(cart),
         headers:{
            'Content-Type':"application/json"
         },
         credentials: 'include'
      })
      
      console.log(document.cookie)
      const data = await response.json()
      console.log(data)
      
   }
}


export const { actions: cartActions, reducer: cartReducer } = Cart;
