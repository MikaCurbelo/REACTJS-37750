/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getItem } from '../helper/getArray'
import { ItemDetail } from './ItemDetail'
import "./ItemDetailContainer.scss"




export const ItemDetailContainer = () => {

const [loading, setLoading] = useState(true);
 const [product, setProduct] = useState({})
const {itemId} = useParams()

useEffect(() => {
    getItem(itemId)
        .then(item => {
            setProduct(item)
        })
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
}, [itemId])



  return (
    <div id='itemDetailContainer'>
          {
            loading?
                <p>CARGANDO...</p>
            :
            <ItemDetail {...product} />
          }
    </div>
  )
}
