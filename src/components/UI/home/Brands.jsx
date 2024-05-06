import React from 'react'
import sportsShoes from "../../../assets/showcases/sportsShoes.webp"
import exploreShoes from "../../../assets/showcases/exploreShoes.webp"
import flipflops from "../../../assets/showcases/flipflops.webp"
import casuals from "../../../assets/showcases/casuals.webp"
import sneakers from "../../../assets/showcases/sneakers.webp"
import { NavLink } from 'react-router-dom'


function Brands(props) {
  return (
    

       <section className={`flex gap-4 ${props.className}`}>

          <NavLink to="/products/nike" className='h-60 w-1/5 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={casuals} className="rounded-lg hover:scale-110 hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Nike</span>
          </NavLink>

          <NavLink to="/products/adidas" className='h-60 w-1/5 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={sneakers} className="rounded-lg hover:scale-110 hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Adidas</span>
          </NavLink>

          <NavLink to="/products/reebok" className='h-60 w-1/5 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={exploreShoes} className="rounded-lg hover:scale-110 hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Reebok</span>
          </NavLink>

          <NavLink to="/products/puma" className='h-60 w-1/5 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={sneakers} className="rounded-lg hover:scale-110 hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Puma</span>
          </NavLink>


          <NavLink to="/products/skechers" className='h-60 w-1/5 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={casuals} className="rounded-lg hover:scale-110 hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-white absolute  bottom-2 left-3'>Fila</span>
           </NavLink>

       </section>

   
  )
}

export default Brands