import React, { useState } from 'react'
import CartBox from './CartBox'
import { useSelector } from 'react-redux'
import CartTotal from './CartTotal'




export default function CartBoxLayout() {

  const detailedCart = useSelector(state => state.cart.detailedUpdatedCart)

  return (
   <main className='flex gap-8 bg-red-60 p-4 relative my-8'>

    <section  className='flex flex-col gap-8  bg-red-90 basis-4/6'>
      {detailedCart.map((el,i)=> {
         return <CartBox key={i+1} className={`${detailedCart.length  - 1 === i && "border-none" }`} name={el.name} src={el.coverImage} price={el.price} id={el.id}/>
      })}
    </section>

    <aside className='bg-blue-90 basis-2/6 '>
      <CartTotal />
    </aside>
   </main>
  )
}
