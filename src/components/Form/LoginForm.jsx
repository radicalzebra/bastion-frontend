import React from 'react'
import Card from '../Utilities/Card'



function LoginForm({className}) {
  return (
    <Card className={`text-black rounded-lg flex flex-col justify-center gap-16 pl-24 ${className}`}>
       {/* logo */}

       <header className='text-3xl flex flex-col gap-1'>
         <h1>Log In</h1>
         <p className='text-xs text-gray-700'>Enter your email & password to login to our website</p>
       </header>

       <form className='flex flex-col  gap-8 '>
         <label className='flex flex-col gap-1'>
            <span className='text-sm'>Email</span>
            <input className='rounded-md w-2/3 h-10 px-4 outline-none bg-white border-black border-2 ' type="email" placeholder='johndoe@gmail.com' />
         </label>

         <label className='flex flex-col gap-1'>
            <span className='text-sm' >Password</span>
            <input className='rounded-md w-2/3 h-10 px-4 outline-none bg-white border-black border-2 ' type="password" placeholder='user123' />
         </label>

         <button className='w-2/3 bg-gray-800 rounded-md h-10 font-poppins font-semibold text-white'>Sign In</button>
       </form>
    </Card>
  )
}

export default LoginForm