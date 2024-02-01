import React, { useState } from 'react'
import GeneralHeading from '../GeneralHeading'
import CreateProductInfo from './CreateProductInfo'
import CreateProductImages from './createProductImages'





export default function CreateProduct() {

  const [btnClick, setBtnClick] = useState(false)

  const onBtnClick = () => {
    setBtnClick(true)
  }

  return (

   <form onSubmit={(e)=> e.preventDefault()} className='flex flex-col gap-8 pr-8'>
      <main className='flex my-8 '>
         <CreateProductInfo className={'bg-red-90 text-black flex flex-col bg-red-90 gap-8  basis-1/2'}/>
         <CreateProductImages className={`bg-blac basis-1/2 flex flex-col justify-between text-black`}/>
      </main>

      <button onClick={onBtnClick} className={`bg-black rounded-md h-12 w-full self-center font-semibold  ${btnClick && " bg-white text-black border-2 border-gray-300  transition-all"}`}>Add Product</button>
  </form>
  )
}

