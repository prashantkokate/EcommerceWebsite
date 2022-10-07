import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
const CartItems = () => {
  const items=useSelector(state=>state.cart)
  
  console.log(items)
    return (
    <div>
      <h2>CartItems</h2>
      {items.map((el,id)=>{
        return<div key={el.id}><CartItem id={el.id} title={el.title} quantity={el.quantity} price={el.price} totalprice={el.totalPrice}/></div>
      })}
    </div>
  )
}

export default CartItems
