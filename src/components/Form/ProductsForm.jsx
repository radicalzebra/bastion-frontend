import { useState } from "react"

export const SortForm = ({setFormObj, clear}) => {

   const [selected, setSelected] = useState()

   const onChangeHandler = (e) => {

      setFormObj(prev => {

         return {
            ...prev,
            sort:e.target.value
         }
      })

      setSelected(e.target.value)
   }

   return (
      <select value={selected} onChange={onChangeHandler} name="sort" className='p-1 px-3 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                  <option value="" hidden selected>Sort</option>
                  <option value="name">Name A-Z</option>
                  <option value="-name">Name Z-A</option>
                  <option value="price">Price ascending</option>
                  <option value="-price">Price descending</option>
                  <option value="releaseDate">Date of Release</option>
                  <option value="-ratingQuantity">Most Sold</option>
                  <option value="inStock">Availibility</option>
      </select>
   )
}




export const RatingForm = ({setFormObj}) => {

   const [selected, setSelected] = useState()


  const onChangeHandler = (e) => {

      setFormObj(prev => {
         return {
            ...prev,
            rating:e.target.value
         }
      })

      setSelected(e.target.value)
   }


   return (
      <select name="rating" value={selected} onChange={onChangeHandler} className='p-1 px-1 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                  <option value="" hidden selected>Stars</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="1">⭐</option>
      </select>
   )
}



export const BrandForm = ({setFormObj}) => {

   const [selected, setSelected] = useState()

   const onChangeHandler = (e) => {

      setFormObj(prev => {
         return {
            ...prev,
            brand:e.target.value
         }
      })

      setSelected(e.target.value)
   }


   return (
      <select name="brand" value={selected} onChange={onChangeHandler} className='p-1 px-1 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option value="" hidden selected>Brands</option>
                    <option value="nike">Nike</option>
                    <option value="adidas">Adidas</option>
                    <option value="puma">Puma</option>
                    <option value="reebok">Reebok</option>
                    <option value="fila">Fila</option>
      </select>
   )
}



export const ProductTypeForm = ({setFormObj}) => {

   const [selected, setSelected] = useState()

   const onChangeHandler = (e) => {

      setFormObj(prev => {
         return {
            ...prev,
            productType:e.target.value
         }
      })

      setSelected(e.target.value)
   }


   return (
      <select name="productType" value={selected} onChange={onChangeHandler} className='p-1 px-1 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option value=" " hidden selected>Type</option>
                    <option value="sneakers">Sneakers</option>
                    <option value="casuals">Casuals</option>
                    <option value="sportshoes">Sportshoes</option>
                    <option value="flipflops">Flip-flops</option>
      </select>
   )
}


export const SeasonForm = ({setFormObj}) => {

   const [selected, setSelected] = useState()

   const onChangeHandler = (e) => {

      setFormObj(prev => {
         return {
            ...prev,
            season:e.target.value
         }
      })

      setSelected(e.target.value)
   }


   return (
      <select name="season" value={selected} onChange={onChangeHandler} className='p-1 px-1 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option value="" hidden selected>Seasons</option>
                    <option value="rainy">Monsoon</option>
                    <option value="winter">Winter</option>
                    <option value="summer">Summer</option>
      </select>
   )
}

export const PriceForm = ({setFormObj}) => {

   const [selected, setSelected] = useState()


   const onChangeHandler = (e) => {

      setFormObj(prev => {
         //remember the order for same object property to be updated
         return {
            ...prev,
            price:e.target.value
         }
      })
      setSelected(e.target.value)
   }


   return (
       <select name="price" value={selected} onChange={onChangeHandler} className='p-1 px-2 rounded-lg bg-gray-50 border-2 hover:border-black shadow-m text-black outline-none'>
                    <option hidden selected>Price</option>
                    <option value="100" className='text-green-700'>~ $100</option>
                    <option value="300" className='text-green-700'>~ $300</option>
                    <option value="7000" className='text-green-700'>~ $700</option>
                    <option value="1500" className='text-green-700'>~ $1500</option>
                    <option value="2300" className='text-green-700'>~ $2300</option>
                    <option value="3000" className='text-green-700'>{">"} $2300</option>
      </select> 
   )
}