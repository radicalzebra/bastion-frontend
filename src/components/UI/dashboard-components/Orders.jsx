import React from 'react'
import Card from '../../Utilities/Card'
import { NavLink } from 'react-router-dom'







function Orders(props) {
  return (
    <main className={`flex gap-10  text-black ${props.className}`}>

           <Card className={`py-6  flex flex-col gap-16 w-full pr-8 mb-20 bg-red-9`}>

               <div className='flex flex-col gap-4 mb-20'>
                  <h1 className='text-3xl font-semibold'>Orders 👜</h1>
                  <p className='font-medium text-sm text-gray-500 w-5/6'>Welcome to the Orders Page, where the rhythm of your business transactions comes to life. Seamlessly manage the entire lifecycle of orders, from their initial placement to their successful fulfillment. This dynamic hub empowers you to monitor the real-time status of orders, categorize them based on their processing stage, and swiftly access detailed insights for informed decision-making.</p>
               </div>

               <section className='flex  gap-4 justify-center bg-red-90 '>

                             
                   <div className='flex items-center w-4/6 gap-3 shadow-md bg-gray-50 rounded-md px-2 py-2 hover:border-red-400 border-2'>
                                <svg width="15"  height="15" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78504 11.3216C5.5186 4.75767 11.9234 0.474582 19.0337 0.45559C26.6969 0.415236 33.5109 5.32378 35.8997 12.6053C38.2884 19.8868 35.7064 27.8778 29.5085 32.3847C23.3106 36.8917 14.9127 36.885 8.72207 32.3681L3.20207 37.8881C2.64083 38.4486 1.73164 38.4486 1.1704 37.8881C0.609866 37.3269 0.609866 36.4177 1.1704 35.8564L6.5179 30.5089C1.52288 25.4486 0.0514825 17.8854 2.78504 11.3216ZM5.34791 23.7794C7.64307 29.3103 13.0456 32.9125 19.0337 32.9048V32.8281C27.161 32.8177 33.7586 26.2543 33.8112 18.1273C33.819 12.1391 30.2167 6.73659 24.6859 4.44143C19.155 2.14628 12.786 3.411 8.55176 7.64528C4.31748 11.8796 3.05275 18.2485 5.34791 23.7794Z" fill="red"/>
                                </svg>

                                <input type="search" placeholder="search..." className=' w-11/12 font-medium bg-gray-50 outline-none  text-black' />
                   </div>

                   <section className='flex bg-slate-50 px-2 shadow-md items-center gap-2 rounded-md cursor-pointer'>

                                      <svg width="20" className=''  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#222222"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z" fill="#3b3939"></path> </g></svg>
                                      <button className='tracking-wide '>Filter</button>
                    </section>


               </section>

               <section className='flex justify-between rounded-md shadow-md shadow-purple-400 px-4 py-4 bg-red-90 '>
                       <Card className="flex flex-col gap-4 basis-1/12">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Order ID</h2>
                          
                          <div className='flex flex-col gap-4 font-medium text-xs text-gray-400'>
                               {props.orders.map((el,i)=>{
                                   return (
                                      <p key={i+1}>{el.id}</p>
                                   )
                                 })}
                          </div>
                       </Card>

                       <Card className="flex flex-col gap-4 basis-2/12 bg-red-90 ">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Customer</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs '>
                                 {props.orders.map((el,i)=>{
                                    return (
                                       <NavLink key={i+1} className="hover:underline" to="/">{el.customer}</NavLink>
                                    )
                                 })}
                          </div>
                       </Card>

                       <Card className="flex flex-col gap-4 basis-2/12 bg-red-90">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Order</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs '>
                                {props.orders.map((el,i)=>{
                                    return (
                                       <NavLink key={i+1} className="hover:underline" to="/">{el.order}</NavLink>
                                    )
                                 })}
                          </div>
                       </Card>

                       <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Delivery Date</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs text-gray-400 '>
                                 {props.orders.map((el,i)=>{
                                    return (
                                       <p key={i+1}>{el.deliveryDate}</p>
                                    )
                                 })}
                          </div>
                       </Card>

                       <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Amount Payable</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs '>
                                {props.orders.map((el,i)=>{

                                    let formattedNum = 0;

                                    const options = {                
                                                   style: "currency",  
                                                   useGrouping: true,  
                                                   currency: "USD"
                                    };

                                    const locale = navigator.language
                                    formattedNum = new Intl.NumberFormat(locale,  options).format(el.amount);

                                    return (
                                       <p key={i+1} >{formattedNum}</p>
                                    )
                                 })}
                          </div>
                       </Card>

                      <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Status</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs '>
                            {props.orders.map((el,i)=>{
                               return (
                                  <p key={i+1} className={`${el.status === "completed"? "text-green-400 bg-green-100" : el.status === "pending" ? "text-yellow-400  bg-yellow-100":el.status==="canceled" ? "text-red-400  bg-red-100" : "text-gray-800  bg-gray-200"} shadow-sm rounded-md px-2 `}>{el.status}</p>
                               )
                            })}
                            
                          </div>
                       </Card>

                      <Card className="flex flex-col gap-4">
                          <h2 className='font-semibold text-sm border-b-2 border-gray-200'>Payment Method</h2>
                          <div className='flex flex-col gap-4 font-medium text-xs text-gray-400 '>
                                 {props.orders.map((el,i)=>{
                                    return (
                                       <p key={i+1}>{el.paymentMethod}</p>
                                    )
                                 })}
                          </div>
                       </Card>

               </section>



            </Card>
      </main>
  )
}

export default Orders