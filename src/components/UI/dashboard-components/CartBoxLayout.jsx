import React from 'react'
import CartBox from './CartBox'
import CartTotal from './CartTotal'


export default function CartBoxLayout() {
  return (
   <main className='flex gap-8 bg-red-60 p-4 relative my-8'>
    <section  className='flex flex-col gap-8  bg-red-90 basis-4/6'>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox/>
      <CartBox className={"border-none"}/>
    </section>
    <aside className='bg-blue-90 basis-2/6 '>
      <CartTotal/>
    </aside>
   </main>
  )
}
