import Card from "../Utilities/Card";
import hero2 from "../../assets/headerImg/hero2.jpg"
import { Rating } from "../Utilities/Rating";
import { useEffect } from "react";



const ReviewCard = ({className,review}) =>  {

  return (
    <Card className={`flex py-3 px-1 gap-4  bg-gray-50 text-black rounded-sm transition-all ${className}`}> 

        <section>
            <figure className="w-8 h-8 rounded-full overflow-hidden">
              <img  className="w-full h-full" src={review.user.photo || hero2} alt="user" />
            </figure>
        </section>

        <main className="font-semibold leading-tight  text-md  flex flex-col gap-4">

          <section className="flex gap-2">
            <span className="font-normal text-xs">{review.user.username || "user-name"}</span>
            

            <div className="flex scale-90">
               <Rating rating={review.rating}/>
            </div>
          </section>

          <p className="font-sans font-normal text-xs">{ review.review || "Lovely product, very comfortable to wear and is moderately priced"}</p>
        </main>
    </Card>
  )
}

export default ReviewCard 