import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios'
import Header from './Header'
const Products = () => {
  const [products,setProducts]=useState([])
useEffect(()=>{
 (async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    console.log(response.data)
    setProducts(response.data)
 })();   
},[]) 
const menFilter=(cat)=>{
  const filteredProducts=products.filter(item=>item.category===cat)
  return setProducts(filteredProducts)
}
const womenFilter=(cat)=>{
  const filteredProducts=products.filter(item=>item.category===cat)
  return setProducts(filteredProducts)
}

 return (
    <>
    <Header/>
    <div className='filter'>
      <button onClick={()=>menFilter("men's clothing")}>MenCloths</button>
      <button onClick={()=>womenFilter("women's clothing")}>WomenCloths</button>
      <button onClick={()=>menFilter("electronics")}>Electronics</button>
      <button onClick={()=>womenFilter("jewelery")}>jewellery</button>
      
      
    </div>
    <div className='container'>
      {products.map((el,id)=>{
      return<div key={el.id}><Product category={el.category} description={el.description} id={el.id} image={el.image} price={el.price} title={el.title}/></div>
      })}
     </div> 
     </>
    
  )
}

export default Products
