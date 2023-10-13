import React, { useEffect, useReducer } from 'react'
import {DashLinks,DashboardLayout} from './DashLinks'
import Card from '../../Utilities/Card'
import GeneralSettings from './GeneralSettings'
import BillingSettings from './BillingSettings'
import NotificationSettings from './NotificationSettings'




import hero from "../../../assets/headerImg/hero.jpg"
import { NavLink, useParams } from 'react-router-dom'




const touchedReducer = (state , action) => {
   if(action==="general") return {val:"general"}
   if(action==="billings") return {val:"billings"}
   if(action==="notifications") return {val:"notifications"}

   else {
      return {val:false}
   }
}





function Settings(props) {

   const {specify} = useParams();

   const [touched , dispatchFn] = useReducer(touchedReducer,{val:false})

   useEffect(()=>{
      if(specify === "notifications") {
         return dispatchFn("notifications")
      } else if(specify === "billings") {
          return dispatchFn("billings")
      } else {
         return dispatchFn("general");
      } 
         
   },[specify])

  return (
    <main className={`flex gap-10    ${props.className}`}>
           

         {/* <DashLinks/> */}
         <DashboardLayout/>

         <section className={` py-6 flex flex-col gap-16 w-5/6`}>

            
                  
            <section className='flex flex-col gap-24'>
                  <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                          <NavLink to={"/"} className=' text-xs tracking-wider rounded-md p-1 px-3 shadow-md mb-2 w-fit hover:shadow-inner hover:shadow-gray-300 font-semibold text-gray-400'>🏠 Home</NavLink>
                          <NavLink to={"/"} className=' text-xs tracking-wider rounded-md p-1 px-3  mb-2 w-fit hover:shadow-inner hover:shadow-gray-300 font-bold text-gray-400 flex items-center'>
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#db1414"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#db1414"></path> </g></svg> 
                           </NavLink>
                        </div>
                        <h1 className='text-3xl font-semibold text-black'>Settings ⚙️</h1>
                        <p className='font-medium text-sm text-gray-500 w-5/6'>Welcome to the Settings Page, your personalized control center for tailoring your experience and managing your preferences on our platform. This page is designed to put you in command, allowing you to customize various aspects to suit your needs. </p>
                  </div>
                  <header className='flex gap-4'>
                     <NavLink to="/dashboard/settings/general" onClick={() => dispatchFn("general")} className={`text-gray-400 font-medium text-sm cursor-pointer hover:text-gray-800 px-2 rounded-md ${touched.val === "general" ? " shadow-inner shadow-gray-300 text-gray-800 ":" shadow-md"}`}>General</NavLink>
                     <NavLink to="/dashboard/settings/billings" onClick={() => dispatchFn("billings")} className={`text-gray-400 font-medium text-sm cursor-pointer hover:text-gray-800 px-2 rounded-md ${touched.val === "billings" ? " shadow-inner shadow-gray-300 text-gray-800":" shadow-md"}`}>Billings</NavLink>
                     <NavLink to="/dashboard/settings/notifications" onClick={() => dispatchFn("notifications")} className={`text-gray-400 font-medium text-sm cursor-pointer hover:text-gray-800 px-2 rounded-md ${touched.val === "notifications" ? " shadow-inner shadow-gray-300 text-gray-800 ":" shadow-md"}`}>Notifications</NavLink>
                  </header>
            </section>

            <main className='px-8'>
                   {touched.val === "general" && 
                     //   <p className='text-black'>general</p>
                     <section className='flex flex-col gap-20 mb-20 px-20'>
                        <figure className=' bg-red-90  self-center cursor-pointer hover:brightness-90 relative'>
                            <img className='rounded-full w-60 h-60' src={hero} alt="profile" />
                            {/* <p className='text-6xl absolute text-red-400 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>+</p> */}
                        </figure>
                        
                        <GeneralSettings className=""/>
                        
                     </section>
                       
                   }

                   {touched.val === "billings" && 
                      <BillingSettings/>
                   }
                   
                   {touched.val === "notifications" && 
                       <NotificationSettings/>
                   }
            </main>
                  


         </section>

    </main>
  )
}

export default Settings