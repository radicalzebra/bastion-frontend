import React from 'react'
import search from "../../../assets/navlogos/search.svg"
import QuickProduct from './QuickProduct'



function TopProducts(props) {
  return (
    <div className='h-  mt-6  px-8 py-5 pb-8 bg-gradient-to-b  shadow-lg border-2 border-gray-200   mb-20 rounded-lg flex flex-col gap-12'>


         <section className='flex items-center justify-between  gap-2'>
              <h3 className='text-3xl font-semibold tracking-wide text-black'>Top Products</h3>
            
             
             <section className='flex basis-4/6 h-8 gap-4 '>

                  
                  <section className='flex items-center bg-gray-800 shadow-md px-2  gap-1 rounded-md basis-4/6  '>
                          <button className=''>
                              <img src={search} alt="search" />
                          </button>
                          <input type="search" placeholder='Search' className='bg-gray-800 outline-0 px-2  rounded-sm basis-full' />
                  </section>
                  

                  <select name="time" className='w-30 rounded-md shadow-md border-2 border-gray-200 outline-0 font-medium bg-gray-50 text-black text-lg px-2'>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
            </section>
         </section>

          <table className='text-white bg-gray-800 rounded-md '>
            <tr className='bg-red-60 text-start'>
              <th className='bg-blue-90  text-gray-300 text-start px-2'>Product Name</th>
              <th className='bg-blue-90  text-gray-300 text-start px-2'>Order ID</th>
              <th className='bg-blue-90  text-gray-300 text-start px-2'>Price</th>
              <th className='bg-blue-90  text-gray-300 text-start px-2'>Sold</th>
              <th className='bg-blue-90  text-gray-300 text-start px-2'>Sales</th>
              <th className='bg-blue-90  text-gray-300 text-start px-2'>Rating</th>
            </tr>

             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="4.5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="4.5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="4.5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="4.5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="4.5" numberSold={6432} saleRevenue={659760} />
             <QuickProduct className=" bg-white font-medium border-b-8 border-white text-black" product="Jordan" price={8908} orderId="#7021" rating="3" numberSold={6432} saleRevenue={659760} />
       


             

          </table>



    </div>
  )
}

export default TopProducts