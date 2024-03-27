import React, { useEffect, useRef, useState } from 'react'
import Card from '../../Utilities/Card'
import {ProdCard} from '../ProductCard'
import useGetSellerProducts from '../../../Hooks/get-seller-products'
import loadingUi from "../../../assets/navlogos/loading2.gif"
import Dropdown from '../Dropdown'
import Reverse from '../Reverse'








function Products(props) {

    const [hover, setHover] = useState(false)
    const [touched, setTouched] = useState(false)
    const {products,loading,setFilter,setSearch,setIsAscend} = useGetSellerProducts()



  return (
      
        
       <main className={`flex gap-10 ${props.className} overflow-x-hidden`}>
      
           <Card className={`flex flex-col  gap-5 w-full pr-8 relative `}>

                  

                  <div className='flex flex-col gap-4 mb-20  py-6'>
                        <h1 className='text-3xl font-semibold text-black'>Products 📦</h1>
                        <p className='font-medium text-sm text-gray-500 w-5/6'>Welcome to the Products Page, your dedicated platform for managing and showcasing your range of offerings. This page is designed to empower you as a seller by providing you with a comprehensive toolkit to present your products effectively, track their performance, and engage with potential buyers. </p>
                  </div>


                 <section className='flex flex-col gap-16  text-black my-5'>

                        <section className='flex gap-4 bg-red- justify-center w-full'>
                           
                             
                             <div className='flex items-center w-3/6 gap-5  bg-gray-50 rounded-xl  border-2 px-2 py-2'>
                                <svg width="19"  height="19" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78504 11.3216C5.5186 4.75767 11.9234 0.474582 19.0337 0.45559C26.6969 0.415236 33.5109 5.32378 35.8997 12.6053C38.2884 19.8868 35.7064 27.8778 29.5085 32.3847C23.3106 36.8917 14.9127 36.885 8.72207 32.3681L3.20207 37.8881C2.64083 38.4486 1.73164 38.4486 1.1704 37.8881C0.609866 37.3269 0.609866 36.4177 1.1704 35.8564L6.5179 30.5089C1.52288 25.4486 0.0514825 17.8854 2.78504 11.3216ZM5.34791 23.7794C7.64307 29.3103 13.0456 32.9125 19.0337 32.9048V32.8281C27.161 32.8177 33.7586 26.2543 33.8112 18.1273C33.819 12.1391 30.2167 6.73659 24.6859 4.44143C19.155 2.14628 12.786 3.411 8.55176 7.64528C4.31748 11.8796 3.05275 18.2485 5.34791 23.7794Z" fill="red"/>
                                </svg>

                                <input  onChange={(e) => setSearch(e.target.value.toLowerCase())} type="search" placeholder="search..." className=' w-11/12 font-medium bg-transparent outline-none text-black' />
                             </div>

                             <div className='flex gap-4'>
                                 <Dropdown list={["rating","name","sold","price"]}  heading={"rating"} setFilter={setFilter} />
                                 <Reverse setIsAscend={setIsAscend}/>
                             </div>

                        </section>


                        <section className={`flex flex-wrap justify-cente gap-6 w-full min-h-screen bg-red-90 relative`}>

                                    {loading && <img className='h-14 w-14 absolute top-1/4 right-1/2 translate-x-1/2' src={loadingUi}/>}

                                     {!loading && products.map((el,i)=> {
                                          return <ProdCard className="shadow-sm  p-1 " seller={el.seller.id} id={el._id} coverImage={el.coverImage} key={i+1} rating={el.rating} price={el.price} ratingQuantity={el.ratingQuantity} name={el.name}/>
                                     })}

                        </section>

                 </section>

           </Card>
        </main>
     
  )
}

export default Products