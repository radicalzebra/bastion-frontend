
import Card from '../Utilities/Card';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Icons from '../Utilities/Icons';
import Bastion from "../../assets/navlogos/Bastion.svg";
import defaultUser from "../../assets/navlogos/defaultUser.jpg"
import {NumCartItems} from './Cart';
import { NotifyItems } from './Notify';
import {useSelector,useDispatch} from "react-redux"
import {cartActions} from '../../Store/CartSlice';
import {notifyActions} from '../../Store/NotifySlice';
import { loginActions } from '../../Store/LoginSlice';
import { searchActions } from '../../Store/SearchSlice';

import { useQuery } from '@tanstack/react-query';

import { useEffect, useState, useRef } from 'react';







export const OneLineBanner = (props) => {

   return (
      <Card className={`${props.className} bg-black flex items-center justify-center z-2 text-white h-10`}>
         <p className={props.className}>{props.string} {props.link}</p>
      </Card>
   )
};


const SearchLinks = ({el,index:i, setSearch}) => {

   const [hoverItem,setHoverItem] = useState(false)

   return (
      <li onClick={()=> setSearch(el.name)} onMouseEnter={()=> setHoverItem(true)}  onMouseLeave={()=> setHoverItem(false)} id="search-item" className='  px-4 py-2 flex gap-4 items-center '>
                                      
          <Link to={`http://127.0.0.1:5173/product/${el._id}`} className={`rounded-full ${hoverItem && "scale-125"}  cursor-pointer transition-all`}>
              <svg width="12" height="12" viewBox="0 0 37 39" className='rotate-270 ' fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78504 11.3216C5.5186 4.75767 11.9234 0.474582 19.0337 0.45559C26.6969 0.415236 33.5109 5.32378 35.8997 12.6053C38.2884 19.8868 35.7064 27.8778 29.5085 32.3847C23.3106 36.8917 14.9127 36.885 8.72207 32.3681L3.20207 37.8881C2.64083 38.4486 1.73164 38.4486 1.1704 37.8881C0.609866 37.3269 0.609866 36.4177 1.1704 35.8564L6.5179 30.5089C1.52288 25.4486 0.0514825 17.8854 2.78504 11.3216ZM5.34791 23.7794C7.64307 29.3103 13.0456 32.9125 19.0337 32.9048V32.8281C27.161 32.8177 33.7586 26.2543 33.8112 18.1273C33.819 12.1391 30.2167 6.73659 24.6859 4.44143C19.155 2.14628 12.786 3.411 8.55176 7.64528C4.31748 11.8796 3.05275 18.2485 5.34791 23.7794Z" fill="red"/>
               </svg>

           </Link>

            <Link  key={i} className={`text-md font-secondary font-medium ${hoverItem && "text-gray-500"} `} to={`http://127.0.0.1:5173/product/${el._id}`}>{el.name}</Link>
      </li>
   )
}

export const Nav = (props) => {

   const [inputTouched,setInputTouched] = useState(false);
   const [search,setSearch] = useState("")
  

   const cartShow = useSelector(state => state.cart.touched)
   const notifyShow = useSelector(state => state.notify.touched)

   const user = useSelector(state => state.login.user)
   const logged = useSelector(state => state.login.loggedIn)

   const dispatch = useDispatch();

   const navigate = useNavigate();
   const currentUrl = window.location.href;

   const {data} = useQuery({
      queryKey:["search"],
      queryFn:async ()=> {
         const response = await fetch(`https://bastion-backend-dev-nxhk.3.us-1.fl0.io/bastion/api/products`)
         const resData = await response.json()

         return resData.data.products
      }
   })

   let prodData = data
   // console.log(data)
   let filteredData = prodData?.filter((e)=> e.name.toLowerCase().trim().includes(search.toLowerCase().trim()))
   // console.log(filteredData,"filter")


   const cartHandler = (e) => {

      e.stopPropagation() //stop event bubbling 
      dispatch(cartActions.touchHandler())
      dispatch(notifyActions.touchHandler(false))
      dispatch(loginActions.showLogin(logged ? false : true))
   }

   const notifyHandler = (e) => {

      e.stopPropagation() //stop event bubbling 
      dispatch(notifyActions.touchHandler())
      dispatch(cartActions.touchHandler(false))
      dispatch(loginActions.showLogin(logged ? false : true))
   }



   const onBlurHandler = () => {
      setTimeout(()=> {
         setInputTouched(false)
      },250)
      
   }
  

  const onSearchChange = (e) => {
    setInputTouched(e.target.value !== "")
    setSearch(e.target.value)
  } 

   return (
      <section  className={`bg-gray-5 flex flex-col sticky  text-black gap-1 pl-8`}> 

           
           

           <Card className="items-center flex bg-grey-300 bg-green-90 gap-8 ">

                  <div className='items-center flex bg-red-90'>
                        <img src={Bastion} alt="brand logo" onClick={(e) => {navigate("/")}} className='h-full items-center hover:cursor-pointer' />
                  </div>
                 
                  <label  className={`w-4/6 flex rounded-full h-9 bg-gray-100 items-center px-3 border-gray-300 ${inputTouched &&  "hover:border-red-500 "} border-2 gap-4`}>
                           <svg width="17" height="17" viewBox="0 0 37 39" className='rotate-270' fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78504 11.3216C5.5186 4.75767 11.9234 0.474582 19.0337 0.45559C26.6969 0.415236 33.5109 5.32378 35.8997 12.6053C38.2884 19.8868 35.7064 27.8778 29.5085 32.3847C23.3106 36.8917 14.9127 36.885 8.72207 32.3681L3.20207 37.8881C2.64083 38.4486 1.73164 38.4486 1.1704 37.8881C0.609866 37.3269 0.609866 36.4177 1.1704 35.8564L6.5179 30.5089C1.52288 25.4486 0.0514825 17.8854 2.78504 11.3216ZM5.34791 23.7794C7.64307 29.3103 13.0456 32.9125 19.0337 32.9048V32.8281C27.161 32.8177 33.7586 26.2543 33.8112 18.1273C33.819 12.1391 30.2167 6.73659 24.6859 4.44143C19.155 2.14628 12.786 3.411 8.55176 7.64528C4.31748 11.8796 3.05275 18.2485 5.34791 23.7794Z" fill="black"/>
                           </svg>
                           <input value={search} onChange={onSearchChange} onBlur={onBlurHandler} type="search"  className='h-full text-xs font-medium caret-red-400 w-full bg-gray-100  outline-none text-black' placeholder='Search all categories' />
                           {inputTouched && filteredData && 
                            <ul className="bg-white shadow-sm shadow-gray-500 backdrop-blur-sm w-4/6  rounded-md absolute top-1/2 -translate-x-4 mt-3 z-10 flex flex-col ">
                                 {filteredData.map((el,i)=>{
                                    return <SearchLinks el={el} setSearch={setSearch} index={i}/>
                                 })}
                              </ul>
                           }
                  </label>
   
                  <div onClick={() => dispatch(loginActions.showLogin(logged ? false : true))} className='flex items-center bg-blue-90 justify-between w-1/6 '>

                           <div className='flex gap-5 items-center'>

                              {/* cart  "/dashboard/cart" */}
                              <figure onClick={cartHandler} className={`relative hover:cursor-pointer `}>
                                 {props.numCartItems && <div className="absolute text-xs text-white text-center scale-75 bg-red-600 rounded-full w-4 h-4 brightness-100 -top-1 left-4 " >{props.numCartItems}</div> }
                                 <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                              </figure>


                              {/* grid */}
                              <NavLink to={logged ? `/dashboard/overview`: currentUrl} className={"brightness-0"}>
                                 <svg  width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke="red" stroke-width="1.5"></path> <path d="M21 9L3 9" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 21L9 9" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                             
                              </NavLink>


                              {/* create */}
                              <NavLink to={logged ? `/dashboard/create` : currentUrl} className={"brightness-0"}>
                                 <svg width="23" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ed0c0c" class="bi bi-plus-circle"><g id="SVGRepo_bgCarrier" stroke-width="1.5"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path> </g></svg>
                              </NavLink>


                              {/* notifications */}
                              <figure onClick={notifyHandler}  className={" relative hover:cursor-pointer"}>
                                 {props.numNotif  && <div className="absolute text-xs text-white text-center scale-75 bg-red-600 rounded-full w-4 h-4 brightness-100 -top-1 left-3 ">{props.numNotif}</div> }
                                 <svg   width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Bell"> <path id="Vector" d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7048 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29476 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                              </figure>

                           </div>

                           <NavLink to={logged ? `/dashboard/settings/general` : currentUrl}>
                                 <Icons src={`${logged ? user.photo : defaultUser}`} alt="user" imgClasses="w-full scale-100" className="  overflow-hidden shadow-inner shadow-gray-400  w-12 h-12 rounded-full "/>
                           </NavLink>

                  </div>
                  
           </Card>

           <section  className="flex gap-6 bg-blue-90  items-center relative ">

              {logged ?  cartShow && props.cartItems > 0 && <NumCartItems items={props.cartItems}/> : undefined }
              {logged ? notifyShow && <NotifyItems items={[1,2,3]}/> : undefined}
            
               
              
               {props.links.map((el,i)=>{
                     return <NavLink  to={`products/${el}`} className={({isActive})=> isActive ? "shadow-inner text-sm shadow-gray-300  capitalize font-medium rounded-full px-4 bg-gray-50 text-black": "  capitalize font-medium  rounded-full px-3 bg-black text-white text-sm" }  key={i}>{el}</NavLink>
               })}
              

           </section>

      </section>
   )
};



