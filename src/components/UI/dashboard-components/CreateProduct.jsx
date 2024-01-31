import React from 'react'
import GeneralHeading from '../GeneralHeading'




export default function CreateProduct() {
  return (

   <form className='flex flex-col gap-8 pr-8'>
         <main className='flex my-8 '>

         <section className='bg-red-90 text-black flex flex-col bg-red-90 gap-8  basis-1/2'>

            <GeneralHeading heading="Product Name" >
               <input className='bg-white border-2 rounded-md h-9 px-2 outline-none w-2/3' maxLength="20" minLength="7" placeholder="Nike Air Force" />
            </GeneralHeading>

            <GeneralHeading heading="Price" >
               <input className='bg-white border-2 rounded-md h-9 px-2 outline-none w-2/3' type="number" max={5000} placeholder="$" />
            </GeneralHeading>

            <div className='flex gap-2 bg-yellow-90 w-2/3 '>
                  

               <GeneralHeading heading="Product Type" className={"w-2/3"}>
                  <select  className='bg-white border-2 rounded-md p-1 outline-none'>
                     {["sneakers", "casuals", "sportshoes", "flipflops", "others"].map((el,i)=>{
                        return <option  value={el} key={i}>{el}</option>
                     })}
                  </select>
               </GeneralHeading>

               <GeneralHeading heading="Brand" className={"w-1/3"}>
                  <select  className='bg-white border-2 rounded-md p-1 outline-none'>
                     {["nike", "adidas", "puma", "reebok", "fila", "others"].map((el,i)=>{
                        return <option  value={el} key={i}>{el}</option>
                     })}
                  </select>
               </GeneralHeading>
            </div>


            <div className='flex gap-2 bg-yellow-90 w-2/3 '>
                  
               <GeneralHeading heading="For" className={"w-1/3"}>
                     <select  className='bg-white border-2 rounded-md p-1 outline-none w-full'>
                        {["men", "women", "kids"].map((el,i)=>{
                           return <option  value={el} key={i}>{el}</option>
                        })}
                     </select>
               </GeneralHeading>

               <GeneralHeading heading="Season" className={"w-2/3"} >
                     <select  className='bg-white border-2 rounded-md p-1 outline-none w-full'>
                        {["rainy", "winter", "summer"].map((el,i)=>{
                           return <option  value={el} key={i}>{el}</option>
                        })}
                     </select>
               </GeneralHeading>

               
            </div>

            
            <GeneralHeading heading="Sizes" className={"w-2/3"} >
               <div className='flex justify-between'>
                  {[7,8,9,10,11,12].map((el,i) => <button key={i} className='rounded-lg border-2 w-16 h-12'>{el}</button>)}
               </div>
            </GeneralHeading>

            




            {/* <div>Images</div> */}

            {/* <div>CoverImage</div> */}
            {/* <div>seller</div> */}
            {/* <div>Release-Date</div> */}
         </section>

         <section className='bg-blac basis-1/2 flex flex-col justify-between text-black '>
          <GeneralHeading heading={"Product Images"}>

            <div className='bg-red-90 flex gap-4 flex-wrap h-1/2 bg-red-90 justify-between'>
               <div className='bg-gray-200 relative w-28 h-28 rounded-md flex justify-center  items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>

                  <input className='bg-white border-2 w-28 h-28 opacity-0 outline-none absolute ' type="file"/>
               </div>
               
               <div className='bg-gray-200 relative w-28 h-28 rounded-md flex justify-center  items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>

                  <input className='bg-white border-2 w-28 h-28 opacity-0 outline-none absolute ' type="file"/>
               </div>

               <div className='bg-gray-200 relative w-28 h-28 rounded-md flex justify-center  items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>

                  <input className='bg-white border-2 w-28 h-28 opacity-0 outline-none absolute ' type="file"/>
               </div>

               <div className='bg-gray-200 relative w-28 h-28 rounded-md flex justify-center  items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>

                  <input className='bg-white border-2 w-28 h-28 opacity-0 outline-none absolute ' type="file"/>
               </div>

               <div className='bg-gray-200 relative w-28 h-28 rounded-md flex justify-center  items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>

                  <input className='bg-white border-2 w-28 h-28 opacity-0 outline-none absolute ' type="file"/>
               </div>
      
            </div>
         </GeneralHeading>

         <GeneralHeading heading="Description" className={"h-2/3"} >
               <textarea className='resize-none bg-white border-2 rounded-md h-full w-full text-start p-2 text-sm outline-none'></textarea>
         </GeneralHeading>

         </section>

      </main>


      <button className='bg-black rounded-md h-12 font-semibold'>Add Product</button>
  </form>
  )
}

