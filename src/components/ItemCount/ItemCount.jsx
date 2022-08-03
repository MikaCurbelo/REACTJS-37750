// @ts-check
import React from 'react'
import { useState } from 'react'
import './ItemCount.scss'
export const ItemCount = ({ stock, initial, onAdd}) =>  {
const [count, setCount]= useState(initial);

const agregar = ()=>{
  setCount(count + 1)
}
const quitar = ()=>{
  setCount(count - 1)
}


  return (
    <div id='itemCount'>
      <div className='count'>
          <button onClick={quitar} disabled={count === 1}>-</button>
          <h1>{count}</h1>
          <button onClick={agregar} disabled={count >= stock}>+</button>
      </div>
          <button onClick={ () => onAdd(count)}>Agregar al carrito</button>
      
    </div>
  )
}



