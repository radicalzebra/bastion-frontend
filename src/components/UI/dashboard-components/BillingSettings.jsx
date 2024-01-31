import React, { useState } from 'react'
import BillingInputSection from '../BillingInputSection';
import BillingInput from '../BillingInput';
import dateFormat from '../../Utilities/DateFomat';



function BillingSettings({user, logged}) {

 const [changed,setChanged] =useState(false)
 const [btnClick,setBtnClick] = useState("Save")

 const onSubmitHandler = (e) => {
    e.preventDefault()
    setBtnClick("Saved")
    setTimeout(()=>{
        setChanged(false)
        setBtnClick("Save")
    },2000)
 }


 const onChangeHandler = (e) => {
    //  if(e.target.value.trim().length !== e.target.value.length) setChanged(false)
    // else setChanged(true)
    setChanged(true)
 }



  return (
    <form onSubmit={onSubmitHandler} onChange={onChangeHandler} className='text-black flex flex-col gap-8 mb-20'>

        <BillingInputSection label={"Card Details"}>
            <div className='flex gap-3 '>
                <BillingInput data={user.cardName || ""} label={"Name on card"} type={"text"} className={" w-1/2"}/>
                <BillingInput type="date" data={dateFormat(user.cardExpiry) || ""} label={"Valid thru"} className={" w-1/4"} />
            </div>

            <div className='flex gap-3'>
                <BillingInput data={user.cardNumber || ""} label={"Card number"} type={"text"} className={" w-1/2"} maxLen={16} />
                <BillingInput type="password" data={user.Cvv || ""} label={"CVV"} className={" w-1/4"} maxLen={3} />
            </div>
        </BillingInputSection>


      
        <BillingInputSection label={"Street Address"}>
            <BillingInput data={user.streetAddress || ""}  type={"text"} className={" w-2/3"} />
        </BillingInputSection>
      


        <BillingInputSection label={"City"}>
            <BillingInput data={user.city|| ""}  type={"text"} className={" w-1/3"} />
        </BillingInputSection>



        <BillingInputSection label={"State & Pincode"}>
            <div className='flex gap-3 '>
                <BillingInput data={user.state || ""} label={"State"} type={"text"} className={" w-1/2"}/>
                <BillingInput type="text" data={user.pincode || ""} label={"Pincode"} className={" w-1/4"} />
            </div>
        </BillingInputSection>


        <BillingInputSection label={"Landmark"}>
            <BillingInput data={user.landmark|| ""}  type={"text"} className={" w-1/2"}/>
        </BillingInputSection>

        <button disabled={!changed} className={`w-full bg-black h-12 text-white  rounded-md font-semibold ${!changed && "bg-gray-700"} ${btnClick==="Saved" && " bg-rose-700"} `}>{btnClick}</button>
     

    </form>
  )
}

export default BillingSettings