import {createSlice,configureStore} from '@reduxjs/toolkit'

const shoppingCartSlice=createSlice({
    name:'shoppingCart',
    initialState:{ 
        cart:[],
        totaQuantity:0,
        
},
    reducers:{
        AddToCart:(state,action)=>{
         const newItem=action.payload;
         const existingItem=state.cart.find(item=>item.id===newItem.id)
         if(existingItem){
           existingItem.quantity++;
           existingItem.totalPrice=newItem.price*existingItem.quantity
         }else{
           state.cart.push({
            id:newItem.id,
            quantity:1,
            price:newItem.price,
            title:newItem.title,
            totalPrice:newItem.price,
            

           })
           state.totaQuantity++;
         }
        },
        incrementQuantity:(state,action)=>{
          const id=action.payload;
          const existingItem=state.cart.find(item=>item.id===id)
          if(existingItem){
            existingItem.quantity++;
            existingItem.totalPrice+=existingItem.price
          }
        },
        decrementtQuantity:(state,action)=>{
          const id=action.payload;
          const existingItem=state.cart.find(item=>item.id===id)
          if(existingItem){
            existingItem.quantity--;
            existingItem.totalPrice-=existingItem.price
          }
        },
        removeFromCart:(state,action)=>{
          const id=action.payload;
          state.cart=state.cart.filter(item=>item.id!==id)
        }
        

    }
})

const store=configureStore({
    reducer:shoppingCartSlice.reducer
})
export const {AddToCart,incrementQuantity,decrementtQuantity,removeFromCart}=shoppingCartSlice.actions
export default store