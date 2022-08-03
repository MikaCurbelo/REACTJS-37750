/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Greeting.css'
import {getItems} from '../helper/getArray'
import {ItemList} from './ItemList'
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
