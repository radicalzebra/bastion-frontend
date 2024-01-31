import React, { useEffect, useState } from 'react'
import Card from '../components/Utilities/Card'
import ProductCarosal from '../components/UI/ProductCarosal'
import hero from "../assets/headerImg/hero.jpg"
import hero2 from "../assets/headerImg/hero2.jpg"
import ProductDescription from './../components/UI/ProductDescription';
import {ProdCard} from '../components/UI/productCard'
import Carousal from '../components/Utilities/Carousal'
import { NavLink, useLoaderData, useParams,useRouteLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'





 




const Product = () => {

const {id} = useParams()



const { data:productData , isPending } = useQuery({
  queryKey:["product",id],
  queryFn: async () => {
      const response = await fetch(`https://bastion-backend-dev-nxhk.3.us-1.fl0.io/bastion/api/products/${id}`)
      const resData = await response.json()
      return resData.data.product
  },
  staleTime:3000
})
  

  return (
    productData &&
      <Card className="flex flex-col gap-32 mb-8">
        <Card className="flex gap-16  mt-32 mb-8 mx-16">
          <ProductCarosal className="w-1/2" images={[...productData.images]}/>
          <ProductDescription className="w-1/2 justify-self-center" data={productData}/>
        </Card>

        <Card className="text-black my-12 px-24 tracking-wide font-medium text-2xl flex flex-col gap-3 bg-red-40 ">

             <div  className="self-start flex w-full justify-between items-center">
               <p className='text-3xl font-extrabold uppercase'>You might like</p>
               <NavLink to="/products/brands" className={"text-sm hover:underline text-gray-500 font-semibold"}>View all</NavLink>
             </div> 


             <Carousal className="">
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
             </Carousal>
        </Card>

    </Card>
  )

}

export default Product