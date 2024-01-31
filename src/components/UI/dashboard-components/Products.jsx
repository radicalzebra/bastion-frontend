import React, { useEffect, useRef, useState } from 'react'
import Card from '../../Utilities/Card'
import {ProdCard} from '../ProductCard'
import { gsap } from 'gsap/all'








function Products(props) {

    const [hover, setHover] = useState(false)
    const [touched, setTouched] = useState(false)


    const sectionRef = useRef(null);

    useEffect(()=>{
      console.log(sectionRef.current.children[1])
      gsap.timeline({transition:"all"})
      //     .fromTo(sectionRef.current,{x:"50vw"},{x:0,ease:"power2",duration:1})
          .fromTo(sectionRef.current.children[0],{position:"absolute"},{x:"25rem" ,rotate:15, ease:"power2",duration:2.5})
          .fromTo(sectionRef.current.children[2],{position:"absolute"},{x:"-25rem",rotate:-15 , ease:"power2",duration:2},"<")
          .to(sectionRef.current.children[1],{y:10, scale:1.1, ease:"power2"},"<")
          .fromTo(sectionRef.current.children[0],{y:10},{y:-10,yoyo:true,repeat:-1,duration:4})
          .fromTo(sectionRef.current.children[2],{y:10},{y:-10,yoyo:true,repeat:-1,duration:4},"<")
          .fromTo(sectionRef.current.children[1],{y:10},{y:-10,yoyo:true,repeat:-1,duration:4},)

      ;
    },[])






  return (
      
        
       <main className={`flex gap-10 ${props.className} overflow-x-hidden`}>
      
           <Card className="flex flex-col gap-28 w-full pr-8 relative ">

                  

                  <div className='flex flex-col gap-4 mb-20 py-6'>
                        <h1 className='text-3xl font-semibold text-black'>Products 📦</h1>
                        <p className='font-medium text-sm text-gray-500 w-5/6'>Welcome to the Products Page, your dedicated platform for managing and showcasing your range of offerings. This page is designed to empower you as a seller by providing you with a comprehensive toolkit to present your products effectively, track their performance, and engage with potential buyers. </p>
                  </div>

                 <section ref={sectionRef} className='flex justify-center  gap-8 relative'> 
                         <ProdCard  className="shadow-sm before:content-[''] before:text-red p-1 absolute" ranking={true}/>
                         <ProdCard  className="shadow-sm before:content-['👑'] before:text-5xl before:-translate-x-10 before:bg-red-90 before:w-fit before:-rotate-45 before:z-10 before:translate-y-6  p-1 " ranking={true}/>
                         <ProdCard  className="shadow-sm before:content-['']  p-1 absolute" ranking={true}/>
                 </section>

                 <section className='flex flex-col gap-12  text-black my-10'>

                        <section className='flex gap-4 bg-red- justify-center w-full'>
                           
                             
                             <div className='flex items-center w-3/6 gap-3 shadow-md bg-gray-100 rounded-md  border-2 px-2 py-2 hover:border-red-400'>
                                <svg width="15"  height="19" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78504 11.3216C5.5186 4.75767 11.9234 0.474582 19.0337 0.45559C26.6969 0.415236 33.5109 5.32378 35.8997 12.6053C38.2884 19.8868 35.7064 27.8778 29.5085 32.3847C23.3106 36.8917 14.9127 36.885 8.72207 32.3681L3.20207 37.8881C2.64083 38.4486 1.73164 38.4486 1.1704 37.8881C0.609866 37.3269 0.609866 36.4177 1.1704 35.8564L6.5179 30.5089C1.52288 25.4486 0.0514825 17.8854 2.78504 11.3216ZM5.34791 23.7794C7.64307 29.3103 13.0456 32.9125 19.0337 32.9048V32.8281C27.161 32.8177 33.7586 26.2543 33.8112 18.1273C33.819 12.1391 30.2167 6.73659 24.6859 4.44143C19.155 2.14628 12.786 3.411 8.55176 7.64528C4.31748 11.8796 3.05275 18.2485 5.34791 23.7794Z" fill="red"/>
                                </svg>

                                <input type="search" placeholder="search..." className=' w-11/12 font-medium bg-gray-100 outline-none text-black' />
                             </div>

                             <figure onMouseEnter={()=> setHover(true)} onMouseLeave={() => setHover(false)}  className='flex items-center bg-slate-50 shadow-md  px-2 rounded-md hover:cursor-pointer hover:bg-gray-900'>
                                   
                                    <svg  viewBox="0 0 1024 1024" className='' width="18" xmlns="http://www.w3.org/2000/svg" fill={`${hover===true ? "#fff": "#000"}`}>
                                          <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
                                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                          <g id="SVGRepo_iconCarrier">
                                                <path fill={`${hover ? "#fff": "#000"}`} d="M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"></path>
                                          </g>
                                    </svg>

                              </figure>

                              <section onClick={()=> setTouched(prevState => !prevState)} className='flex bg-slate-50 px-2 shadow-md items-center gap-2 rounded-md cursor-pointer'>

                                      <svg width="20" className=''  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#222222"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z" fill="#3b3939"></path> </g></svg>
                                      <button className='tracking-wide '>Filter</button>

                             </section>

                             
                              

                        </section>

                        <section className='flex flex-wrap justify-cente gap-6'>

                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>
                                    <ProdCard className="shadow-sm  p-1 "/>                       

                        </section>

                 </section>

           </Card>
        </main>
     
  )
}

export default Products