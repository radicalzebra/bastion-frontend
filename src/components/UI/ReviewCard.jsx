import Card from "../Utilities/Card";
import hero2 from "../../assets/headerImg/hero2.jpg"
import { Rating } from "../Utilities/Rating";
import { useEffect } from "react";



const ReviewCard = ({className,review}) =>  {

  return (
    <Card className={`flex p-2 gap-4   text-black rounded-sm transition-all ${className}`}> 

        <section>
            <figure className="w-8 h-8 rounded-full overflow-hidden">
              <img  className="w-full h-full" src={review.user.photo || hero2} alt="user" />
            </figure>
        </section>

        <main className="font-bold leading-tight  text-md  flex flex-col gap-3">

          <section className="flex">
            <span className="font-normal text-xs text-gray-500">{review.user.username || "user-name"}</span>
            

            <div className="flex scale-75">
               <Rating rating={review.rating}/>
            </div>
          </section>

          <p className="font-secondary font-normal text-sm ">{ review.review || "Lovely product, very comfortable to wear and is moderately priced"}</p>
        </main>
    </Card>
  )
}

export default ReviewCard 