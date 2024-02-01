import React from 'react'

function SelectInputArray({arr,className}) {
  return (
    <select  className={className}>
         {arr.map((el,i)=>{
            return <option  value={el} key={i}>{el}</option>
         })}
    </select>
  )
}

export default SelectInputArray