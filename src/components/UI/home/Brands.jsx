import React from 'react'
import exploreShoes from "../../../assets/showcases/exploreShoes.webp"
import casuals from "../../../assets/showcases/casuals.webp"
import sneakers from "../../../assets/showcases/sneakers.webp"
import { NavLink } from 'react-router-dom'


function Brands(props) {
  return (
    

       <section className={`flex  lg:flex-nowrap sm:bg-red-90 md:justify-start xs:flex-wrap xs:justify-between ${props.className}`}>

          <NavLink to={'/products/all'} className='md:h-60 xs:h-46 md:w-1/4 xs:w-1/2 p-1 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={casuals} className="rounded-lg hover:scale-110 hover:brightness-95 w-full h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Nike</span>
          </NavLink>

          <NavLink to={'/products/all'}  className='md:h-60 xs:h-46 md:w-1/4 xs:w-1/2 p-1 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={sneakers} className="rounded-lg hover:scale-110 w-full hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Adidas</span>
          </NavLink>

          <NavLink to={'/products/all'} className='md:h-60 xs:h-46 md:w-1/4 xs:w-1/2 p-1 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={exploreShoes} className="rounded-lg hover:scale-110 w-full hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Reebok</span>
          </NavLink>

          <NavLink to={'/products/all'} className='md:h-60 xs:h-46 md:w-1/4 xs:w-1/2 p-1  relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={sneakers} className="rounded-lg hover:scale-110 w-full hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Puma</span>
          </NavLink>


          {/* <NavLink to={'/products/all'} className='h-60 md:w-1/5 sm:w-2/5 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={casuals} className="rounded-lg hover:scale-110 hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Fila</span>
           </NavLink> */}

       </section>

   
  )
}

export default Brands