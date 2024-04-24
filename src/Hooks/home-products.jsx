import { useEffect, useState } from 'react'
import api from '../components/Utilities/Api'

export default function useHomeProducts() {

   const [mostRated,setMostRated]= useState(null)
   const [mostBought,setMostBought]= useState(null)
   const [products,setProducts] = useState(null)

   const getProducts = async ()  =>  {
     const response = await api(`/bastion/api/products`,"GET",undefined,undefined)
     setProducts([...response.data.products])
     setMostRated(response.data.products.sort((a,b) => b.rating - a.rating).slice(0,11))
     setMostBought(response.data.products.sort((a,b) => b.ratingQuantity - a.ratingQuantity).slice(0,11))
   }

   useEffect(()=>{
     getProducts()
   },[])


  return {
    mostRated,
    mostBought,
    products
  }
}
