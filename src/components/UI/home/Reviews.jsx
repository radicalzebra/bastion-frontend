import React from 'react'
import star from "../../../assets/navlogos/star.svg"
import Carousal from '../../Utilities/Carousal'
import ReviewBlock from './ReviewBlock'
import male from "../../../assets/navlogos/male.gif"
import female from "../../../assets/navlogos/female.gif"
import defaultUser from "../../../assets/navlogos/defaultUser.gif"

function Reviews(props) {

  const reviews = [
    { name: "GourmetGuru87", src:defaultUser , title: "Comfy Kicks", rating: 5, review: "These shoes are like walking on clouds, absolute comfort! They're my go-to for all-day wear." },
    { name: "BookwormBelle", src:female , title: "Stylish Strides", rating: 4.5, review: "Fashion-forward and comfortable, perfect for long walks! Plus, they pair well with any outfit." },
    { name: "ArtAficionado2024", src:female , title: "Sleek Footwear", rating: 4, review: "Minimalist design with maximum comfort, love them! They're a statement piece in my wardrobe." },
    { name: "MelodicMaven", src:defaultUser , title: "Sporty Support", rating: 5, review: "Great support for workouts, stylish enough for everyday wear. These shoes keep me moving in style." },
    { name: "WanderlustWarrior", src:male ,title: "Adventurous Soles", rating: 4, review: "Durable and reliable, perfect for exploring new horizons! These shoes have been with me through countless adventures." },
    { name: "TechTrailblazer21",src:female, title: "Tech-Savvy Shoes", rating: 4.5, review: "Smart design with innovative features, a must-have for tech enthusiasts! These shoes blend technology with style seamlessly." },
    { name: "MovieMagicManiac", src:male , title: "Classic Comfort", rating: 4, review: "Timeless style meets exceptional comfort, a shoe for every occasion! I'm impressed by the quality and versatility of these shoes." },
    // Add more reviews as needed
   ];


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

      <section className='relative'>
         <Carousal className="w-100 bg-red-90 h-80">
            {reviews.map((el,i)=> {
               return <ReviewBlock name={el.name} src={el.src} rating={el.rating} title={el.title} review={el.review} />

            })}
         </Carousal>
      </section>

    </section>
  )
}

export default Reviews