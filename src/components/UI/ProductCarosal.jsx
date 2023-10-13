import React, { useEffect, useRef,useState } from 'react'
import sliderArrow from "../../assets/navlogos/sliderArrow.svg"
import { gsap,ScrollTrigger } from 'gsap/all'
import useImgHandler from "../../Hooks/product-carousal"

gsap.registerPlugin(ScrollTrigger)




const ProductCarosal = (props) => {

  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const [imgNum, setImgNum ,imgHandler ] = useImgHandler(props.images) //customHook

  

  return (
    <section  ref={sectionRef} className={`flex gap-2  ${props.className}`}>

        <figure className='flex flex-col gap-2'>
            {props.images.map((el,i) => {

               if(i>5) return null;

               return (
                  
                  <div onClick={()=> setImgNum(i)} className={`w-16 h-16 rounded-md hover:cursor-pointer ${i===imgNum && " scale-90  transition-all"} `}>
                     <img className='h-full rounded-md hover:scale-95 transition-all' src={el} alt={`product${i+1}`}  key={i}/>
                  </div>
               )
            })}
        </figure>


        <figure className='w-5/6 h-screen rounded-md relative'>
            <img ref={imgRef} src={props.images[imgNum]}  className="rounded-md h-full transition-all"  alt="Product Image"/>
           <figure className='absolute top-4 right-4 gap-2 flex'>
               <img onClick={() => imgHandler(false)} src={sliderArrow} alt="arrow" className='p-2 hover:cursor-pointer bg-black rounded-full rotate-180'  />
               <img onClick={() => imgHandler()} src={sliderArrow} alt="arrow" className='p-2 hover:cursor-pointer bg-black rounded-full'  />
           </figure>
        </figure>

        

    </section>
  )
}

export default ProductCarosal