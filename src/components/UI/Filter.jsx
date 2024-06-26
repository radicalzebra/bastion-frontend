import React from 'react'

export default function Filter({listArr=["name","price","love"]}) {
  return (
    <div className='items-center  p-2 rounded-xl bg-gray-200 relative'>
        <svg className='w-8 h-8 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z" fill="#000000"></path></g></svg>
    

        <div className='flex-col flex  gap-2 absolute -top-full  right-1/2 translate-x-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-md'>
          {listArr.map((el,i)=> {
            return <p className='font-medium'>{el}</p>
          })}
        </div>
    
    </div>
  )
}
