import { createSlice } from "@reduxjs/toolkit";


const Login = createSlice({
   name:"login",
   initialState:{loggedIn:false, user:{} , showForm:false , errMsg: false , errCode: 500},
   reducers:{
      login(state,action) {
         state.loggedIn = action.payload;
         console.log(state.loggedIn)
      },

      user(state,action) {
         state.user = action.payload;
         console.log(state.user,"lll")
      },

      error(state,action) {
        state.errMsg = action.payload.message || "An Error Occured while logging in, check your email & password"
        state. errCode = action.payload.code || 500
        console.log(state.errMsg,state.errCode,action)
      },

      showLogin(state,action) {
         state.showForm = action.payload
      }
   }
})




export const loginUser = ({email,password}) => {


   return async (dispatch) => {

      const body = {
         email,
         password
      }

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bastion/api/users/login`, {
         method:"POST",
         body: JSON.stringify(body),
         headers:{
            'Content-Type':"application/json"
         }
      })

      const resData = await response.json()
      console.log(resData)
      document.cookie = `jwt=${resData.token}`;


      if(!response.ok || resData.status === "fail") {
         console.log(resData)
         return  dispatch(Login.actions.error({message:resData.err,code:resData.errCode}))
      }

      const data = await resData.data.user
      console.log(data)

      dispatch(Login.actions.login(true))
      dispatch(Login.actions.user(data))
      dispatch(Login.actions.showLogin(false))
      

   }
}




export const {reducer:loginReducer , actions:loginActions } = Login