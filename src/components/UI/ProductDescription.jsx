import React, { useEffect, useState, useRef, useReducer } from 'react'
import ReviewCard from './ReviewCard';
import down from "../../assets/navlogos/down.svg"
import { gsap } from 'gsap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { loginActions, loginUser } from '../../Store/LoginSlice';





export const Button = (props) => {
   const [sizeTouched, setSizeTouched] = useState(false);

   return (
      <button onClick={() => setSizeTouched(state => !state)} className={`bg-whie w-16 text-lg font-medium border-2  hover:border-black h-10 rounded-md shadow-sm text-black transition-all ${sizeTouched && "  bg-black text-white"}`}>{props.children}</button>
   )
}


const ProductDescription = ({data,className}) => {

   const buttonRef = useRef(null);
   const reviewRef = useRef(null);

   const [btnTouched, setBtnTouched] = useState(false)
   const [reviewTouched, setReviewTouched] = useState(false);
   const [infoTouched, setInfoTouched] = useState(false);
   const [deliveryTouched, setDeliveryTouched] = useState(false);

   const logged = useSelector(state => state.login.loggedIn)
   const user = useSelector(state => state.login.user)
   const dispatch = useDispatch()

   const onClickBtn = () => {
      dispatch(loginUser())
   }


   


   const navigate = useNavigate();

   const buttonHandler = (e) => {
      setBtnTouched(true)
      dispatch(loginActions.showLogin(logged ? false : true))
      setTimeout(() => {
         // navigate("/")
      }, 500);
   }


   useEffect(()=>{
      if(btnTouched) {
         console.log(buttonRef.current.clientWidth)
         gsap.to(buttonRef.current,{backgroundColor:"#fbf8f8" ,ease:"bounce", color:"black", borderColor:"black" , borderWidth:"2"})
      } 

      if(reviewTouched) {
         gsap.to(reviewRef.current,{ease:"elastic"})
      }
   
   },[btnTouched, reviewTouched]);

   


  return (

      <div className={`${className} flex flex-col gap-10 text-black`}>


           <section className='flex flex-col gap-3  '>
              <h1 className='text-3xl '>{data.name || "Jordan"}</h1>
              <p className='text-xl  font-mono text-yellow-600'>{`$ ${data.price || "3456"}`}</p>
              <div className='flex gap-2 text-xs'>
                  <p className='px-2 border-2 border-blue-600 rounded-full bg-blue-200 text-blue-600 '>{data.season}</p>
                  <p className='px-2 border-2 border-black rounded-full bg-black text-white'>{data.brand}</p>
              </div>
           </section>




           <section className='flex flex-col gap-4'>
                <h2 className='text-xl'>select size <span className='text-lg text-gray-500 font-mono'>(UK)</span></h2>
                <div className='flex gap-2 w-96 flex-wrap'>
                      {data.sizes.map((el , i) => {
                        return (
                              <Button>{el}</Button>
                           )
                      })}
                </div>
           </section>



            <section className='flex flex-col  gap-6'>
                  {/* buy */}     
                  <div className='flex  gap-10 relative items-center'>
                     <button ref={buttonRef} onClick = {buttonHandler} className={`text-2xl bg-black  text-white rounded-md w-72 p-3`}>BUY</button>
                        
                     <NavLink className={" rounded-md bg-gray-50 shadow-md w-12 px-2 flex items-center h-full"} to={""}>
                        <svg className='hover:brightness-100 brightness-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#f20d0d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                     </NavLink>
                  </div>
                  
                  <main className='w-3/4 text-sm font-normal'>
                     <p>{data.description || "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including "}</p>
                  </main>
            </section>



            <section className='flex flex-col text-black'>

                 {/* reviews👇 */}

                 <section className='text-xl font-medium flex flex-col w-3/4  gap-8'>
                    <div onClick={() => setReviewTouched(state => !state)} className='flex justify-between hover:border-black border-t-2  border-gray-300 py-4 px-2'>
                           <p>Reviews <span className='text-gray-400 text-xl ml-1 font-sans'>{`(${data.reviews?.length || 99})`}</span></p>

                           <figure>
                           
                              <img className={`${reviewTouched ? "rotate-180":" "}`} src={down} alt="down" />
                           
                           </figure>
                    </div>

                    {reviewTouched && 
                        <main ref={reviewRef} className='flex-col flex mb-12 gap-4'>
                              {data.reviews.map((el,i) => {
                                 console.log(el.user)
                                 return (
                                    <ReviewCard review={el} key={i+1} className="w-full text-sm  hover:border-l-4 hover:shadow-xl border-rose-500 shadow-md shadow-rose-100" />
                                 )
                              })}
                        </main>
                     }
                 </section>




                 {/* Product info 👇 */}

                 <section className='text-xl font-medium flex flex-col w-3/4  gap-8'>
                    <div onClick={() => setInfoTouched(state => !state)} className='flex justify-between hover:border-black border-t-2  border-gray-300 py-4 px-2'>
                           <p>Product Information</p>

                           <figure>
                           
                              <img className={`${infoTouched ? "rotate-180":" "}`} src={down} alt="down" />
                           
                           </figure>
                    </div>

                    {infoTouched && 
                        <main className='flex-col flex gap-4 text-black text-md font-normal font-sans text-base mb-12 px-4'>
                              <p>{"Declaration of Importer: Direct import by the individual customer"}</p>
                        </main>
                     }
                 </section>



                  {/* delivery 👇 */}

                  <section className='text-xl font-medium flex flex-col w-3/4  gap-8'>
                    <div onClick={() => setDeliveryTouched(state => !state)} className='flex justify-between hover:border-black border-t-2  border-gray-300 py-4 px-2'>
                           <p>Delivery & Returns</p>

                           <figure>
                           
                              <img className={`${deliveryTouched ? "rotate-180":" "}`} src={down} alt="down" />
                           
                           </figure>
                    </div>

                    {deliveryTouched && 
                        <main className='flex-col flex gap-4 text-black text-md font-normal  font-sans text-base px-4'>
                              <p>All purchases are subject to delivery fees.</p>

                              <li>Standard delivery 4–9 business days</li>
                              <p>Orders are processed and delivered Monday–Friday (excluding public holidays)</p>
                        </main>
                     }
                 </section>



                 


            </section>
            
      </div>
  )
}

export default ProductDescription