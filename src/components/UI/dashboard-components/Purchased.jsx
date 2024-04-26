import { Card } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PurchasedProduct from './PurchasedProduct'
import dateFormat from '../../Utilities/DateFomat'


function Purchased(props) {
  const purchased = useSelector(state => state.login.purchased)
 
  return (
     <main className={`flex  gap-10 ${props.className} overflow-x-hidden`}>
      
           <Card className={`flex flex-col  gap-5 w-full pr-8 relative `}>
                  <div className='flex flex-col gap-4 mb-20  py-6'>
                        <h1 className='text-3xl font-semibold text-black'>My Purchases 🛍️</h1>
                        <p className='font-medium text-sm text-gray-500 w-5/6'>Welcome to your purchase page, where every click brings you closer to owning your desires. Shop with ease, knowing each selection is a step toward fulfillment.Indulge in a seamless shopping experience tailored to your preferences.</p>
                  </div>

                  <section className='flex  flex-wrap gap-9 pr-10'>
                     {purchased?.map((el,i)=> {
                         const purchasedDate = dateFormat(el.createdAt)
                         return <PurchasedProduct key={el.id} img={el.product.coverImage} name={el.product.name} purchasedAt={purchasedDate} id={el.product.id} price={el.price}  size={el.size} rating={el.product.rating} seller={el.product.seller.username} sellerEmail={el.product.seller.email} />
                     })}
                  </section>
            </Card>

      </main>
   )
}

export default Purchased