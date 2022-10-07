import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Header = () => {
  const totaQuantity=useSelector(state=>state.totaQuantity)
  return (
    <div className='header'>
       <h2>Shopping Cart App</h2>
       <img src='https://img.freepik.com/free-vector/cute-shopping-cart-logo_23-2148453859.jpg?size=338&ext=jpg&ga=GA1.2.42776944.1662396259'/>
       <Link to='/cart'><h2>{totaQuantity}</h2></Link>
    </div>
  )
}

export default Header