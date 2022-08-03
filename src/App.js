// @ts-check
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Cart } from './components/Cart/Cart';
import CartContext from './components/Context/CartContext';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/NavBar/NavBar';
import { NavBar } from './components/NavBar/NavBar';




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
