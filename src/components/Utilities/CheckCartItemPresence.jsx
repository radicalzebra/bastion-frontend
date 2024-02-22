export default  function itemPresent (item,cart)  {
    // console.log(cart,cart.length)
    return cart.find((el) => el === item ) !== undefined 
}