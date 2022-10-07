import CartItems from "./components/CartItems";
import Products from "./components/Products";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
  
    <BrowserRouter>
       <Routes>
          
          <Route path='/' element={<Products/>}/>
          <Route path='/cart' element={<CartItems/>}/>   
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
