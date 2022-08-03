
import React, { createContext, useEffect, useState } from 'react';
import { Item } from '../ItemListContainer/Item';



export const myContext = createContext(null);
const cartStart = [];

 
export default function CartContext({ children }) {
    
    const [cart, setCart] = useState(cartStart);

    useEffect(() => {
      
    }, [cart])
    

    const addToCart = (Item, count) => {
        if(isInCart(Item.id)){

            const productoAgregado = cart.map((prod)=>prod.id === Item.id? {...prod, cantidad:prod.cantidad + count} : prod)
            setCart([...productoAgregado])
        }else{
            setCart([...cart, {...Item, "cantidad": count}])
        }
     
    };
    const isInCart = (id) => {
        return cart.some( (prod) => prod.id === id)
    };
    const removeToCart = () => { 
        const newCart = cart.filter((prod) => prod.id !== Item.id)
        setCart(newCart)
    };
    const clearCart = () => {
        setCart([])
    }
  return <><myContext.Provider 
        value={{
                cart, 
                addToCart, 
                isInCart, 
                removeToCart, 
                clearCart }}>
        {children}
        </myContext.Provider>
    </>
}
