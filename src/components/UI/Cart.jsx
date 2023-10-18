import { NavLink } from "react-router-dom"
import hero from "../../assets/headerImg/hero.jpg"
import { useDispatch, useSelector } from "react-redux"
import {cartActions} from "../../Store/CartSlice"
import { useRef,useEffect,useState } from "react"



export const SmallItems = (props) => {
   const itemRef = useRef(null);
   const dispatch = useDispatch();
   const [hover , setHover] = useState(false)
   // console.log(itemRef)

   return (
      <div key={props.key} ref={itemRef}  className={`flex p-2 border-gray-300 gap-4 border-b-2 border-dashed  ${props.className}`}>
            <NavLink onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => dispatch(cartActions.touchHandler())} to="/products/all" className={`h-12 w-12 rounded-md ${hover && " h-16 w-16 "} transition-all`}>
               <img src={props.src || hero} className="w-full  h-full rounded-md" alt={props.alt || "pic"} />
            </NavLink>

            <div className="flex flex-col bg-red-90 py-1 justify-between">
               <NavLink onClick={() => dispatch(cartActions.touchHandler())} to="/products/all" className="text-sm hover:text-gray-400">{props.heading || "Men Air MAX SOLO Sneakers"}</NavLink>
               <div className='flex gap-3'>
                  <p className=" text-xs px-1 text-black font-semibold bg-yellow-200 w-fit rounded-lg">{props.price || "$500"}</p>
                  <span className=' text-xs px-1 text-black font-medium'>{props.quantity || "x60"}</span>
               </div>
            </div>
      </div>
   )
}


export const NumCartItems = (props) => {

   const divRef = useRef(null)
   const dispatch = useDispatch(); 

   return (
       <div onClick={(e)=> e.stopPropagation()}  ref={divRef} className={`absolute flex flex-col gap-3 border-2 border-gray-100 bg-white  -bottom-30 right-8 p-2 rounded-md translate-y-1/2 w-97 h-fit origin-top `}> 

         {props.items.map((el,i) => {

            if(i<=3) {
               return (
                  <SmallItems key={i+1}/>
               )
            }
         })}

         <NavLink onClick={()=> dispatch(cartActions.touchHandler())} to="/dashboard/cart" className={`w-full h-10 flex items-center justify-center text-white rounded-md bg-black font-medium `}>
            <span>more...</span>
         </NavLink>

      </div>
   )
}