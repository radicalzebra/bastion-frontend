import star from "../../assets/navlogos/star.svg"
import halfstar from "../../assets/navlogos/halfstar.svg"


export const Rating = (props) => {
   const intPart = Math.floor(props.rating);
   const  decimalpart = props.rating - intPart; 
   let arr = [];

   for(let i = 0 ; i<intPart ; i++) {
    
      arr[i] = <img src={star} key={i+1} alt="star" /> 
       
   }
   
   

   return (
      <section className="flex gap-4">

         <figure className={`flex  ${props.className}`} >
            {...arr}
            {decimalpart === 0 ?  "":<img src={halfstar} alt="half-star" />}
         </figure>

      </section>
   )
};


export const ProductCardRating = (props) => {
   return (
      <section className="flex gap-2 items-center">
         <div className="flex gap-1">
            <img src={star}  alt="star"/>
            <span className="text-gray-400 text-sm">{props.rating}</span>
         </div>

        {props.numReviews &&  <span className="text-gray-400 text-xs font-secondary ">{`(${props.numReviews})`}</span>}

      </section>
   )
};

 