import React from 'react'
import Linechart from "./Linechart";
import TopProducts from "./TopProducts";
import Piechart from "./Piechart";
import RevenueCard from "./RevenueCard";
import Card from '../../Utilities/Card';



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

           <Card className={`py-6  flex flex-col gap-8 w-full pr-8 `}>
                  
                  <div className='flex bg-red-90 h-44 '>
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