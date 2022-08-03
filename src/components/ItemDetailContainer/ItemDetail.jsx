/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { myContext } from '../Context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import '../ItemCount/ItemCount.scss';
import './ItemDetailContainer.scss';



export const ItemDetail = ({id, nombre, precio, descripcion, imgUrl, stock}) => {
  const [button, setButton] = useState(false);

  const {addToCart} = useContext(myContext);
  const product = {id, nombre, precio, descripcion, imgUrl}



  const onAdd = (count)=>{
  setButton(true)
  addToCart(product, count);

    swal({
      title: "Hecho",
      text: 'Agregaste '+count + ' clases de ' + nombre + ' al carrito',
      icon: "success",
    });
  }   

  
  return (
   
  <div id='itemDetail'>
        <div>
          <img id='img' src={imgUrl} alt="bateria" />
        </div>
        <div id='data'>
            <h1>{nombre}</h1>
            <h2>{descripcion}</h2>
            <h3>Precio ${precio}</h3>
        </div>
  
    <div>    
     {button? 
     <Link to="/Cart"><button>Terminar compra</button></Link>
     :
     <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
    }
    </div>
  </div>
  )
}
 