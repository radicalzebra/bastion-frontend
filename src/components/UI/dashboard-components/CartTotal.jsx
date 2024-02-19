import React, { useState } from 'react'

export default function CartTotal() {

  const [click , setClick ] = useState(false)

  const onClickHandler = (e) => {
    e.preventDefault()
    setClick(true)
  } 


  return (
    <form onSubmit={onClickHandler} className='p-5 text-black flex flex-col gap-8 bg-gray-200 rounded-md sticky top-4'>
        <div className='flex justify-between'>
           <p className=''>Subtotal</p>
           <p className='font-semibold'>$222</p>
        </div>

        <div className='flex justify-between '>
           <p className=''>Shipping  Fee</p>
           <p className='font-semibold'>$10</p>
        </div>

        <div className='flex justify-between border-t-2 border-dashed border-black py-2'>
           <p className=''>Total</p>
           <p className='font-semibold'>$230</p>
        </div>

        <button className={`bg-black p-4 text-white rounded-md transform-all ${click && " opacity-90"} `}>Proceed to checkout</button>
    </form>
  )
}
