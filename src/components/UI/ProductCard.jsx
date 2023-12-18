import {useRef,useEffect,useState} from 'react'
import Card from '../Utilities/Card'
import hero from "../../assets/headerImg/hero.jpg"
import { gsap } from 'gsap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import arrowRight from "../../assets/navlogos/arrowright.svg";
import Icons from '../Utilities/Icons';
import bag  from "../../assets/navlogos/bag.svg";
import filledbag  from "../../assets/navlogos/filledbag.svg";
import {ProductCardRating,Rating} from '../Utilities/Rating';
import { loginActions } from '../../Store/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';





/** PROPS LIST TO BE IMPLEMENTED
 * 
 *  props.heading
 *  props.para
 *  props.src
 *  props.alt
 *  props.className
 * 
 * implementing wishlist rendering (i.e changing color) based on data from database for a perticular user 
 */



function ProductCard(props) {
  
  const navigate = useNavigate()


  const [hover,setHover] = useState(false);
  const [clicked,setClicked] = useState(false);
  


  const onClickHandler = (e) => {
     setClicked(state => !state);
  };

  const mainRef = useRef(null);



  useEffect(()=>{

     gsap.fromTo(mainRef.current,{y:50},{translateY:0,ease:"elastic",duration:1})

  },[hover]);

  return (
    <div   className={`bg-red-700 ${props.className} h-96 w-80 rounded-md relative `}>

        {hover &&
                 <figure  onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} onClick={onClickHandler}>
                     <Icons  className={`absolute ${clicked ? "scale-105":""} bg-neutral-100  hover:bg-neutral-50 p-1  z-10 top-2 right-3 rounded-md`} src={clicked ? filledbag:bag}/>
                 </figure>
         }

          
        <img onMouseEnter={()=> setHover(true)} onClick={(e)=> navigate(`/product/${props?.productId}`)} onMouseLeave={()=> setHover(false)} className="h-full w-full rounded-md hover:cursor-pointer hover:brightness-75" src={hero} alt="product" />

       
       {/* {hover && 
           <main ref={mainRef} className='w-full h-16 gap-1 rounded-t-none rounded-b-sm absolute -bottom-1 flex flex-col py-1 px-2 bg-white text-black'  onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
               <h5 className='font-bold text-xl tracking-wider'>Men's Tree Piper</h5>
               <p  className="font-normal text-sm">classic color, natural black, comfortable</p>
           </main>
       } */}


       {hover && 
           <main ref={mainRef} className='w-full h-16 rounded-t-none rounded-b-sm absolute -bottom-1 flex   bg-white text-black'  onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
               <section className='flex flex-col py-1 pl-2 gap-1 rounded-r-sm w-5/6  bg-blue-20'>
                  <div className='flex gap-4 '>
                    <p  className="font-semibold text-sm text-white bg-black rounded-full px-2">$325</p>
                    <ProductCardRating className="gap-0" rating="4.5" numReviews="121"/>
                  </div>
                  <p className='font-semibold text-lg tracking-wider truncate'>Jordan of Nike</p>
               </section>
               
               <Link to={`/product/${props?.productId}`} className='hover:bg-white p-2 flex bg-red-600 w-1/6'><img src={arrowRight} className="self-center" alt="link arrow"/></Link>
           </main>
       }

       
       {props.productRank && <span className='text-white p-2 absolute z-1 -top-3 -left-4  bg-transparent shadow-x  text-5xl text-center rounded-full font-semibold tracking-wide'>{props.productRank === "1" ? "🥇": props.productRank === "2" ? "🥈" : "🥉"}</span>}
      
    </div>
  )
}


export const ProdCard = (props) =>{
  
  const navigate = useNavigate();
  const logged = useSelector(state => state.login.loggedIn)
  const dispatch = useDispatch()

  const onCartBtnClick = () => {
    dispatch(loginActions.showLogin(logged ? false : true))
  }

  return (
      <Card className = {`flex flex-col gap-2 h-98 bg-red-90 rounded-lg text-black  ${props.className}`}>

        <figure className="relative w-72 h-3/4 rounded-lg overflow-hidde ">
           <img src={props.coverImage || hero} onClick={()=> navigate(`/product/${props.id}`)} className='w-full h-full rounded-lg hover:cursor-pointer hover:brightness-90' alt="" />
      
           <div className='bg-white absolute -bottom-2 -right-2 p-3 rounded-full '>
              <div onClick={onCartBtnClick} className={" p-2 bg-red-600 rounded-full hover:cursor-pointer hover:scale-125 transition-all"}>
                    <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
           </div>
        </figure>


        <section className='flex flex-col h-1/4 px-2 gap-4 rounded-lg'>
          <div className='flex flex-col gap-1'>
             <ProductCardRating rating={props.rating || "4.8"} numReviews={props.ratingQuantity || "742"}/>
             <p onClick={()=> navigate(`/product/${props.id}`)} className='text-sm font-semibold hover:cursor-pointer hover:text-gray-400'>{props.name || "Men AIR MAX SOLO Sneakers"}</p>
          </div>

          <span className='font-semibold text-sm text-yellow-5 px-2 rounded-full w-fit bg-yellow-200'>{props.price ? `$${props.price}` : "$444"}</span>
        </section>



      </Card>
  )
}



export default ProductCard
