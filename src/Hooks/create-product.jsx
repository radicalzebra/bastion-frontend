import React, { useState } from 'react'
import { useSelector } from 'react-redux'


export default  function useCreateProduct() {

   const [created,setCreated] = useState("Upload")
   const token = useSelector(state => state.login.token)

   async function createProduct(productObj) {
      console.log(productObj)
      console.log(token)

      setCreated("Loading...")

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bastion/api/products/`,{
         method:"POST",
         headers:{
            'Content-Type':"application/json",
            'Authorization': `Bearer ${token}`
         },
         body:JSON.stringify(productObj)
      })

      const resData = await response.json()
      if(resData.status === "success") {
         setCreated("success")
      } else {
         setCreated("Failed")
      }
   }



   return {
     createProduct : createProduct,
     created:created
   }



   
}
