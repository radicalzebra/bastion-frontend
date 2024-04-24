import React from 'react'
import search from "../../../assets/navlogos/search.svg"
import QuickProduct from './QuickProduct'
import Carousal from './../../Utilities/Carousal';
import { ProdCard } from '../ProductCard';



function TopProducts({products}) {

  const productsCopy = [...products]
  return (
    <div className='h-  mt-6  px-8 py-5 pb-8 bg-gradient-to-b  shadow-md border-2 border-gray-100   mb-20 rounded-lg flex flex-col gap-12'>


         <section className='flex items-center  gap-8'>
              <h3 className='text-3xl font-semibold tracking-wide text-black'>Top Products</h3>             
         </section>


         <Carousal>
          {/* descending order */}
           {productsCopy?.sort((a,b) => b.product.rating - a.product.rating )
                     .slice(0,6)
                     .map((el,i)=> {
                        return <ProdCard className="shadow-sm  p-1 " seller={el.product.seller.id} id={el.product._id} coverImage={el.product.coverImage} key={i+1} rating={el.product.rating} price={el.product.price} ratingQuantity={el.product.ratingQuantity} name={el.product.name}/>
            })}
         </Carousal>

    </div>
  )
}

export default TopProducts