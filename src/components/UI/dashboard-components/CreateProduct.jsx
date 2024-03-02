import React, { useEffect, useRef, useState } from 'react'
import GeneralHeading from '../GeneralHeading'
import CreateProductInfo from './CreateProductInfo'
import CreateProductImages from './CreateProductImages'
import useCreateProduct from '../../../Hooks/create-product'
import { useNavigate } from 'react-router-dom'






export default function CreateProduct() {
  const navigate = useNavigate()
  const [btnClick, setBtnClick] = useState(false)
  const [productOkay,setProductOkay] = useState(false)
  const {createProduct,created} = useCreateProduct()
  const [onFormClick, setOnFormClick] = useState(false)



  const productRef = useRef({
    name : "",
    price:0,
    productType:"sneakers",
    brand:"nike",
    consumer:"men",
    season:"rainy",
    sizes:[],
    images:[],
    coverImage:"",
    description:""
  })


  useEffect(()=> {
    if(productOkay) createProduct(productRef.current)
  },[productOkay])

  if(created==="success") {
    setTimeout(()=> {
       navigate("/")
    },2000)
  }


  const onBtnClick = () => {
    setBtnClick(true)

    if(productRef.current.images.length > 5) productRef.current.images = productRef.current.images.slice(0,5)
    productRef.current.sizes = productRef.current.sizes.sort((a,b)=> a - b)
    productRef.current.coverImage = productRef.current.images[0] 

    for (const key in productRef.current) {
      
      console.log(productRef.current[key])
      if(productRef.current[key] == false) { // I need the == sign here not ===
        setProductOkay(false)
        break
      } 

      setProductOkay(true)
    }

    setOnFormClick(false)

  }

  return (

   <form onChange={(e)=>setOnFormClick(true)} onSubmit={(e)=> e.preventDefault()} className='flex flex-col gap-8 pr-8 relative'>
      {btnClick && !productOkay && !onFormClick && <p className='bg-red-500 p-3 rounded-md font-semibold mx-14 absolute -top-8 right-1/2 translate-x-1/2 transform-all'>Please fill all the details carefully</p>}
      {btnClick && productOkay && created ==="success" && <p className='bg-green-500 p-5 rounded-md font-semibold mx-14 absolute -top-8 right-1/2 translate-x-1/2 transform-all'> Product Successfully Created ✌🏻</p>}


      <main className='flex my-8 '>
         <CreateProductInfo  ref={productRef} className={'bg-red-90 text-black flex flex-col bg-red-90 gap-8  basis-1/2'}/>
         <CreateProductImages ref={productRef} className={`bg-blac basis-1/2 flex flex-col justify-between text-black`}/>
      </main>

      <button onClick={onBtnClick} className={`bg-black rounded-md h-12 w-full self-center font-semibold ${ created==="Failed" && " bg-red-500" } ${btnClick && productOkay && created==="success" && " bg-white text-black border-2 border-gray-300  transition-all"}`}>{created}</button>
  </form>
  )
}

