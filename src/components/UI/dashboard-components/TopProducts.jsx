import React from 'react'
import Carousal from './../../Utilities/Carousal';
import { ProdCard } from '../ProductCard';



function TopProducts({products}) {

  let productsCopy = []

  if(products !== false) {
    productsCopy = [...products]
  }

  return (
    <div className='h-  mt-6  px-8 py-5 pb-8 bg-gradient-to-b  shadow-md border-2 border-gray-100   mb-20 rounded-lg flex flex-col gap-12 h-fit relative '>

      <section className='flex items-center  gap-8'>
        <h3 className='text-3xl font-semibold tracking-wide text-black'>Top Products</h3>             
      </section>

      {productsCopy == false && 
          <div className='flex-col flex gap-4 items-center'>
            <figure className=' w-20 h-20'>
                <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5 20C18.5 20.275 18.276 20.5 18 20.5H12.2678C11.9806 21.051 11.6168 21.5557 11.1904 22H18C19.104 22 20 21.104 20 20V9.828C20 9.298 19.789 8.789 19.414 8.414L13.585 2.586C13.57 2.57105 13.5531 2.55808 13.5363 2.5452C13.5238 2.53567 13.5115 2.5262 13.5 2.516C13.429 2.452 13.359 2.389 13.281 2.336C13.2557 2.31894 13.2281 2.30548 13.2005 2.29207C13.1845 2.28426 13.1685 2.27647 13.153 2.268C13.1363 2.25859 13.1197 2.24897 13.103 2.23933C13.0488 2.20797 12.9944 2.17648 12.937 2.152C12.74 2.07 12.528 2.029 12.313 2.014C12.2933 2.01274 12.2738 2.01008 12.2542 2.00741C12.2271 2.00371 12.1999 2 12.172 2H6C4.896 2 4 2.896 4 4V11.4982C4.47417 11.3004 4.97679 11.1572 5.5 11.0764V4C5.5 3.725 5.724 3.5 6 3.5H12V8C12 9.104 12.896 10 14 10H18.5V20ZM13.5 4.621L17.378 8.5H14C13.724 8.5 13.5 8.275 13.5 8V4.621Z" fill="#212121"></path> <path d="M12 17.5C12 20.5376 9.53757 23 6.5 23C3.46243 23 1 20.5376 1 17.5C1 14.4624 3.46243 12 6.5 12C9.53757 12 12 14.4624 12 17.5ZM6.5 14C6.22386 14 6 14.2239 6 14.5V18.5C6 18.7761 6.22386 19 6.5 19C6.77614 19 7 18.7761 7 18.5V14.5C7 14.2239 6.77614 14 6.5 14ZM6.5 21.125C6.84518 21.125 7.125 20.8452 7.125 20.5C7.125 20.1548 6.84518 19.875 6.5 19.875C6.15482 19.875 5.875 20.1548 5.875 20.5C5.875 20.8452 6.15482 21.125 6.5 21.125Z" fill="#212121"></path> </g></svg>
            </figure> 

            <p className='text-gray-500 font-semibold text-sm '>No Results Found</p> 
          </div>
      }

      {productsCopy != false && 
          <section className='relative '>
            <Carousal>
              {/* descending order */}
              {productsCopy?.sort((a,b) => b.product.rating - a.product.rating )
                            .slice(0,6)
                            .map((el,i)=> {
                              return <ProdCard className="shadow-sm  p-1 " seller={el.product.seller.id} id={el.product._id} coverImage={el.product.coverImage} key={i+1} rating={el.product.rating} price={el.product.price} ratingQuantity={el.product.ratingQuantity} name={el.product.name}/>
                            })}
            </Carousal>
          </section>
      }

    </div>
  )
}

export default TopProducts