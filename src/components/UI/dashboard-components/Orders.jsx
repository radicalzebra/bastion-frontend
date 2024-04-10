import React, { useEffect } from 'react'
import Card from '../../Utilities/Card'
import { NavLink } from 'react-router-dom'
import useGetSoldProducts from '../../../Hooks/get-sold-products'
import dateFormat from '../../Utilities/DateFomat'
import loadingUi from "../../../assets/navlogos/loading2.gif"







function Orders(props) {
 
  const {modifiedOrdered,loading,getOrders,searchHandler} = useGetSoldProducts()

  useEffect(()=> {
      getOrders()
  },[])


  return (
    <main className={`flex gap-10  text-black ${props.className}`}>

           <Card className={`py-6  flex flex-col gap-16 w-full pr-8 mb-20 bg-red-9 `}>

               <div className='flex flex-col gap-4 mb-20'>
                  <h1 className='text-3xl font-semibold'>Orders 👜</h1>
                  <p className='font-medium text-sm text-gray-500 w-5/6'>Welcome to the Orders Page, where the rhythm of your business transactions comes to life. Seamlessly manage the entire lifecycle of orders, from their initial placement to their successful fulfillment. This dynamic hub empowers you to monitor the real-time status of orders, categorize them based on their processing stage, and swiftly access detailed insights for informed decision-making.</p>
               </div>

               <section className='flex  gap-4 justify-center bg-red-90 relative'>

                   <div className='flex items-center w-3/6 gap-5  bg-gray-50 rounded-xl  border-2 px-2 py-2  '>
                                <svg width="19"  height="19" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78504 11.3216C5.5186 4.75767 11.9234 0.474582 19.0337 0.45559C26.6969 0.415236 33.5109 5.32378 35.8997 12.6053C38.2884 19.8868 35.7064 27.8778 29.5085 32.3847C23.3106 36.8917 14.9127 36.885 8.72207 32.3681L3.20207 37.8881C2.64083 38.4486 1.73164 38.4486 1.1704 37.8881C0.609866 37.3269 0.609866 36.4177 1.1704 35.8564L6.5179 30.5089C1.52288 25.4486 0.0514825 17.8854 2.78504 11.3216ZM5.34791 23.7794C7.64307 29.3103 13.0456 32.9125 19.0337 32.9048V32.8281C27.161 32.8177 33.7586 26.2543 33.8112 18.1273C33.819 12.1391 30.2167 6.73659 24.6859 4.44143C19.155 2.14628 12.786 3.411 8.55176 7.64528C4.31748 11.8796 3.05275 18.2485 5.34791 23.7794Z" fill="red"/>
                                </svg>

                                <input onChange={searchHandler}  type="search" placeholder="search - ID/Customer/Order/Contact" className=' w-11/12 font-medium bg-transparent outline-none text-black' />
                   </div>

                  {loading && <img src={loadingUi} className={'h-14 w-14 absolute top-full translate-y-full'} />}

               </section>





               {!loading && <section className='flex justify-between rounded-md shadow-md shadow-purple-400 px-12 py-5 bg-red-90 relative '>

                       <Card className="flex flex-col gap-4 basis-1/12">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Order ID</h2>
                          
                          <div className='flex flex-col gap-4 font-medium text-xs text-gray-400'>
                               {modifiedOrdered?.map((el,i)=>{
                                   return (
                                      <p  key={el._id} >{"#"}{el._id.slice(0,12)}</p>
                                   )
                                 })}
                          </div>
                       </Card>



                       <Card className="flex flex-col gap-4 basis-2/12 bg-red-90 ">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Customer</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs '>
                                 {modifiedOrdered?.map((el,i)=>{
                                    return (
                                       <NavLink key={el._id}  >{el.user.username}</NavLink>
                                    )
                                 })}
                          </div>
                       </Card>

                       <Card className="flex flex-col gap-4 basis-2/12 bg-red-90">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Order</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs '>
                                {modifiedOrdered?.map((el,i)=>{
                                    return (
                                       <NavLink key={el._id} className="hover:underline" to={`/product/${el.product._id}`}>{el.product.name}</NavLink>
                                    )
                                 })}
                          </div>
                       </Card>

                       <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Date</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs text-gray-400 '>
                                 {modifiedOrdered?.map((el,i)=>{
                                    return (
                                       <p key={el._id} >{dateFormat(el.createdAt)}</p>
                                    )
                                 })}
                          </div>
                       </Card>

                       <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Contact</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs text-gray-400 '>
                                 {modifiedOrdered?.map((el,i)=>{
                                    return (
                                       <p key={el._id} >{el.user.email}</p>
                                    )
                                 })}
                          </div>
                       </Card>

                       <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Amount Payable</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs '>
                                {modifiedOrdered?.map((el,i)=>{
                                    return (
                                       <p key={el._id} >{'$ '}{el.price}</p>
                                    )
                                 })}
                          </div>
                       </Card>

                      <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Status</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs '>
                            {modifiedOrdered?.map((el,i)=>{
                               return (
                                  <p key={el._id} className={`text-green-400 bg-green-100 px-2 rounded-lg `}>{"completed"}</p>
                               )
                            })}
                            
                          </div>
                       </Card>

                      <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Payment Method</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs text-gray-400 '>
                                 {modifiedOrdered?.map((el,i)=>{
                                    return (
                                       <p key={el._id} >{"Credit Card"}</p>
                                    )
                                 })}
                          </div>
                       </Card>

               </section> }



            </Card>
      </main>
  )
}

export default Orders