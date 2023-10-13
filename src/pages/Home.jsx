import { OneLineBanner } from '../components/UI/Navigations';
import { useRef,useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import HeroCarosal from './../components/UI/HeroCarosal';
import hero from "../assets/headerImg/hero.jpg"
import hero2 from "../assets/headerImg/hero2.jpg";
import ProductCard,{ProdCard} from "../components/UI/ProductCard";
import Card from '../components/Utilities/Card';
import Carousal from '../components/Utilities/Carousal';
import NewsLetter from '../components/UI/NewsLetter';
import Footer from '../components/UI/Footer';
import Categories from '../components/UI/home/Categories';
import Reviews from '../components/UI/home/Reviews';
import Brands from '../components/UI/home/Brands';
import { NavLink } from 'react-router-dom';








gsap.registerPlugin(ScrollTrigger);




const Home = (props) => {


   const arrivalsRef = useRef(null);

   useEffect(()=>{
      gsap.fromTo(arrivalsRef.current,{scale:0, opacity:0,x:"1000vh"},{
         scale:1, 
         x:0,
         ease:"power3",
         duration:1,
         opacity:1,
         scrollTrigger:{
            trigger:arrivalsRef.current,
            // markers:true,
            start:"top 90%",
            end:"bottom 65%"
         }
      })
   },[])

  return (
    <Card className={`flex flex-col gap-28 overflow-hidden  relative`}>

        <section className='flex flex-col gap-6 '>
           <HeroCarosal src={hero2} className={`h-100 relative rounded-lg z-40`}/>
           <section className='flex pl-10 gap-10 text-black'>
               <Card className="font-semibold text-sm"><span className='text-2xl'>🚚 </span> Short supply chain</Card>
               <Card className="font-semibold text-sm"><span className='text-2xl'>⚖️ </span> Fair prices</Card>
               <Card className="font-semibold text-sm"><span className='text-2xl'>🏅 </span> High quality</Card>
               <Card className="font-semibold text-sm"><span className='text-2xl'>🌿 </span> Transparency</Card>
               <Card className="font-semibold text-sm"><span className='text-2xl'>📦 </span> Bulk packaging</Card>
               <Card className="font-semibold text-sm"><span className='text-2xl'>🫂 </span> Community</Card>
               <Card className="font-semibold text-sm"><span className='text-2xl'>🚀 </span> Fast delivery</Card>
           </section>
        </section>

         <Card className="text-black my-12 px-28 tracking-wide font-medium text-2xl flex flex-col gap-3 bg-red-40 ">
             <div ref={arrivalsRef} className="self-start flex w-full justify-between items-center">
               <p className='text-3xl font-extrabold uppercase'>bestsellers</p>
               <NavLink to="/products/brands" className={"text-sm hover:underline text-gray-500 font-semibold"}>View all</NavLink>
            </div>
             <Carousal>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
             </Carousal>
         </Card>


         <Categories/>
         <Reviews/>


         <Card className="text-black px-28 tracking-wide font-medium text-2xl flex flex-col gap-3 bg-red-40 my-12 ">
             <div ref={arrivalsRef} className="self-start flex w-full justify-between items-center">
               <p className='text-3xl font-extrabold uppercase'>chosen for you</p>
               <NavLink to="/products/brands" className={"text-sm hover:underline text-gray-500 font-semibold"}>View all</NavLink>
            </div>
             <Carousal>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
             </Carousal>
         </Card>

         <Card className="text-black px-28 my-12 w-fit tracking-wide font-medium text-2xl flex flex-col gap-3 bg-red-90 ">
             <div ref={arrivalsRef} className="self-start flex w-full justify-between  items-center bg-red-30">
               <p className='text-3xl font-extrabold uppercase'>Brands</p>
               <NavLink to="/products/brands" className={"text-sm hover:underline text-gray-500 font-semibold"}>View all</NavLink>
            </div>

             <Brands/>
         </Card>

         {/* <NewsLetter/> */}
         <Footer/>
    </Card>
  )
}


export default Home
