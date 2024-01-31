import React, { useState,useRef } from 'react'
import GenericInput from '../GeneralSettingInput'
import GenericPasswordInput from '../GeneralPasswordInput'
import dateFormat from '../../Utilities/DateFomat'
import ProfilePhotoSetting from '../ProfilePhotoSetting'








function GeneralSettings({user , logged , className}) {

  const [changed,setChanged] = useState(false)
  const [btnClick,setBtnClick] = useState("Save")
  const passwordRef = useRef(null)
  const RePasswordRef = useRef(null)
  
  // console.log(changed)

  const orgData = {
    "email":user.email || "",
    "gender":user.gender || "",
    "username":user.username|| "",
    "birthday":dateFormat(user.birthday) || "",
    "phone":user.phone || ""
  }


  const onSubmitHandler = (e) => {
     e.preventDefault() 
     if(passwordRef.current?.value !== RePasswordRef.current?.value) {
       RePasswordRef.current.focus()
       setChanged(false)
      }
      else {
        setBtnClick("Saved")
        setTimeout(()=>{
            setChanged(false)
            setBtnClick("Save")
        },2000)
     }

  }

  const onChangeHandler = (e) => {
    // if(e.target.value.trim().length !== e.target.value.length) setChanged(false)
    // else setChanged(true)
    setChanged(true)
  }



  return (
    <form onSubmit={onSubmitHandler} onChange={onChangeHandler} className={`flex flex-col w-6/6  bg-red-90 gap-12 mb-10 p-16 ${className}`}>

        <section className='flex flex-col gap-20 mb-20 px-20 '>
          <ProfilePhotoSetting setChanged={setChanged} logged={logged} data={user.photo} />
        </section>

        <div className='flex bg-red-90 justify-between  gap-9'>
            <GenericInput inputType={"email"} data={user.email} placeholder={'me@gmail.com'} label={"Email"} maxLen={70}/>
            <GenericInput data={user.gender}  label={"Gender"} className={" w-1/3"} />
            <GenericInput inputType={"date"} data={dateFormat(user.birthday)}  label={"Birthday"}  className={"w-1/3"}/>
        </div>

        <div className='flex bg-red-90 justify-between  gap-9'>
             <GenericInput inputType={"text"} data={user.username} placeholder={'Enter your username'} label={"Username"} maxLen={20}/>
             <GenericInput inputType={"number"}  data={user.phone || ""} placeholder={'+91'} label={"Phone"} max={9999999999}/>
        </div>

        <div className='flex bg-red-90 justify-between  gap-9'>
            <GenericPasswordInput  ref={passwordRef}       placeholder={'Enter your password'} label={"New Password"} maxLen={11} />
            <GenericPasswordInput  ref={RePasswordRef}     placeholder={'Re-enter your password'} label={"Re-enter Password"} maxLen={11}/>
        </div>
                          
        <button disabled={!changed}  className={`bg-black h-12 w-full  font-bold self-end rounded-md ${btnClick === "Saved" && " bg-rose-700"} ${!changed && " bg-gray-700"}`}>{btnClick}</button>
                          
      </form>
  )
}

export default GeneralSettings