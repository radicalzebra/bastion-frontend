import React from 'react'
import { loadStripe } from '@stripe/stripe-js';

export default function useStripeCheckout(product) {

   const getStripeSession = async () => {

      const stripe = await loadStripe(`${import.meta.env.STRIPE_SECRET_KEY}`);



      const session = await stripe.redirectToCheckout({
         lineItems: [{
            price: String(product.priceId),
            quantity: 1
         }],
         mode: 'payment',
         successUrl: `https://bastion-dev.netlify.app/`,
         cancelUrl: `https://bastion-dev.netlify.app/`
      });

      console.log(session, 111);
     

      // const stripee = stripe(import.meta.env.STRIPE_SECRET_KEY)
      // const session = await stripee.checkout.sessions.create({
         
      //    payment_method_types : ["card"],
      //    success_url:`https://bastion-dev.netlify.app/`,
      //    cancel_url:`https://bastion-dev.netlify.app/`,
      //    customer_email: req.user.email,
      //    client_reference_id: req.params.ProductId,
      //    mode:"payment",
      //    line_items: [
      //       {
      //         quantity: 1,
      //         price_data: {
      //           currency: 'usd',
      //           unit_amount: product.price * 100,
      //           product_data: {
      //              name: product.name,
      //             //  size: 
      //              description: product.description,
      //              images: [product.coverImage],
      //             },
      //          },
      //       },
      //    ],
      // }); 

       console.log(session,111)
   }

   getStripeSession()
  
}
