import { useRef, useEffect,useState } from 'react';
import Card from './Card';
import sliderArrow from "../../assets/navlogos/sliderArrow.svg"
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


function Carousal(props) {
  const [count, setCount] = useState(0)

  const mainRef = useRef(null)
  const parentDivRef = useRef(null)
  const stepDiv = props.stepDivided || 3


  useEffect(()=>{

   const childCount = Array.from(parentDivRef.current.children).length ;
   const parentWidth = parentDivRef.current.clientWidth
   // const stepCount = Math.trunc(childCount/stepDiv) 
   const stepCount = Math.trunc(childCount) 
   const step = Math.trunc(parentWidth / stepCount)

    
    
   if(count > 0) {
      gsap.to(parentDivRef.current , {
         translateX : - (step * count),
         ease:"power3",
      })
   }

   if (count === stepCount) {
      
         gsap.to(parentDivRef.current , {
          translateX : 0
         })

         setCount(0)
   }

  },[count])

  const clickHandler = (e) => {
    setCount(prev => prev + 1)
  }


   return (
      <main ref={mainRef} className={`overflow-hidden ${props.className} relative `}>
         <div ref={parentDivRef} className={`flex gap-5  flex-shrink-0 w-fit`}>{props.children}</div>
         <figure onClick={clickHandler} className={`p-3 -translate-y-1/2  absolute top-1/2  right-1 rounded-full bg-red-500 hover:cursor-pointer hover:bg-black `}>
            <img src={sliderArrow} alt="slider arrow" />
         </figure>
      </main>
   )
}




export default Carousal