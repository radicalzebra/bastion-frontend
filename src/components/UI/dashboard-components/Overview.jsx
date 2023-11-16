import React from 'react'
import Linechart from "./Linechart";
import TopProducts from "./TopProducts";
import Piechart from "./Piechart";
import RevenueCard from "./RevenueCard";
import Card from '../../Utilities/Card';
import {DashLinks, DashboardLayout} from './DashLinks'


import profit from "../../../assets/dashboard/profit.svg" 
import loss from "../../../assets/dashboard/loss.svg"
import shopper from "../../../assets/dashboard/shopper.svg"
import star from "../../../assets/dashboard/star.svg"
import users from "../../../assets/dashboard/users.svg"
import turn from "../../../assets/dashboard/turn.svg"
import { NavLink } from "react-router-dom";




function Overview (props) {


   const lineData = [
      {month:"Jan", revenue:`${3000}`, order:`${800}`},
      {month:"Feb", revenue:`${4000}`, order:`${600}`},
      {month:"Mar", revenue:`${3333}`, order:`${500}`},
      {month:"Apr", revenue:`${6000}`, order:`${300}`},
      {month:"May", revenue:`${2000}`, order:`${200}`},
      {month:"Jun", revenue:`${4000}`, order:`${900}`},
      {month:"Jul", revenue:`${7000}`, order:`${800}`},
      {month:"Aug", revenue:`${3000}`, order:`${800}`},
      {month:"Sept", revenue:`${1000}`, order:`${700}`},
      {month:"Oct", revenue:`${6000}`, order:`${400}`},
      {month:"Nov", revenue:`${2000}`, order:`${200}`},
      {month:"Dec", revenue:`${2200}`, order:`${100}`},

   ]





   const pieData = [
      {
         name:"Men",
         value:150
      },
       
      {
         name:"Women",
         value:50
      },

      {
         name:"Kids",
         value:25
      }
   ]



  return (
        <main className={`flex gap-10 ${props.className}`}>

           {/* <DashLinks/> */}
           <DashboardLayout/>

           <Card className={`py-6  flex flex-col gap-8 w-5/6 bg-red-70 `}>
                  
                  <div className='flex gap-4'>
                          <NavLink to={"/"} className=' text-xs tracking-wider rounded-md p-1 px-3 shadow-md mb-2 w-fit hover:shadow-inner hover:shadow-gray-300 font-semibold text-gray-400'>🏠 Home</NavLink>
                          <NavLink to={"/"} className=' text-xs tracking-wider rounded-md p-1 px-3  mb-2 w-fit hover:shadow-inner hover:shadow-gray-300 font-bold text-gray-400 flex items-center'>
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#db1414"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#db1414"></path> </g></svg>
                             
                           </NavLink>
                  </div>
                  
                  <div className='flex  h-40 '>
                           <RevenueCard heading={"Total Sales"} className="text-black shadow-sm  shadow-lime-300 rounded-l-md basis-1/4 from-lime-400 to-lime-300 via-lime-300 bg-gradient-to-r " figureClass="bg-green-"  src={shopper}  number={12345678} increment={false}  arrow={profit} percentage={90} />
                           <RevenueCard heading={"Visitors"} className="text-black shadow-md border-l-2 basis-1/4 bg-gray-50"  src={users}  number={12345678} increment={true} arrow={loss} percentage={90} />
                           <RevenueCard heading={"Total Orders"} className="text-black shadow-md border-l-2 basis-1/4 bg-gray-50"  src={star}  number={12345678} increment={false}  arrow={profit} percentage={90} />
                           <RevenueCard heading={"Refunded"} className="text-black shadow-md border-l-2 rounded-r-md basis-1/4 bg-gray-50"  src={turn}  number={12345678} increment={true}  arrow={loss} percentage={90} />
                  </div>

                  <Card className="flex justify-between gap-3">
                     <Linechart data={lineData}/>
                     <Piechart data = {pieData}/>
                  </Card> 


                     
                  <TopProducts/>


             </Card>
        </main>
   
 
  )
}

export default  Overview