import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../components/Utilities/Api'
import { useParams } from 'react-router-dom'


export default  function useCreateProduct() {

   const  {specify} = useParams()
   const [created,setCreated] = useState("Upload")
   const [specificProduct,setSpecificProduct] = useState(specify === undefined)
   const token = useSelector(state => state.login.token)

   async function createProduct(productObj) {

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

   
   async function getSpecificData() {
      const res = await api(`/bastion/api/products/${specify}`,"GET")
      setSpecificProduct(res.data.product)
   }
   
   useEffect(()=>{
      if(specify !== undefined) getSpecificData() 
   },[])


   return {
     createProduct : createProduct,
     created:created,
     specificProduct,
   }



   
}
