import React from 'react'
import star from "../../../assets/navlogos/star.svg"
import Carousal from '../../Utilities/Carousal'
import { ProdCard } from '../ProductCard'
import ReviewBlock from './ReviewBlock'

function Reviews(props) {
  return (
    <section className={`flex gap-4 text-black bg-gray-100 mx-12 rounded-lg justify-between p-8`}>

      <section className='flex flex-col justify-between '>
         <div className='flex flex-col gap-6'>
            <p className='uppercase text-5xl font-bold w-72 bg-blue-60'>Reviews with love</p>
            <div className='flex flex-col gap-2 bg-white p-2 rounded-md w-fit'>
               <figure className='flex'>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
               </figure>
               <p>more than <span className='font-semibold'>+25,000 reviews</span></p>
            </div>
         </div>

         <p className='text-sm w-96 capitalize'>we love reading reviews from our community.We know how much joy our products bring you.</p>


      </section>

      <Carousal className="w-100 bg-red-90 h-80" stepDivided={1}>
         <ReviewBlock/>
         <ReviewBlock/>
         <ReviewBlock/>
         <ReviewBlock/>
         <ReviewBlock/>
         <ReviewBlock/>
         <ReviewBlock/>
         <ReviewBlock/>
         <ReviewBlock/>
         <ReviewBlock/>
      </Carousal>

    </section>
  )
}

export default Reviews