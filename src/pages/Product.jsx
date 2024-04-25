import React, { useEffect, useState } from 'react'
import Card from '../components/Utilities/Card'
import ProductCarosal from '../components/UI/ProductCarosal'
import ProductDescription from './../components/UI/ProductDescription';
import {ProdCard} from '../components/UI/ProductCard'
import Carousal from '../components/Utilities/Carousal'
import { NavLink, useLoaderData, useParams,useRouteLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useHomeProducts from '../Hooks/home-products'
import loadingUi from "../assets/navlogos/loading2.gif"


const Product = () => {

const {id} = useParams()
const {products} = useHomeProducts()



const { data:productData , isFetching } = useQuery({
  queryKey:["product",id],
  queryFn: async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bastion/api/products/${id}`)
    const resData = await response.json()
    return resData.data.product
  },
  staleTime:3000
})
  

return (
  <div className='relative  h-screen'>
    {isFetching && <img className='h-16 w-16 absolute top-1/3 right-1/2 translate-x-1/2' src={loadingUi}/> }
    {productData && !isFetching && 
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
                      {products?.filter((el,i) => el.brand === productData.brand)
                                .map((el,i)=> {
                                  return <ProdCard className="shadow-sm  p-1 " key={i+1} seller={el.seller.id} id={el._id} coverImage={el.coverImage} rating={el.rating} price={el.price} ratingQuantity={el.ratingQuantity} name={el.name}/> 
                      })}   
                </Carousal>
            </Card>
      </Card>}
  </div>
)

}

export default Product