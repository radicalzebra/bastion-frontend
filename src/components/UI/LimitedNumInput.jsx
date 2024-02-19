import React, { useState } from 'react'

function LimitedNumInput({className,max,placeholder}) {

   const [maxVal,setMaxVal] = useState("")

   const onChangeHandler = (e) => {
      if(e.target.value <= max) setMaxVal(e.target.value)
   }

   return (
     <input onChange={onChangeHandler}  value={maxVal} className={`${className}`} type="number" max={max} placeholder={placeholder} />
   )
}

export default LimitedNumInput