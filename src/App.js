// @ts-check
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar/NavBar'
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react';
import CartContext from './components/Context/CartContext';
import { Cart } from './components/Cart/Cart';




function App() {


  return ( 
  <>
    <CartContext>
    {
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
     </BrowserRouter>
    }
    </CartContext>
  </>
  );
}

export default App;