import React, { useState, useRef, useEffect } from 'react'
import Card from '../components/Utilities/Card'
import { ProdCard } from '../components/UI/productCard'
import { json, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {SortForm, RatingForm , BrandForm, ProductTypeForm , SeasonForm , PriceForm} from "../components/Form/ProductsForm"
import useProductsFetch from '../Hooks/products-fetching'







const Products = (props) => {

  const [setFormObj,products,isPending,isError,error,isFetching] = useProductsFetch()

  return (
    <section className="flex flex-col my-20 gap-3 px-16 bg-red-90">


           <form className='flex gap-2 bg-yellow-90 w-11/12'>
            
              <SortForm setFormObj = {setFormObj} />
              <RatingForm setFormObj = {setFormObj} />
              <BrandForm setFormObj = {setFormObj} />
              <ProductTypeForm setFormObj = {setFormObj} />
              <SeasonForm setFormObj = {setFormObj}/>
              <PriceForm setFormObj = {setFormObj} /> 

                 {/* <select name="size" className='p-1 px-2 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option hidden selected>size</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                 </select> */}
            
     
           </form>


            <Card className="flex gap-6 flex-wrap ">

              {!isFetching && products.map((el,i)=> {
                  return <ProdCard className="shadow-sm  p-1 " id={el._id} coverImage={el.coverImage} key={i+1} rating={el.rating} price={el.price} ratingQuantity={el.ratingQuantity} name={el.name}/>
              })}

              {/* {isError && <h1 className='scale-150 text-black bg-red-700'>{error.message}</h1>} */}

            </Card>
    </section>
  )
}




export default Products