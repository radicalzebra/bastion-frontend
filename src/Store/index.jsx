import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { notifyReducer } from "./NotifySlice";
import { loginReducer } from "./LoginSlice";
import { searchReducer } from "./SearchSlice";

const store = configureStore({
   reducer: {
      cart:cartReducer,
      notify:notifyReducer,
      login:loginReducer,
      search:searchReducer
   }
})

export default store