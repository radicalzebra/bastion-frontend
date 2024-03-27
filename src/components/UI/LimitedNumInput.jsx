import React, { useState,forwardRef } from 'react'

function LimitedNumInput({className,max,placeholder},ref) {

   const [maxVal,setMaxVal] = useState("")
   
   const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

   const onChangeHandler = (e) => {
      if(e.target.value <= max & e.target.value !== "e") {
         setMaxVal(e.target.value)
      }
   }

   return (
     <input ref={ref} onKeyDown={blockInvalidChar} onChange={onChangeHandler}  value={maxVal} className={`${className}`} type="number" max={max} placeholder={placeholder} />
   )
}

export default forwardRef(LimitedNumInput)