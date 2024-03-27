import React, { useEffect, useState, useRef, useReducer } from 'react'
import ReviewCard from './ReviewCard';
import down from "../../assets/navlogos/down.svg"
import { gsap } from 'gsap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { loginActions, loginUser } from '../../Store/LoginSlice';
import useMutateCart from '../../Hooks/mutate-cart';
import Comment from './Comment';





const ProductDescription = ({data,className}) => {

   const { cartTouched , onCartBtnClick} = useMutateCart(data.id)

   const buttonRef = useRef(null);
   const sizesRef = useRef(null);
   const reviewRef = useRef(null);


   const [btnTouched, setBtnTouched] = useState(false)
   const [reviewTouched, setReviewTouched] = useState(false);
   const [infoTouched, setInfoTouched] = useState(false);
   const [deliveryTouched, setDeliveryTouched] = useState(false);
   const [pseudoReviews,setPseudoreviews] = useState([...data.reviews])


   const logged = useSelector(state => state.login.loggedIn)
   const user = useSelector(state => state.login.user)
   const dispatch = useDispatch()




   console.log(pseudoReviews)


   const onClickSizes = (e) => {
      console.log(e)
      console.log(sizesRef.current.children)
      for(let i = 0;i<sizesRef.current.children.length;i++){
         if(e.target===sizesRef.current.children[i]){
            console.log(true)
            gsap.to(sizesRef.current.children[i],{color:"red",ease:"bounce",backgroundColor:"black",color:"white",ease:"elastic"})
         } else {
             gsap.to(sizesRef.current.children[i],{backgroundColor:"#e6e8e6",color:"black"})
         }
      }
      
   }


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
              <p className='text-xl  font-mono text-yellow-600 '>{`$ ${data.price || "3456"}`}</p>
              <div className='flex gap-2 text-xs'>
                  <p className='px-2 border-2 border-blue-600 rounded-full bg-blue-200 text-blue-600 '>{data.season}</p>
                  <p className='px-2 border-2 border-black rounded-full bg-black text-white'>{data.brand}</p>
              </div>
           </section>




           <section className='flex flex-col gap-4'>
                <h2 className='text-xl'>select size <span className='text-lg text-gray-500 font-mono'>(UK)</span></h2>
                <div ref={sizesRef} onClick={onClickSizes} className='flex gap-2 w-96 flex-wrap'>
                      {data.sizes.map((el , i) => {
                        return (
                              <button  className={`bg-white  w-16 text-lg font-medium border-2  hover:brightness-95 h-10 rounded-md shadow-sm text-black transition-all `}>{el}</button>
                           )
                      })}
                </div>
           </section>



            <section className='flex flex-col  gap-6'>
                  {/* buy */}     
                  <div className='flex  gap-10 relative items-center'>
                     <button ref={buttonRef} onClick = {buttonHandler} className={`text-2xl bg-black  text-white rounded-md w-72 p-3`}>BUY</button>
                        

                     {/* cart  */}
                     <NavLink  onClick={onCartBtnClick} className={`rounded-md  shadow-md w-12 px-2 flex items-center h-full bg-gray-50 `} to={`${user.id === data.seller.id ? `/dashboard/create/${data.id}` : ""  }`}>
                        {user.id === data.seller.id ? <svg  className={`brightness-0 hover:brightness-100`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                              :
                         <svg className={`${cartTouched ? "brightness-100" : "brightness-0"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#f20d0d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        }
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
                           <p>Reviews <span className='text-gray-400 text-xl ml-1 font-sans'>{`(${data.reviews?.length})`}</span></p>

                           <figure>
                           
                              <img className={`${reviewTouched ? "rotate-180":" "}`} src={down} alt="down" />
                           
                           </figure>
                    </div>

                    {reviewTouched && 
                        <main ref={reviewRef} className='flex-col flex mb-12 gap-4'>
                           {logged && <Comment setPseudoReview={setPseudoreviews} userId={user.id}  user={user} productSellerId={data.seller.id} productId={data.id}/>}
                              {pseudoReviews.map((el,i) => {
                                 console.log(el.user)
                                 return (
                                    <ReviewCard review={el} key={i+1} className="w-full text-sm border-b-2 border-gray-200 " />
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