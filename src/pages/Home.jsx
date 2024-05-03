import { useRef,useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import HeroCarosal from './../components/UI/HeroCarosal';
import hero2 from "../assets/headerImg/hero2.jpg";
import Card from '../components/Utilities/Card';
import Footer from '../components/UI/Footer';
import Categories from '../components/UI/home/Categories';
import Reviews from '../components/UI/home/Reviews';
import Brands from '../components/UI/home/Brands';
import { NavLink } from 'react-router-dom';
import useHomeProducts from '../Hooks/home-products';
import CarousalShow from '../components/UI/CarousalShow';
import ScrollDownAnimation from '../components/Utilities/ScrollDownAnimation';



gsap.registerPlugin(ScrollTrigger);


const Home = (props) => {
   
   const {mostRated,mostBought} = useHomeProducts()
   const brandsRef = useRef(null);

  useEffect(()=>{
    brandsRef.current !== null && ScrollDownAnimation(brandsRef.current)
  },[brandsRef])

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


      <CarousalShow  heading={"Bestsellers"} linkToMore={`/products/all`} arr={mostRated} />

      <Categories/>
      
      <Reviews/>

      <CarousalShow  heading={"Most Bought"} linkToMore={`/products/all`} arr={mostBought}/>


      <Card className="text-black px-20 my-12 w-fit tracking-wide font-medium text-2xl flex flex-col gap-3 bg-red-90 ">
         <div ref={brandsRef} className={`flex w-full translate-x-1/2 opacity-0 justify-between items-center`}>
               <p className='text-3xl font-extrabold uppercase'>Brands</p>
               <NavLink to="/products/all" className={"text-sm hover:underline text-gray-500 font-semibold"}>View all</NavLink>
         </div>

         <Brands/>
      </Card>

         <Footer/>
    </Card>
  )
}


export default Home
