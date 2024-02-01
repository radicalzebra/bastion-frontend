import React from 'react'

export default function GeneralHeading({heading,children,className,additionalInfo}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <h4 className='text-md font-poppins font-medium'>{heading} <span className='text-gray-400 text-xs'>{additionalInfo}</span></h4>
      {children}
    </label>
  )
}
