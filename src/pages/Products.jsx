import React, { useState, useRef, useEffect } from 'react'
import Card from '../components/Utilities/Card'
import { ProdCard } from '../components/UI/ProductCard'
import {SortForm, RatingForm , BrandForm, ProductTypeForm , SeasonForm , PriceForm} from "../components/Form/ProductsForm"
import useProductsFetch from '../Hooks/products-fetching'
import loadingUi from "../assets/navlogos/loading2.gif"






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
     
           </form>


            <Card className="flex gap-6 flex-wrap relative min-h-screen ">

              {isFetching && <img className='h-14 w-14 absolute top-1/3 right-1/2 translate-x-1/2' src={loadingUi}/>}

              {!isFetching && products.map((el,i)=> {
                return <ProdCard className="shadow-sm  p-1 " seller={el.seller.id} id={el._id} coverImage={el.coverImage} key={i+1} rating={el.rating} price={el.price} ratingQuantity={el.ratingQuantity} name={el.name}/>
              })}
            
            </Card>
    </section>
  )
}




export default Products