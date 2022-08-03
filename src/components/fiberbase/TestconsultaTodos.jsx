import React, { useState, useEffect} from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore' 

export default function TestConsulta() {
const [items, setItems] = useState([])
useEffect(() => {
  const db = getFirestore();
  const coleccionEntera = collection(db, 'items');

  getDocs(coleccionEntera).then((res)=>{

    console.log(res.docs);

    setItems(res.docs.map(items=>({id: items.id, ...items.data() })));
   
  });
}, []);



  return (
    <div>{items && <>{JSON.stringify(items)}</>}</div>
  )
}
