import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { notifyReducer } from "./NotifySlice";

const store = configureStore({
   reducer: {
      cart:cartReducer,
      notify:notifyReducer
   }
})

export default store