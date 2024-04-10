import React, { useState } from 'react'
import api from '../components/Utilities/Api'
import { useSelector } from 'react-redux';

export default function useGetSoldProducts() {

   const token = useSelector(state => state.login.token)
   const {id} = useSelector(state => state.login.user)
   const [ordered,setOrdered] = useState(null)
   const [modifiedOrdered,setModifiedOrdered] = useState(null)
   const [loading,setLoading] = useState(false)
   const [increment,setIncrement] = useState(11)

   const getProducts = async () => {
      setLoading(true)
      const response = await api(`/bastion/api/purchases`,"GET", undefined , token)
      const filterOrdered = response.data.purchases.filter((el)=> el.product.seller.id === id)
      setLoading(false)
      setOrdered(filterOrdered)
      setModifiedOrdered(filterOrdered)
   }


   const searchHandler = (e) => {

     if(e.target.value !== "") {

        const filteredOrdered = ordered?.filter((el) => {
           return el.product.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
                  el.user.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
                  el.user.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
                  el._id.toLowerCase().includes(e.target.value.toLowerCase())
         })
         
        setModifiedOrdered(filteredOrdered)
      }  else {
         setModifiedOrdered(ordered)
      }
   }

   const moreButtonHandler = () => {
      setModifiedOrdered(ordered)
   }


   return {
      ordered,
      modifiedOrdered,
      loading,
      onBtnHandler:moreButtonHandler,
      getOrders:getProducts,
      searchHandler
   }
}
