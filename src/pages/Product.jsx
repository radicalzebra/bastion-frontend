import React from 'react'
import Card from '../components/Utilities/Card'
import ProductCarosal from '../components/UI/ProductCarosal'
import hero from "../assets/headerImg/hero.jpg"
import hero2 from "../assets/headerImg/hero2.jpg"
import ProductDescription from './../components/UI/ProductDescription';
import ProductCard , {ProdCard} from '../components/UI/productCard'
import Carousal from '../components/Utilities/Carousal'
import { NavLink } from 'react-router-dom'




 




const Product = () => {


  return (
    <Card className="flex flex-col gap-32 mb-8">
        <Card className="flex gap-16  mt-32 mb-8 mx-16">
          <ProductCarosal className="w-1/2" images={[hero,hero2,hero,hero2,hero,hero]}/>
          <ProductDescription className="w-1/2 justify-self-center" sizes={[7,8,9,10,11,12,13] } numReviews={[1,2,3,4,5,6,7,8,9]}/>
       </Card>

        <Card className="text-black my-12 px-24 tracking-wide font-medium text-2xl flex flex-col gap-3 bg-red-40 ">
             <div  className="self-start flex w-full justify-between items-center">
               <p className='text-3xl font-extrabold uppercase'>You might like</p>
               <NavLink to="/products/brands" className={"text-sm hover:underline text-gray-500 font-semibold"}>View all</NavLink>
             </div>

             <Carousal className="">
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



    </Card>
  )
}

export default Product