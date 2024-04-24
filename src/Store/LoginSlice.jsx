import { createSlice } from "@reduxjs/toolkit";
import { cartActions } from "./CartSlice";
import { getSoldProducts } from "./DashboardOverview";
import api from "../components/Utilities/Api";



const Login = createSlice({
   name:"login",
   initialState:{loggedIn:false, user:{} , purchased:{} , soldProductsInfo:{} , showForm:false , errMsg: false , errCode: 500, token:""},
   reducers:{
      login(state,action) {
         state.loggedIn = action.payload;
         console.log(state.loggedIn)
      },

      user(state,action) {
         state.user = action.payload;
         console.log(state.user,"lll")
      },

      setUpdatedUser(state,action) {
         state.user = action.payload
      },

      error(state,action) {
        state.errMsg = action.payload.message || "An Error Occured while logging in, check your email & password"
        state. errCode = action.payload.code || 500
        console.log(state.errMsg,state.errCode,action)
      },

      showLogin(state,action) {
         state.showForm = action.payload
      }, 

      setToken(state,action) {
         state.token = action.payload
      },

      setUserPurchases(state,action) {
         state.purchased = action.payload 
         console.log(action.payload)

      },

      setSoldProducts(state,action) {
         state.soldProductsInfo = action.payload
         console.log(state.soldProductsInfo)
      }
   }
})




export const loginUser = ({email,password}) => {


   return async (dispatch) => {

      const body = {
         email,
         password
      }

      const LoginUserResponse = await api("/bastion/api/users/login","POST",body,undefined)
      console.log(LoginUserResponse)



      if(LoginUserResponse.status === "fail") {
         console.log(LoginUserResponse)
         return  dispatch(Login.actions.error({message:LoginUserResponse.err,code:LoginUserResponse.errCode}))
      }

      
      const user = await LoginUserResponse.data.user
      const {cart} = user
      const token = await LoginUserResponse.token
      const cartWithId = user.cart?.map((el,i)=> el.id) || []
      const cartTotal = user.cart?.reduce((acc,el) => acc + Number(el.price), 0)
      const purchased = user.purchases

      dispatch(Login.actions.login(true))
      dispatch(Login.actions.user(user))
      dispatch(Login.actions.setToken(token))
      dispatch(cartActions.setCart(cartWithId))
      dispatch(cartActions.setDetailedUpdatedCart(cart))
      dispatch(cartActions.mutateCartTotal(cartTotal))
      dispatch(Login.actions.showLogin(false))
      dispatch(Login.actions.setUserPurchases(purchased))
      dispatch(getSoldProducts())

   }
}





export const {reducer:loginReducer , actions:loginActions } = Login