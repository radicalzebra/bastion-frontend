import Card from "../Utilities/Card";
import hero2 from "../../assets/headerImg/hero2.jpg"
import { Rating } from "../Utilities/Rating";
import { useEffect } from "react";



const ReviewCard = (props) =>  {

  return (
    <Card className={`flex w-96   py-3 px-1 gap-4  bg-gray-50 text-black rounded-sm transition-all ${props.className}`}> 

        <section className="font-normal">
            <figure className="w-10 h-10 rounded-full overflow-hidden">
              <img  className="w-full h-full" src={props.userImg || hero2} alt="user" />
            </figure>
        </section>

        <main className="font-medium leading-tight  text-xs  flex flex-col gap-4">

          <section className="flex gap-2">
            <span className="font-normal">{props.username || "user-name"}</span>

            <div className="flex scale-90">
               <Rating rating="5"/>
            </div>
          </section>

          <p>{props.review || "Lovely product, very comfortable to wear and is moderately priced "}</p>
        </main>
    </Card>
  )
}

export default ReviewCard 