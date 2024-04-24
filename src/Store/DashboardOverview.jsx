import { createSlice } from '@reduxjs/toolkit';
import api from '../components/Utilities/Api';

const Overview = createSlice({
   name:"overview",
   initialState : {ordered:null,modifiedOrdered:null , dashInfo:{}},
   reducers: {
     setDashInfo(state,action) {
       state.dashInfo = action.payload
       console.log(action.payload,"oo")
     },

     setOrdered(state,action) {
       state.ordered = action.payload
       console.log(action.payload,"pp")

     }, 

     setModifiedOrdered(state,action) {
       state.modifiedOrdered = action.payload
       console.log(action.payload,"xx")

     }, 
   }
})


export const getSoldProducts = () => {

   return async (dispatch,getState) => {

      const state = getState()
      const token = state.login.token
      const {id,products} = state.login.user

      const response = await api(`/bastion/api/purchases`,"GET", undefined , token)
      const filterOrdered = response.data.purchases.filter((el)=> el.product.seller.id === id)

      console.log(filterOrdered)

      const TotalSales = filterOrdered.reduce((acc,el)=> {
        return acc + el.price
      },0)

      const Men = filterOrdered.reduce((acc,el)=> {
        if(el.product.consumer === "men")  return acc + 1
        return acc
      },0)

      const Women = filterOrdered.reduce((acc,el)=> {
        if(el.product.consumer === "women") return acc + 1
        return acc
      },0)

      const Kids = filterOrdered.reduce((acc,el)=> {
        if(el.product.consumer === "kids") return acc + 1
        return acc
      },0)

      const TotalVisitors = new Set(filterOrdered.map((el,i)=> {
         console.log(el.user.email)
         return el.user.email
      })).size 

      const dashInfo ={
            sales : TotalSales,
            orders: filterOrdered.length,
            visitors: TotalVisitors,
            men: Men,
            women: Women,
            kids: Kids,
            numProducts:products.length
      }


      dispatch(Overview.actions.setOrdered(filterOrdered))
      dispatch(Overview.actions.setModifiedOrdered(filterOrdered))
      dispatch(Overview.actions.setDashInfo(dashInfo))
   }
}

export const {actions:overviewActions, reducer:overviewReducer} = Overview