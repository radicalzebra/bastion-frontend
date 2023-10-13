import React, { useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../../Utilities/Card'
import defaultUser from "../../../assets/navlogos/defaultUser.svg"




//Note: Remember the brightness trick for svg state  with Navlink without using state management 👇

 export function DashLinks(props) {
  return (
    <Card className="w-1/6  shadow-md  p-6 uppercase flex flex-col text-md gap-2 rounded-md pl-4  text-black h-screen justify-between">
              
                 <div className='flex flex-col gap-3'>

                        <NavLink className={({isActive}) => isActive ? "text-red-500 font-semibold flex  gap-2 underline": " flex  gap-2 "} end to={"/dashboard/overview"}>
                           <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.32 11.9999C20.92 11.9999 22 10.9999 21.04 7.71994C20.39 5.50994 18.49 3.60994 16.28 2.95994C13 1.99994 12 3.07994 12 5.67994V8.55994C12 10.9999 13 11.9999 15 11.9999H18.32Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.9999 14.7C19.0699 19.33 14.6299 22.69 9.57993 21.87C5.78993 21.26 2.73993 18.21 2.11993 14.42C1.30993 9.39001 4.64993 4.95001 9.25993 4.01001" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                           <p>Overview</p>
                        </NavLink>

                        <NavLink className={({isActive}) => isActive ? "text-red-500 font-semibold flex  gap-2 underline": " flex  gap-2"} end to={"/dashboard/products"}>
                              <svg width="20" viewBox="0 0 24 24" id="meteor-icon-kit__regular-products" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 9C9.44771 9 9 9.44771 9 10V21C9 21.5523 9.44771 22 10 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H10ZM15 7V3C15 2.44772 14.5523 2 14 2H3C2.44772 2 2 2.44772 2 3V14C2 14.5523 2.44772 15 3 15H7V10C7 8.34315 8.34315 7 10 7H15ZM17 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H10C8.34315 24 7 22.6569 7 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H14C15.6569 0 17 1.34315 17 3V7Z" fill="#212121"></path></g></svg>
                              <p>Products</p>
                        </NavLink>

                        <NavLink className={({isActive}) => isActive ? "text-red-500 font-semibold flex  gap-2 underline": " flex  gap-2"} end to={"/dashboard/orders"}>
                           <svg  width="20" viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="9.216"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.048"></g><g id="SVGRepo_iconCarrier"><path d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z" fill=""></path></g></svg>
                           <p>Orders</p>
                        </NavLink>

                        {/* <NavLink className={""}>Checkout</NavLink>  */}
                        <NavLink className={({isActive}) => isActive ? "text-red-500 font-semibold flex  gap-2 underline": " flex  gap-2"} end to={"/dashboard/settings"}>
                           <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="2"></circle> <path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#1C274C" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                           <p>Settings</p>
                        </NavLink>
                 </div>
                  <NavLink className={"flex gap-2 items-center hover:font-medium "} end to={"/dashboard/overview"}>
                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p>Logout</p>
                  </NavLink>

     </Card>
  )
}


const touchedReducer = (state,action) => {
    if(action==="overview") return {val:action}
    if(action==="products") return {val:action}
    if(action==="orders") return {val:action}
    if(action==="cart")  return {val:action}
    if(action==="settings")  return {val:action}
    if(action==="notifications") return {val:action}
    if(action==="logout") return {val:action}
    if(action==="pic") return  {val:action}
    

   //  return {val:false}
};

export function DashboardLayout(props) {

   const [touched,dispatchFn] = useReducer(touchedReducer,{val:false})

  return (
    <section className='flex flex-col bg-gray-00  w-24 py-8 gap-8 items-center h-screen  rounded-md  '>

         
            <Card className="flex flex-col gap-8 bg-blue-90 h-2/3">

                {/* Overview */}
               <NavLink className={({isActive}) => isActive ? ` brightness-100`: "brightness-0 hover:brightness-100"} to={"/dashboard/overview"}>
                  <svg  width="23px" height="25px" viewBox="0 0 24 24" id="meteor-icon-kit__regular-dashboard" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V6C2 6.55228 2.44772 7 3 7H6C6.55228 7 7 6.55228 7 6V3C7 2.44772 6.55228 2 6 2H3ZM3 0H6C7.65685 0 9 1.34315 9 3V6C9 7.65685 7.65685 9 6 9H3C1.34315 9 0 7.65685 0 6V3C0 1.34315 1.34315 0 3 0ZM14 16H21C22.6569 16 24 17.3431 24 19V21C24 22.6569 22.6569 24 21 24H14C12.3431 24 11 22.6569 11 21V19C11 17.3431 12.3431 16 14 16ZM14 18C13.4477 18 13 18.4477 13 19V21C13 21.5523 13.4477 22 14 22H21C21.5523 22 22 21.5523 22 21V19C22 18.4477 21.5523 18 21 18H14ZM3 11H6C7.65685 11 9 12.3431 9 14V21C9 22.6569 7.65685 24 6 24H3C1.34315 24 0 22.6569 0 21V14C0 12.3431 1.34315 11 3 11ZM3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H6C6.55228 22 7 21.5523 7 21V14C7 13.4477 6.55228 13 6 13H3ZM21 0C22.6569 0 24 1.34315 24 3V11C24 12.6569 22.6569 14 21 14H14C12.3431 14 11 12.6569 11 11V3C11 1.34315 12.3431 0 14 0H21ZM13 3V11C13 11.5523 13.4477 12 14 12H21C21.5523 12 22 11.5523 22 11V3C22 2.44772 21.5523 2 21 2H14C13.4477 2 13 2.44772 13 3Z" fill="#d41c1c"></path></g></svg>
               </NavLink>

                {/* products */}
                <NavLink className={({isActive}) => isActive ? ` brightness-100`: "brightness-0 hover:brightness-100"} to={"/dashboard/products"}>
                  {/* <svg width="23px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.3697 4.89012L13.5097 2.28012C12.6497 1.90012 11.3497 1.90012 10.4897 2.28012L4.62969 4.89012C3.14969 5.55012 2.92969 6.45012 2.92969 6.93012C2.92969 7.41012 3.14969 8.31012 4.62969 8.97012L10.4897 11.5801C10.9197 11.7701 11.4597 11.8701 11.9997 11.8701C12.5397 11.8701 13.0797 11.7701 13.5097 11.5801L19.3697 8.97012C20.8497 8.31012 21.0697 7.41012 21.0697 6.93012C21.0697 6.45012 20.8597 5.55012 19.3697 4.89012Z" fill="#e41717"></path> <path opacity="0.4" d="M12.0003 17.04C11.6203 17.04 11.2403 16.96 10.8903 16.81L4.15031 13.81C3.12031 13.35 2.32031 12.12 2.32031 10.99C2.32031 10.58 2.65031 10.25 3.06031 10.25C3.47031 10.25 3.80031 10.58 3.80031 10.99C3.80031 11.53 4.25031 12.23 4.75031 12.45L11.4903 15.45C11.8103 15.59 12.1803 15.59 12.5003 15.45L19.2403 12.45C19.7403 12.23 20.1903 11.54 20.1903 10.99C20.1903 10.58 20.5203 10.25 20.9303 10.25C21.3403 10.25 21.6703 10.58 21.6703 10.99C21.6703 12.11 20.8703 13.35 19.8403 13.81L13.1003 16.81C12.7603 16.96 12.3803 17.04 12.0003 17.04Z" fill="#e12424"></path> <path opacity="0.4" d="M12.0003 22C11.6203 22 11.2403 21.92 10.8903 21.77L4.15031 18.77C3.04031 18.28 2.32031 17.17 2.32031 15.95C2.32031 15.54 2.65031 15.21 3.06031 15.21C3.47031 15.21 3.80031 15.54 3.80031 15.95C3.80031 16.58 4.17031 17.15 4.75031 17.41L11.4903 20.41C11.8103 20.55 12.1803 20.55 12.5003 20.41L19.2403 17.41C19.8103 17.16 20.1903 16.58 20.1903 15.95C20.1903 15.54 20.5203 15.21 20.9303 15.21C21.3403 15.21 21.6703 15.54 21.6703 15.95C21.6703 17.17 20.9503 18.27 19.8403 18.77L13.1003 21.77C12.7603 21.92 12.3803 22 12.0003 22Z" fill="#c11a1a"></path> </g></svg> */}
                  <svg  width="23px" height="25px" fill="#e41717"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M4,8 L14,8 C15.1045695,8 16,8.8954305 16,10 L16,20 C16,21.1045695 15.1045695,22 14,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,10 C2,8.8954305 2.8954305,8 4,8 Z M4,10 L4,20 L14,20 L14,10 L4,10 Z M17,19 L17,8 C17,7.44771525 16.5522847,7 16,7 L5,7 C5,5.8954305 5.8954305,5 7,5 L17,5 C18.1045695,5 19,5.8954305 19,7 L19,17 C19,18.1045695 18.1045695,19 17,19 Z M20,16 L20,5 C20,4.44771525 19.5522847,4 19,4 L8,4 C8,2.8954305 8.8954305,2 10,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,14 C22,15.1045695 21.1045695,16 20,16 Z"></path> </g></svg>
                </NavLink>


                {/* Orders */}
                <NavLink className={({isActive}) => isActive ? ` brightness-100`: "brightness-0 hover:brightness-100"} to={"/dashboard/orders"}>
                  <svg width="23px" height="25px"  viewBox="0 0 1024 1024" fill="#db1f1f" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M959.018 208.158c0.23-2.721 0.34-5.45 0.34-8.172 0-74.93-60.96-135.89-135.89-135.89-1.54 0-3.036 0.06-6.522 0.213l-611.757-0.043c-1.768-0.085-3.563-0.17-5.424-0.17-74.812 0-135.67 60.84-135.67 135.712l0.188 10.952h-0.306l0.391 594.972-0.162 20.382c0 74.03 60.22 134.25 134.24 134.25 1.668 0 7.007-0.239 7.1-0.239l608.934 0.085c2.985 0.357 6.216 0.468 9.55 0.468 35.815 0 69.514-13.954 94.879-39.302 25.373-25.34 39.344-58.987 39.344-94.794l-0.145-12.015h0.918l-0.008-606.41z m-757.655 693.82l-2.585-0.203c-42.524 0-76.146-34.863-76.537-79.309V332.671H900.79l0.46 485.186-0.885 2.865c-0.535 1.837-0.8 3.58-0.8 5.17 0 40.382-31.555 73.766-71.852 76.002l-10.816 0.621v-0.527l-615.533-0.01zM900.78 274.424H122.3l-0.375-65.934 0.85-2.924c0.52-1.82 0.782-3.63 0.782-5.247 0-42.236 34.727-76.665 78.179-76.809l0.45-0.068 618.177 0.018 2.662 0.203c42.329 0 76.767 34.439 76.767 76.768 0 1.326 0.196 2.687 0.655 4.532l0.332 0.884v68.577z" fill=""></path><path d="M697.67 471.435c-7.882 0-15.314 3.078-20.918 8.682l-223.43 223.439L346.599 596.84c-5.544-5.603-12.95-8.69-20.842-8.69s-15.323 3.078-20.918 8.665c-5.578 5.518-8.674 12.9-8.7 20.79-0.017 7.908 3.07 15.357 8.69 20.994l127.55 127.558c5.57 5.56 13.01 8.622 20.943 8.622 7.925 0 15.364-3.06 20.934-8.63l244.247-244.247c5.578-5.511 8.674-12.883 8.7-20.783 0.017-7.942-3.079-15.408-8.682-20.986-5.552-5.612-12.958-8.698-20.85-8.698z" fill=""></path></g></svg> 
                </NavLink>

                {/* Cart */}
                <NavLink className={({isActive}) => isActive ? ` brightness-100`: "brightness-0 hover:brightness-100"} to={"/dashboard/cart"}>
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#f20d0d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </NavLink>
                
                {/* Settings */}
                <NavLink end className={({isActive}) => isActive ? ` brightness-100`: "brightness-0 hover:brightness-100"} to={"/dashboard/settings"}>
                     <svg width="23px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#fc1d1d"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.2954 1.25 10.6519 1.44359 9.94858 1.77037C9.26808 2.08656 8.48039 2.55304 7.49457 3.13685L6.74148 3.58283C5.75533 4.16682 4.96771 4.63324 4.36076 5.07944C3.73315 5.54083 3.25177 6.01311 2.90334 6.63212C2.55548 7.25014 2.39841 7.91095 2.32306 8.69506C2.24999 9.45539 2.24999 10.3865 2.25 11.556V12.444C2.24999 13.6135 2.24999 14.5446 2.32306 15.3049C2.39841 16.0891 2.55548 16.7499 2.90334 17.3679C3.25177 17.9869 3.73315 18.4592 4.36076 18.9206C4.96771 19.3668 5.75533 19.8332 6.74148 20.4172L7.4946 20.8632C8.48038 21.447 9.2681 21.9135 9.94858 22.2296C10.6519 22.5564 11.2954 22.75 12 22.75C12.7046 22.75 13.3481 22.5564 14.0514 22.2296C14.7319 21.9134 15.5196 21.447 16.5054 20.8632L17.2585 20.4172C18.2446 19.8332 19.0323 19.3668 19.6392 18.9206C20.2669 18.4592 20.7482 17.9869 21.0967 17.3679C21.4445 16.7499 21.6016 16.0891 21.6769 15.3049C21.75 14.5446 21.75 13.6135 21.75 12.4441V11.556C21.75 10.3866 21.75 9.45538 21.6769 8.69506C21.6016 7.91095 21.4445 7.25014 21.0967 6.63212C20.7482 6.01311 20.2669 5.54083 19.6392 5.07944C19.0323 4.63324 18.2447 4.16683 17.2585 3.58285L16.5054 3.13685C15.5196 2.55303 14.7319 2.08656 14.0514 1.77037C13.3481 1.44359 12.7046 1.25 12 1.25ZM8.22524 4.44744C9.25238 3.83917 9.97606 3.41161 10.5807 3.13069C11.1702 2.85676 11.5907 2.75 12 2.75C12.4093 2.75 12.8298 2.85676 13.4193 3.13069C14.0239 3.41161 14.7476 3.83917 15.7748 4.44744L16.4609 4.85379C17.4879 5.46197 18.2109 5.89115 18.7508 6.288C19.2767 6.67467 19.581 6.99746 19.7895 7.36788C19.9986 7.73929 20.1199 8.1739 20.1838 8.83855C20.2492 9.51884 20.25 10.378 20.25 11.5937V12.4063C20.25 13.622 20.2492 14.4812 20.1838 15.1614C20.1199 15.8261 19.9986 16.2607 19.7895 16.6321C19.581 17.0025 19.2767 17.3253 18.7508 17.712C18.2109 18.1089 17.4879 18.538 16.4609 19.1462L15.7748 19.5526C14.7476 20.1608 14.0239 20.5884 13.4193 20.8693C12.8298 21.1432 12.4093 21.25 12 21.25C11.5907 21.25 11.1702 21.1432 10.5807 20.8693C9.97606 20.5884 9.25238 20.1608 8.22524 19.5526L7.53909 19.1462C6.5121 18.538 5.78906 18.1089 5.24923 17.712C4.72326 17.3253 4.419 17.0025 4.2105 16.6321C4.00145 16.2607 3.88005 15.8261 3.81618 15.1614C3.7508 14.4812 3.75 13.622 3.75 12.4063V11.5937C3.75 10.378 3.7508 9.51884 3.81618 8.83855C3.88005 8.1739 4.00145 7.73929 4.2105 7.36788C4.419 6.99746 4.72326 6.67467 5.24923 6.288C5.78906 5.89115 6.5121 5.46197 7.53909 4.85379L8.22524 4.44744Z" fill="#fc1d1d"></path> </g></svg>
                </NavLink>
                
            </Card>
                



            <Card className="flex flex-col justify-between items-center h-1/4">
                  {/* User */}
                  <NavLink to="/dashboard/settings/general" className="bg-gray-100 border-red-500 border-2 p-1 rounded-full">
                    <img src={props.img || defaultUser} alt="user" />
                  </NavLink>
                  
                  {/* Notification */}
                  <NavLink className={({isActive}) => isActive ? ` brightness-100`: "brightness-0 hover:brightness-100"} end to={"/dashboard/settings/notifications"}>
                     <svg width="23px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="#ee1111" stroke-width="1.5"></path> <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="#ee1111" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>         
                  </NavLink>
                  
                  {/* Logout */}
                  <NavLink className={`hover:brightness-100 brightness-0`} to={"/"}>
                    <svg width="23px" height="25px" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 6.07026C18.3912 7.45349 20 10.0389 20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 10.0389 5.60879 7.45349 8 6.07026M12 3V13" stroke="#ee1717" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                  </NavLink>
            </Card>

         

    </section>
  )
}