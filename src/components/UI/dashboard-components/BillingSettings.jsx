import React from 'react'
import Card from '../../Utilities/Card'
import { Legend } from 'recharts';


function BillingSettings({user, logged}) {

  const month =  Number(new Date(user.cardExpiry).getMonth()) + 1
  const date  =  Number(new Date(user.cardExpiry).getDate())
  const expiry = `${new Date(user.cardExpiry).getFullYear()}-${month < 10 ? `0${month}`: month}-${date < 10 ? `0${date}` : date}`
  console.log(expiry)

  return (
    <section className='text-black flex flex-col gap-8 mb-20'>


      {/* Card Details */}
      <Card className="flex gap-4 bg-red-90   border-b-2 border-gray-300 py-10">

          <p className='text-Legend font-semibold w-2/6 text-gray-600'>Card Details</p>

          <form className='w-4/6 flex flex-col gap-6 bg-blue-80'>

               <div className='flex gap-3'>
                    <label className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-500 font-semibold'>Name on card</p>
                        <input defaultValue={user.cardName || null} type="text" className='bg-gray-50 text-lg font-medium shadow-md border-2 border-gray-300 hover:border-gray-800 rounded-md px-2 outline-none h-10 w-60' place />
                     </label>

                     <label className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-500 font-semibold'>Valid thru</p>
                        <input defaultValue={expiry || null} type="date" className='bg-gray-50 shadow-md border-2 font-medium border-gray-300 rounded-md hover:border-gray-800 px-2 h-10 w-28 outline-none' />
                     </label>
               </div>

               <div className='flex gap-3'>
                    <label className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-500 font-semibold'>Card number</p>
                        <input defaultValue={user.cardNumber || null} type="text" className='bg-gray-50 shadow-md border-2 font-medium border-gray-300 rounded-md hover:border-gray-800 px-2 outline-none h-10 w-60' place />
                     </label>

                     <label className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-500 font-semibold'>CVV</p>
                        <input defaultValue={user.Cvv || null} type="password" className='bg-gray-50 text-2xl shadow-md border-2 font-medium border-gray-300 hover:border-gray-800 rounded-md px-2 h-10 w-28 outline-none' />
                     </label>
               </div>

          </form>

      </Card>



      {/* Street Address */}
      <Card className="flex gap-4 bg-red-90  border-b-2 border-gray-300 py-10">

          <p className='text-Legend font-semibold w-2/6 text-gray-600'>Street Address</p>

          <form className='w-4/6  bg-blue-80'>
                <input defaultValue={user.streetAddress || null} type="text" className='bg-gray-50 text-lg w-4/6 font-medium shadow-md border-2 hover:border-gray-800 border-gray-300 rounded-md px-2 outline-none h-10' place />
          </form>

      </Card>


      {/* City */}
      <Card className="flex gap-4 bg-red-90  border-b-2 border-gray-300 py-10">

          <p className='text-Legend font-semibold w-2/6 text-gray-600'>City</p>

          <form className='w-4/6  bg-blue-80'>
                <input defaultValue={user.city || null} type="text" className='bg-gray-50 text-lg w-2/6 font-medium shadow-md border-2 hover:border-gray-800 border-gray-300 rounded-md px-2 outline-none h-10' place />
          </form>

      </Card>




      {/* State & Pin */}
      <Card className="flex gap-4 bg-red-90  border-b-2 border-gray-300 py-10">

          <p className='text-Legend font-semibold w-2/6 text-gray-600'>State & Pincode</p>

          <form className='w-4/6 flex gap-2  bg-blue-80'>
                <div className='flex gap-3'>
                    <label className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-500 font-semibold'>State</p>
                        <input defaultValue={user.state || null} type="text" className='bg-gray-50 text-lg font-medium shadow-md border-2 border-gray-300 hover:border-gray-800 rounded-md px-2 outline-none h-10 w-60' place />
                     </label>

                     <label className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-500 font-semibold'>Pincode</p>
                        <input defaultValue={user.pincode || null} type="text" className='bg-gray-50 text-lg shadow-md border-2 font-medium border-gray-300 rounded-md hover:border-gray-800 px-2 h-10 w-28 outline-none' />
                     </label>
               </div>
          </form>

      </Card>



      {/* Landmark */}
      <Card className="flex gap-4 bg-red-90 py-10">

          <p className='text-Legend font-semibold w-2/6 text-gray-600'>Landmark</p>

          <form className='w-4/6  bg-blue-80'>
                <input defaultValue={user.landmark || null} type="text" className='bg-gray-50 text-lg w-2/4 font-medium shadow-md border-2 hover:border-gray-800 border-gray-300 rounded-md px-2 outline-none h-10'  />
          </form>

      </Card>




    </section>
  )
}

export default BillingSettings