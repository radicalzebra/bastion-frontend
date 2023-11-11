import React, { useState } from 'react'
import Card from '../../Utilities/Card'






function GeneralSettings(props) {


  return (
    <Card className={`flex flex-col w-6/6  bg-red-90 gap-12 ${props.className}`}>

                           <form className='text-black  w-5/6'>
                              <label className='flex flex-col gap-3'>
                                  <div className='text-lg tracking-wide text-gray-800 font-semibold flex flex-col '>
                                    <p>Email address</p>
                                    <p className='text-xs text-gray-500 font-medium'>Invoices will be sent on this email</p>
                                 </div>
                                  <input type="email" className='w-4/6 h-10 rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 border-gray-300 px-4 outline-none' placeholder='me@gmail.com' />
                              </label>
                           </form>

                           <form className='text-black  w-5/6'>
                              <label className='flex flex-col gap-1'>
                                  <span className='text-lg tracking-wide text-gray-800 font-semibold'>Username</span>
                                  <input type="text" className='w-4/6 h-10 rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 border-gray-300 px-4 outline-none' placeholder='Enter your username' />
                              </label>
                           </form>


                            <form className='text-black  w-5/6'>
                              <label className='flex flex-col gap-1'>
                                  <span className='text-lg tracking-wide text-gray-800 font-semibold'>Phone</span>
                                  <input type="text" className='w-4/6 h-10 rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 border-gray-300 px-4 outline-none' placeholder='+91' />
                              </label>
                           </form>


                          <div className='flex gap-8'>

                              <form className='text-black bg-red-80 w-1/6'>
                                  <label className='flex flex-col gap-1'>
                                      <span className='text-lg tracking-wide text-gray-800 font-semibold'>Gender</span>
                                      {/* <input type="text" className='w-4/6 h-10 rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 border-gray-300 px-4 outline-none' placeholder='name' /> */}
                                      <select className='w-5/6 h-10 text-lg rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 border-gray-300 px-4 outline-none'>
                                        <option value="male">male</option>
                                        <option value="male">female</option>
                                      </select>
                                  </label>
                              </form>

                                <form className='text-black bg-red-80  w-2/6'>
                                  <label className='flex flex-col gap-1'>
                                      <span className='text-lg tracking-wide text-gray-800 font-semibold'>Birthday</span>
                                      <input type="date" className='w-5/6 h-10 font-sans rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 border-gray-300 px-4 outline-none text-black'  />
                                  </label>
                              </form>

                          </div>

      </Card>
  )
}

export default GeneralSettings