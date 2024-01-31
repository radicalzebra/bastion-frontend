import React from 'react'

export default function GeneralHeading({heading,children,className}) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <h4 className='text-md font-poppins font-medium'>{heading}</h4>
      {children}
    </label>
  )
}
