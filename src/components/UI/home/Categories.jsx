import React from 'react'
import Card from '../../Utilities/Card'
import hero2 from "../../../assets/headerImg/hero2.jpg"
import sportsShoes from "../../../assets/showcases/sportsShoes.jpg"
import exploreShoes from "../../../assets/showcases/exploreShoes.jpg"
import flipflops from "../../../assets/showcases/flipflops.jpg"
import casuals from "../../../assets/showcases/casuals.jpg"
import sneakers from "../../../assets/showcases/sneakers.jpg"
import { NavLink, useNavigate } from 'react-router-dom'



function categories(props) {

   const navigate = useNavigate();

   return (
     <section className={`text-black h-98 gap-4 grid grid-cols-5 bg-green-90 my-6 mx-12  ${props.className}`}>
       
       {/* Explore */}
       <NavLink  to="/products/all" className="relative h-98 col-start-1 col-end-3 overflow-hidden rounded-2xl">
          <img src={sneakers} className='h-full rounded-2xl hover:scale-110 transition-all' alt="" />
          <div className='absolute top-3 left-3 w-72 flex flex-col gap-2 bg-red-90'>
             <p className='uppercase text-4xl font-semibold'>it's your first time ?</p>
             <span className='text-md'>Explore categories</span>
          </div>
          <NavLink to="/products/all" className='absolute bottom-6 left-5  hover:scale-110 transition-all  bg-black text-white text-lg py-2 px-4 rounded-full uppercase font-extrabold'>Let's Explore</NavLink>
       </NavLink>


      <Card className="h-98 flex flex-col col-start-3 col-end-5 gap-2">

         {/* sneakers */}
         <section className="h-1/2 flex gap-2">

            <NavLink to="/products/sneakers" className='flex gap-2 relative overflow-hidden rounded-2xl'>
               <img src={exploreShoes} className='h-full rounded-2xl hover:scale-110 transition-all' alt="" />
               <NavLink to="/products/sneakers" className='absolute bottom-3 left-3  hover:scale-110 transition-all  bg-black text-white text-xs py-2 px-4 rounded-full uppercase font-extrabold'>Sneakers</NavLink>
            </NavLink>

            {/* casuals  */}
            <NavLink to="/products/casuals" className='flex gap-2 relative overflow-hidden rounded-2xl'>
               <img src={casuals} className='h-full rounded-2xl hover:scale-110 transition-all' alt="" /> 
               <NavLink to="/products/casuals" className='absolute bottom-3 left-3  hover:scale-110 transition-all  bg-black text-white text-xs py-2 px-4 rounded-full uppercase font-extrabold'>casuals</NavLink>
            </NavLink>

         </section>

         {/* sportshoes */}
         <NavLink to="/products/sportshoes" className="h-1/2 w-full flex relative overflow-hidden rounded-2xl">
            <div className='flex gap-2 w-full'>
               <img src={sportsShoes} className='rounded-2xl w-full h-100 hover:scale-110 transition-all' alt="" />  
               <NavLink to="/products/sportshoes" className='absolute bottom-3 left-3  hover:scale-110 transition-all  bg-black text-white text-xs py-2 px-4 rounded-full uppercase font-extrabold'>Sportshoes</NavLink>
            </div>
         </NavLink>

      </Card>

      {/* flip-flops */}
      <NavLink  to="/products/flipflops" className="relative h-98 col-start-5 col-end-6 overflow-hidden rounded-2xl">
          <img  src={flipflops} className='h-full rounded-2xl hover:scale-110 transition-all' alt="" />
          <NavLink to="/products/flipflops" className='absolute top-3 left-3  hover:scale-110 transition-all  bg-black text-white text-xs py-2 px-4 rounded-full uppercase font-extrabold'>flipflops</NavLink>
       </NavLink>

    </section>
  )
}

export default categories