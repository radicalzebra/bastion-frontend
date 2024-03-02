import React, { useState, forwardRef, useEffect } from 'react'
import GeneralHeading from '../GeneralHeading'
import LimitedNumInput from '../LimitedNumInput'
import SelectInputArray from '../SelectInputArray'



const Button = forwardRef(({className,key,text},ref) => {
  const [btnChange,setBtnChange] = useState(false)


  const onBtnClickHandler = (e) => {
      setBtnChange(prevState => !prevState)    
  }

  
  useEffect(()=> {
     if(btnChange) {
      ref.current.sizes = [...ref.current.sizes, Number(text)];
      console.log(1)
     } else {
      ref.current.sizes = ref.current.sizes.filter(el => el !== Number(text))  
     }
  },[btnChange])


   return (
      <button onClick={onBtnClickHandler} key={key} className={`${className} ${btnChange ? " bg-black text-white":" bg-white text-black"}`}>{text}</button>
   )
})


function CreateProductInfo({className} , ref) {


  return (
    <section  className={className}>

            <GeneralHeading ref={ref} name={"name"} heading="Product Name" >
               <input className='bg-white border-2 rounded-md h-9 px-2 outline-none w-2/3' maxLength="20"  placeholder="Nike Air Force" />
            </GeneralHeading>

            <GeneralHeading ref={ref} name={"price"} heading="Price" >
               <LimitedNumInput className={"bg-white border-2 rounded-md h-9 px-2 outline-none w-2/3"} max={10000} placeholder={"$"}/>
            </GeneralHeading>

            <div className='flex gap-2 bg-yellow-90 w-2/3 '>
               <GeneralHeading ref={ref} name={"productType"} heading="Product Type" className={"w-2/3"}>
                  <SelectInputArray className={"bg-white border-2 rounded-md p-1 outline-none"} arr={["sneakers", "casuals", "sportshoes", "flipflops", "others"]}/>
               </GeneralHeading>

               <GeneralHeading ref={ref} name={"brand"} heading="Brand" className={"w-1/3"}>
                  <SelectInputArray className={"bg-white border-2 rounded-md p-1 outline-none"} arr={["nike", "adidas", "puma", "reebok", "fila", "others"]}/>
               </GeneralHeading>
            </div>


            <div className='flex gap-2 bg-yellow-90 w-2/3 '>
               <GeneralHeading ref={ref} name={"consumer"} heading="For" className={"w-1/3"}>
                  <SelectInputArray className={"bg-white border-2 rounded-md p-1 outline-none w-full"} arr={["men", "women", "kids"]}/>
               </GeneralHeading>

               <GeneralHeading ref={ref} name={"season"} heading="Season" className={"w-2/3"} >
                  <SelectInputArray className={"bg-white border-2 rounded-md p-1 outline-none w-full"} arr={["rainy", "winter", "summer"]}/>
               </GeneralHeading>               
            </div>

            
            <GeneralHeading heading="Sizes" className={"w-2/3"} >
               <div className='flex justify-between'>
                  {[7,8,9,10,11,12].map((el,i) =>  <Button ref={ref} className={"rounded-lg border-2 w-16 h-12"} text={el} key={i}/>)}
               </div>
            </GeneralHeading>

            




            {/* <div>Images</div> */}

            {/* <div>CoverImage</div> */}
            {/* <div>seller</div> */}
            {/* <div>Release-Date</div> */}
         </section>
  )
}

export default forwardRef(CreateProductInfo)