import React from 'react'

function RevenueCard(props) {
  
     const num = props.number;
     let formattedNum = 0;

    const options = {                
                style: "currency",  
                useGrouping: true,  
                currency: "USD"
    };

    const locale = navigator.language
    formattedNum = new Intl.NumberFormat(locale,  options).format(num);

  return (
    <section className={`flex flex-col px-4 py-2 justify-around border-gray-400 ${props.className}`}>

             <header className='flex gap-3 items-center'>
                 <figure className={` bg-gray-900 rounded-full p-1 ${props.figureClass}`}>
                     <img src={props.src} alt={props.heading} />
                 </figure>
                 <p className='font-sans font-medium'>{props.heading}</p>
             </header>

             <main className="flex flex-col gap-3">
                <p className='font-sans text-2xl font-semibold'>{` ${formattedNum}`}</p>

                <section className="flex gap-2 items-center rounded-md bg-gray-50 shadow-md w-16 h-6 px-1">
                       <img src={props.arrow} alt={"arrow"} />
                       <p className={`font-sans  text-sm  ${props.increment ? "text-red-500": "text-green-500"}`}>{props.percentage + "%"}</p>
                </section>
             </main>
     </section>
  )
}

export default RevenueCard