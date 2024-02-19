import React, { useState } from 'react'
import hero from "../../../assets/headerImg/hero.jpg"
import LimitedNumInput from '../LimitedNumInput'


export default function CartBox({className}) {

  return (
    <section className={`grid  grid-cols-5 bg-gray-80 h-40 border-b border-dashed border-black pb-4 ${className} relative`}>

       <div className='bg-red-90 flex rounded-md'>
         <figure className='bg-blue-90 max-w-full w-40 min-w-min h-full'>
            <img className='w-full h-full rounded-md' src={hero}/>
         </figure>
       </div>

       <div className='bg-red-70 flex flex-wrap items-center p-4'>
         <h className="bg-blue-90 text-sm font-poppins text-black">Product Name</h>
       </div>

       <div className='bg-red-5 flex flex-wrap items-center '>
         <LimitedNumInput className={"bg-gray-50 text-black border w-16 border-gray-200 rounded-md p-2 text-center outline-none placeholder:text-black"} max={10} placeholder={"1"} />
       </div>

        <div className='bg-red-40 flex flex-wrap items-center '>
            <h className="bg-blue-90 text-sm text-black font-poppins font-medium">$99</h>
       </div>

       <div className='bg-red-70 flex flex-wrap items-center'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="red" className="w-6 h-6 visited:bg-blue">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
         </svg>
       </div>


    </section>
  )
}
