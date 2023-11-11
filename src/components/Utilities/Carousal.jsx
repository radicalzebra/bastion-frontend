import { useRef, useEffect,useState } from 'react';
import Card from './Card';
import sliderArrow from "../../assets/navlogos/sliderArrow.svg"
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


// function Carousal(props) {
//    const [counter,setCounter] = useState(0);

//    const parentDivRef = useRef(null);
//    const mainRef = useRef(null);

//    const half = Math.round((props.children.length / 2)) ;


//    const productWidth = (parentDivRef.current?.children[0].offsetWidth + parentDivRef.current?.children[1].offsetWidth )/2 ;
//    // console.log(-JSON.stringify(productWidth * counter), "111")
//    console.log(props.children.length, "222");
//    console.log(counter, "333");

//    const onClickHandler = (e) => {
      
//        if(counter >= 0)  setCounter(state => state + 1);
      
//        if(counter === props.children.length - half) setCounter(state => -state + 1);

//        if(counter < 0) setCounter(state => state + 1);

//    };
         


//    useEffect(()=>{
//         gsap.to(parentDivRef.current,{ease:"power3", duration:0.5, translateX: Math.sign(counter) === 1 ? productWidth * counter : Math.sign(counter) === -1 ? (productWidth * counter) : counter });
//    },[counter])


//    return (
//       <main ref={mainRef} className={`overflow-hidden ${props.className} relative`}>
//          <div ref={parentDivRef} className={`flex gap-5  flex-shrink-0 `}>{props.children}</div>
//          <figure onClick={onClickHandler} className={`p-3 -translate-y-1/2  absolute top-1/2 z-90 right-2 rounded-full bg-red-500 hover:cursor-pointer hover:bg-black `}>
//             <img src={sliderArrow} alt="slider arrow" />
//          </figure>
//       </main>
//    )
// }





//very beautifully done slider , please learn from this

function Carousal(props) {
  const [count, setCount] = useState(0)

  const mainRef = useRef(null)
  const parentDivRef = useRef(null)
  const stepDiv = props.stepDivided || 3


  useEffect(()=>{

   //  const childCount = Array.from(parentDivRef.current.children).reduce((acc, cur) => acc + 1, 0) ;
    const childCount = Array.from(parentDivRef.current.children).length ;
    const parentWidth = parentDivRef.current.clientWidth
    const stepCount = Math.trunc(childCount/stepDiv) 
    const step = Math.trunc(parentWidth/stepCount)

    
    
    if(count > 0) {
      // console.log(parentWidth,step, parentWidth-step)

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

   console.log(mainRef.current.clientWidth)
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
