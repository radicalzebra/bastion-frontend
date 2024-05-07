import React, { useEffect, useRef } from 'react'
import PageTransition from '../../Utilities/PageTransition';

import Linechart from "./Linechart";
import TopProducts from "./TopProducts";
import Piechart from "./Piechart";
import RevenueCard from "./RevenueCard";
import Card from '../../Utilities/Card';


import shopper from "../../../assets/dashboard/shopper.svg"
import star from "../../../assets/dashboard/star.svg"
import users from "../../../assets/dashboard/users.svg"
import product from "../../../assets/dashboard/product.svg"
import getLineData from '../../Utilities/GetLineData';
import { useSelector } from 'react-redux';



function Overview (props) {

   const dashInfo = useSelector(state => state.overview.dashInfo)
   const ordered = useSelector(state => state.overview.ordered)


   const lineData = getLineData(ordered)

   const pieData = [
      {
         name:"Men",
         value:dashInfo.men
      },
       
      {
         name:"Women",
         value:dashInfo.women
      },

      {
         name:"Kids",
         value:dashInfo.kids

      }
   ]

  const parentRef = useRef(null)

  useEffect(()=> {
    if(parentRef.current !== null) PageTransition(parentRef.current)
  },[parentRef])



  return (
        <main ref={parentRef} className={`flex gap-10 ${props.className}`}>

           <Card className={`py-6  flex flex-col gap-8 w-full pr-8 `}>
                  
                  <div className='flex bg-red-90 h-44 '>
                           <RevenueCard heading={"Total Sales"} className="text-black shadow-sm  shadow-lime-300 rounded-l-md basis-1/4 from-lime-400 to-lime-300 via-lime-300 bg-gradient-to-r " figureClass="bg-green-"  src={shopper}  number={dashInfo.sales} />
                           <RevenueCard heading={"Visitors"} className="text-black shadow-md border-l-2 basis-1/4 bg-gray-50"  src={users}  number={dashInfo.visitors}  />
                           <RevenueCard heading={"Total Orders"} className="text-black shadow-md border-l-2 basis-1/4 bg-gray-50"  src={star}  number={dashInfo.orders}  />
                           <RevenueCard heading={"Products"} className="text-black shadow-md border-l-2 rounded-r-md basis-1/4 bg-gray-50"  src={product}  number={dashInfo.numProducts}  />
                  </div>

                  <Card className="flex justify-between gap-3">
                     <Linechart data={lineData}/>
                     <Piechart data = {pieData}/>
                  </Card> 


                     
                  <TopProducts products={ordered}/>


             </Card>
        </main>
   
 
  )
}

export default  Overview