import React, { useState, useRef } from 'react'
import Card from '../components/Utilities/Card'
import { ProdCard } from '../components/UI/productCard'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'





const Products = (props) => {

  const {type} = useParams()

  const [touched,setTouched] = useState(false);
  const [clear,setClear] = useState(false);
  const [searchQuery , setSearchQuery] = useState("")
  const [selected, setSelected] = useState({
    sort:undefined,
    rating:undefined,
    brand:undefined,
    productType:undefined,
    season:undefined,
    price:undefined
  })



  const {data: products ,isPending,isError} = useQuery({
    queryKey:["products"],
    queryFn: async () => {
      const response = await fetch(`https://bastion-backend-dev-nxhk.3.us-1.fl0.io/bastion/api/products?${searchQuery}`)
      const resData = await response.json()
      return resData.data.products
    }
  })


  console.log(products,"uuu")


  const onFormSubmit = (e) => {
    e.preventDefault()

    console.log(e.target.action)

    setSearchQuery(e.target.action.split("?")[1]+`${type!=="all" ? `&consumer=${type}`: `&consumer=""`}`)
  }

  console.log(selected,"ll")

  return (
    <section className="flex flex-col my-20 gap-3 px-16 bg-red-90">


           <form className='flex justify-between bg-yellow-90 w-11/12' onSubmit={onFormSubmit}>

            <Card className="flex gap-2 bg-blue-90">
                <select value={selected}  name="sort" className='p-1 px-3 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                  <option value="" hidden disabled selected>Sort</option>
                  <option value="name">Name A-Z</option>
                  <option value="-name">Name Z-A</option>
                  <option value="price">Price ascending</option>
                  <option value="-price">Price descending</option>
                  <option value="releaseDate">Date of Release</option>
                  <option value="ratingQuantity">Most Sold</option>
                  <option value="inStock">Availibility</option>
                </select>

                <select name="rating[lte]" className='p-1 px-1 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                  <option value="" hidden selected>Stars</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="1">⭐</option>
                </select>

                <select name="brand" className='p-1 px-1 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option value="" hidden selected>Brands</option>
                    <option value="nike">Nike</option>
                    <option value="adidas">Adidas</option>
                    <option value="puma">Puma</option>
                    <option value="reebok">Reebok</option>
                    <option value="fila">Fila</option>
                    <option value="">All</option>
                </select>

                 <select name="productType" className='p-1 px-1 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option value=" " hidden selected>Type</option>
                    <option value="sneakers">Sneakers</option>
                    <option value="casuals">Casuals</option>
                    <option value="sportshoes">Sportshoes</option>
                    <option value="flipflops">Flip-flops</option>
                    <option value="">All</option>
                 </select>

                 <select name="season" className='p-1 px-1 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option value="" hidden selected>Seasons</option>
                    <option value="">All</option>
                    <option value="rainy">Monsoon</option>
                    <option value="winter">Winter</option>
                    <option value="summer">Summer</option>
                 </select>


                 <select name="price[lte]" className='p-1 px-2 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option hidden selected>Price</option>
                    <option value="100" className='text-green-700'>~$100</option>
                    <option value="300" className='text-green-700'>~$300</option>
                    <option value="7000" className='text-green-700'>~$700</option>
                    <option value="1500" className='text-green-700'>~$1500</option>
                    <option value="2300" className='text-green-700'>~$2300</option>
                    <option value="3000" className='text-green-700'>{">"} $2300</option>

                 </select>  

                 {/* <select name="size" className='p-1 px-2 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option hidden selected>size</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                 </select> */}
            </Card>

            
             <Card className="flex gap-4">

              <button  onClick={()=>setTouched(true)} className={`text-white flex items-center bg-black px-4 rounded-md gap-2 ${touched && !clear && " bg-red-600 "}`}>
                      <svg width="20" className=''  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z" fill="#fff"></path> </g></svg>
                      <p>Filter</p>
              </button>

              { (touched )  &&  clear===false &&

                <button onClick={()=>setClear(!clear)} className={`w-8 ${clear &&" bg-gray-100  transition-all" }`} title='clear filter'>
                 <svg className={`brightness-0 ${clear && " brightness-100"}`} fill="#db0808" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M50.86,13.38H13a1.5,1.5,0,0,1,0-3H50.86a1.5,1.5,0,0,1,0,3Z"></path><path d="M42.4,57.93H21.48a5.5,5.5,0,0,1-5.5-5.5V11.87a1.5,1.5,0,0,1,1.5-1.5H46.4a1.5,1.5,0,0,1,1.5,1.5V52.43A5.51,5.51,0,0,1,42.4,57.93ZM19,13.37V52.43a2.5,2.5,0,0,0,2.5,2.5H42.4a2.5,2.5,0,0,0,2.5-2.5V13.37Z"></path><path d="M40,13.37H23.9a1.5,1.5,0,0,1-1.5-1.5V6.57a1.5,1.5,0,0,1,1.5-1.5H40a1.5,1.5,0,0,1,1.5,1.5v5.3A1.5,1.5,0,0,1,40,13.37Zm-14.58-3H38.48V8.07H25.4Z"></path><path d="M24.94,47.61a1.5,1.5,0,0,1-1.5-1.5V21.46a1.5,1.5,0,0,1,3,0V46.11A1.5,1.5,0,0,1,24.94,47.61Z"></path><path d="M38.94,47.61a1.5,1.5,0,0,1-1.5-1.5V21.46a1.5,1.5,0,0,1,3,0V46.11A1.5,1.5,0,0,1,38.94,47.61Z"></path><path d="M31.94,40.38a1.5,1.5,0,0,1-1.5-1.5V28.7a1.5,1.5,0,1,1,3,0V38.88A1.5,1.5,0,0,1,31.94,40.38Z"></path></g></svg>
              </button>
              }
            </Card>

             
           </form>


            <Card className="flex gap-6 flex-wrap ">

              {!isPending && products.map((el,i)=> {
                  return <ProdCard className="shadow-sm  p-1 " id={el._id} coverImage={el.coverImage} key={i+1} rating={el.rating} price={el.price} ratingQuantity={el.ratingQuantity} name={el.name}/>
              })}

            </Card>
    </section>
  )
}




export default Products