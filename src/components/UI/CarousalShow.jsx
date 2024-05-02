import React, { forwardRef, useEffect, useRef } from 'react'
import Carousal from '../Utilities/Carousal'
import { ProdCard } from './ProductCard'
import { NavLink } from 'react-router-dom'
import Card from '../Utilities/Card'
import ScrollDownAnimation from '../Utilities/ScrollDownAnimation'



function CarousalShow({heading,linkToMore,arr,animateClass},ref) {

  const headerRef = useRef(null)

  useEffect(()=>{
    headerRef.current !== null && ScrollDownAnimation(headerRef.current)
  },[headerRef])

  
  return (
     <Card className="text-black my-12 px-20 tracking-wide font-medium text-2xl flex flex-col gap-3 bg-red-40 ">

            <div ref={headerRef} className={`flex w-full translate-x-2/3 opacity-0  justify-between items-center`}>
               <p className='text-3xl font-extrabold uppercase'>{heading}</p>
               <NavLink to={linkToMore} className={"text-sm hover:underline text-gray-500 font-semibold"}>View all</NavLink>
            </div>

            <section  className='relative'>
               <Carousal>
                  {arr?.map((el,i)=> {
                     return <ProdCard className="shadow-sm  p-1 " seller={el.seller.id} id={el._id} coverImage={el.coverImage} key={i+1} rating={el.rating} price={el.price} ratingQuantity={el.ratingQuantity} name={el.name}/> 
                  })}
               </Carousal>
            </section>

      </Card>

  )
}


export default forwardRef(CarousalShow)