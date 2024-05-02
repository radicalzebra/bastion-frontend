import React, { forwardRef, useEffect, useState } from 'react'
import GeneralHeading from '../GeneralHeading'



const InputImage = ({className,obj,onChangeHandler,name,id}) => {

  const [image,setImage]  = useState(obj[id])

  const onChangeHandle = (e) => {
   let file = e.target.files[0]

   if(file.type === "image/jpeg") {
      const reader = new FileReader();

      reader.onloadend = () => {
        const objImagesCopy = [...obj].filter((el)=> el!==undefined)
        objImagesCopy[id] = reader.result
        onChangeHandler(e,name,undefined,objImagesCopy)

        setImage(reader.result);
      };

      reader.readAsDataURL(file);
   }
  }


   return (
      <div className={className}>
         {!image && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
         </svg>}

         {image && <img src={image} className='h-full w-full object-fill' />}

         <input onChange={onChangeHandle} className='bg-white border-2 w-28 h-28 opacity-0 outline-none absolute ' type="file"/>
      </div>
   )
}







function CreateProductImages({className,obj,setObj,onChangeHandler}) {

  const images = [...obj.images]
  
  if(images.length<5) {
    for(let i = images.length;i<5;i++) {
      images.push(undefined)
    }
  } 

  useEffect(()=>{
      onChangeHandler(obj.images[0],"coverImage")
  },[obj.images])

  return (
   <section className={className}>
          <GeneralHeading heading={"Product Images"} additionalInfo={"(only upload jpegs/jpgs of minimum 1000 x 1000)"}>
             <div className='bg-red-90 flex  flex-wrap h-1/2 bg-red-90 justify-between '>
               {images.map((el,i) => {
                  return <InputImage  obj={obj.images} name={"images"} id={i} key={i+1} setObj={setObj} onChangeHandler={onChangeHandler} className={"bg-gray-200 relative w-28 h-28 rounded-md flex justify-center items-center  cursor-pointer overflow-hidden"}/>   
               })}
               {}
            </div>
         </GeneralHeading>

         <GeneralHeading  name="description" heading="Description" className={"h-2/3"} >
            <textarea value={obj.description} onChange={(e) => onChangeHandler(e.target.value,"description")} className='resize-none bg-white border-2 rounded-md h-full w-full text-start p-2 text-sm outline-none'></textarea>
         </GeneralHeading>

   </section>

  )
}

export default CreateProductImages