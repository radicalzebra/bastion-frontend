import React, { useState } from 'react'
import GeneralHeading from '../GeneralHeading'
import LimitedNumInput from '../LimitedNumInput'
import SelectInputArray from '../SelectInputArray'



const Button = ({className,key,text}) => {
  const [btnChange,setBtnChange] = useState(false)

  const onBtnClickHandler = (e) => {
    setBtnChange(prevState => !prevState)
  }


   return (
      <button onClick={onBtnClickHandler} key={key} className={`${className} ${btnChange ? " bg-black text-white":" bg-white text-black"}`}>{text}</button>
   )
}


function CreateProductInfo({className}) {

   const [btnChange,setBtnChange] = useState(false)

  const onBtnClickHandler = () => {
     setBtnChange(prevState => !prevState)
  }


  return (
    <section className={className}>

            <GeneralHeading heading="Product Name" >
               <input className='bg-white border-2 rounded-md h-9 px-2 outline-none w-2/3' maxLength="20" minLength="7" placeholder="Nike Air Force" />
            </GeneralHeading>

            <GeneralHeading heading="Price" >
               <LimitedNumInput className={"bg-white border-2 rounded-md h-9 px-2 outline-none w-2/3"} max={10000} placeholder={"$"}/>
            </GeneralHeading>

            <div className='flex gap-2 bg-yellow-90 w-2/3 '>
               <GeneralHeading heading="Product Type" className={"w-2/3"}>
                  <SelectInputArray className={"bg-white border-2 rounded-md p-1 outline-none"} arr={["sneakers", "casuals", "sportshoes", "flipflops", "others"]}/>
               </GeneralHeading>

               <GeneralHeading heading="Brand" className={"w-1/3"}>
                  <SelectInputArray className={"bg-white border-2 rounded-md p-1 outline-none"} arr={["nike", "adidas", "puma", "reebok", "fila", "others"]}/>
               </GeneralHeading>
            </div>


            <div className='flex gap-2 bg-yellow-90 w-2/3 '>
               <GeneralHeading heading="For" className={"w-1/3"}>
                  <SelectInputArray className={"bg-white border-2 rounded-md p-1 outline-none w-full"} arr={["men", "women", "kids"]}/>
               </GeneralHeading>

               <GeneralHeading heading="Season" className={"w-2/3"} >
                  <SelectInputArray className={"bg-white border-2 rounded-md p-1 outline-none w-full"} arr={["rainy", "winter", "summer"]}/>
               </GeneralHeading>               
            </div>

            
            <GeneralHeading heading="Sizes" className={"w-2/3"} >
               {/* <SelectInputArray className={"flex justify-between"} arr={}/> */}
               <div className='flex justify-between'>
                  {[7,8,9,10,11,12].map((el,i) =>  <Button className={"rounded-lg border-2 w-16 h-12"} text={el} key={i}/>)}
               </div>
            </GeneralHeading>

            




            {/* <div>Images</div> */}

            {/* <div>CoverImage</div> */}
            {/* <div>seller</div> */}
            {/* <div>Release-Date</div> */}
         </section>
  )
}

export default CreateProductInfo