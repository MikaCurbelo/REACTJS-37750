/* eslint-disable array-callback-return */
import React from 'react'
import {Item} from './Item' 

export const ItemList =({items}) => {
  return (
    <>
      {
        items.map((item)=> {
          return <Item key={item.id} {...item} />
        })
      }
    </>
  )
}


