import React, { useEffect, useState } from 'react'
import { getItems } from '../helper/getArray'
import './Greeting.css'
import { ItemList } from './ItemList'
import "./ItemListContainer.scss"






export default function ItemListContainer() {
 
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

 

useEffect(() => {
    getItems()
    .then(res=>{
        setProducts(res)
        })
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))

}, []);



return (
 <div id='itemListCont'>
  {
    loading?
        <div>Cargando...</div>
        :
        <ItemList items={products}/>
  }
 </div>
)}
