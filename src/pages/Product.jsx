import React, { useEffect, useState } from 'react'
import Card from '../components/Utilities/Card'
import ProductCarosal from '../components/UI/ProductCarosal'
import hero from "../assets/headerImg/hero.jpg"
import hero2 from "../assets/headerImg/hero2.jpg"
import ProductDescription from './../components/UI/ProductDescription';
import ProductCard , {ProdCard} from '../components/UI/productCard'
import Carousal from '../components/Utilities/Carousal'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'





 




const Product = () => {

  const {id} = useParams();
  const [productData, setproductData] = useState(null) ;

  useEffect(()=> {
     async function fetchData(id) {
        const response = await fetch(`https://bastion-backend-dev-nxhk.3.us-1.fl0.io/bastion/api/products/${id}`)
        const resData = await response.json()
        setproductData(resData.data.product)   
     }
     
     fetchData(id)

  },[id])

  console.log(productData)

  
  


  return (
    productData && 
      <Card className="flex flex-col gap-32 mb-8">
        <Card className="flex gap-16  mt-32 mb-8 mx-16">
          <ProductCarosal className="w-1/2" images={[...productData.images]}/>
          <ProductDescription className="w-1/2 justify-self-center" data={...productData}/>
        </Card>

        <Card className="text-black my-12 px-24 tracking-wide font-medium text-2xl flex flex-col gap-3 bg-red-40 ">

             <div  className="self-start flex w-full justify-between items-center">
               <p className='text-3xl font-extrabold uppercase'>You might like</p>
               <NavLink to="/products/brands" className={"text-sm hover:underline text-gray-500 font-semibold"}>View all</NavLink>
             </div> 


             <Carousal className="">
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
                  <ProdCard/>   
             </Carousal>
        </Card>

    </Card>
  )

}


// export async function loader() {

//   const { id } = useParams()

//   const response = await fetch(`https://bastion-backend-dev-nxhk.3.us-1.fl0.io/bastion/api/products/${id}`)
//   const resData = await response.json()
//   console.log(resData)
//   return resData.data

// }

export default Product