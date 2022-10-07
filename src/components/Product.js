import React from 'react'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../shoppingCartSlice'
const Product = ({category,id,title,image,price,description}) => {
  const dispatch=useDispatch()
  const addToCartHandler=()=>{
    dispatch(AddToCart({
      category,title,image,price,description,id
    }))
  }
  return (
    <>
      <h2>Product</h2>
      <p>{category}</p>
      <h2>{title}</h2>
      <img src={image} alt='name'/>
      <h3>${price}</h3>
      <button onClick={addToCartHandler}>AddToCart</button>
      </>
  )
}

export default Product
