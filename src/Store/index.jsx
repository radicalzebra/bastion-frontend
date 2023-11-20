import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { notifyReducer } from "./NotifySlice";
import { loginReducer } from "./LoginSlice";

const store = configureStore({
   reducer: {
      cart:cartReducer,
      notify:notifyReducer,
      login:loginReducer
   }
})

export default store