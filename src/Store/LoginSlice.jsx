import { createSlice } from "@reduxjs/toolkit";
import { useMutation } from "@tanstack/react-query";





const Login = createSlice({
   name:"login",
   initialState:{loggedIn:false, user:{} , showForm:false},
   reducers:{
      login(state,action) {
         state.loggedIn = action.payload;
         console.log(state.loggedIn)
      },

      user(state,action) {
         state.user = action.payload;
         console.log(state.user,"lll")
      },


      showLogin(state) {
         state.showForm = true
      }
   }
})




export const loginUser = ({email,password}) => {


   return async (dispatch) => {

      const body = {
         email,
         password
      }

      const response = await fetch(`https://bastion-backend-dev-nxhk.3.us-1.fl0.io/bastion/api/users/login`, {
         method:"POST",
         body: JSON.stringify(body),
         headers:{
            'Content-Type':"application/json"
         }
      })

      const resData = await response.json()
      const data = await resData.data.user


      dispatch(Login.actions.login(true))
      dispatch(Login.actions.user(data))
      

   }
}




export const {reducer:loginReducer , actions:loginActions} = Login