import React from 'react'
import { useDispatch } from 'react-redux'
import { AddToCart, incrementQuantity,removeFromCart,decrementtQuantity } from '../shoppingCartSlice'
const CartItem = ({id,title,quantity,price,totalprice}) => {
  const dispatch=useDispatch()
  const incrementHandler=()=>{
    dispatch(incrementQuantity(id))
  }
  const decrementHandler=()=>{
    dispatch(decrementtQuantity(id))
  }
  const removeHandler=()=>{
  dispatch(removeFromCart(id))
  }
  
  
  return (
    <>
    <div>
    <div className='cartitem'>
      <h3>Product-{title}</h3>
      <h4>Quantity-{quantity}</h4>
      <h4>Price-{price}</h4>
      <h2>TotalPrice-{totalprice.toFixed(2)}</h2>
    </div>
    <div className='buttons'><button onClick={incrementHandler}>Quantity++</button>
    <button onClick={decrementHandler}>Quantity--</button>
    <button onClick={removeHandler}>RemoveItem</button></div>
    </div>
    <h2>Total Amount Pay={(quantity*price).toFixed(2)}</h2>
    </>
  )
}

export default CartItem
