import { useState, memo} from "react"



const GenericInput = ({inputType,data,placeholder,label,maxLen,className}) => {
   const [input,setInput] = useState(data)

   let genderInput = <select value={input} onChange={(e)=> setInput(e.target.value)} className='h-10 text-lg rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 focus:border-black border-gray-300 px-4 outline-none'>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>



  return (
    <div className={`text-black  ${className || "w-full"}`}>
         <label className='flex flex-col gap-3'>
           <div className='text-lg tracking-wide text-gray-800 font-semibold flex flex-col '>
              <p>{label}</p>
            </div>
           {label.trim().toLowerCase() === "gender" ? genderInput : <input value={input} onChange={(e)=> setInput(e.target.value)}  type={inputType} maxLength={maxLen || 10} className={`h-10 rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 border-gray-300 focus:border-black  px-4 outline-none`} placeholder={placeholder} />}
          </label>
     </div>
  )
}


export default memo(GenericInput)