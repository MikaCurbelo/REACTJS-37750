import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { myContext } from '../Context/CartContext'
import './Cart.css'


export const Cart = (props) => {
 
const {cart, clearCart} = useContext(myContext)


  return (
<div className='bg'>
    <div  className='cart'> {cart.map(item => ( 
    
      <div> 
    <Card style={{ width: '18rem' }} id='item'>
      <Card.Img variant="top" src={item.imgUrl} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Title>Precio: ${item.precio * item.cantidad}</Card.Title>
          <Card.Text>{item.descripcion}</Card.Text>
          <Card.Text>Cantidad:{item.cantidad}</Card.Text>
        </Card.Body>
    </Card>
      </div>
        ))}

    </div>
    <Button onClick={() => clearCart()} variant="primary" className='btnCart'>Limpiar Carrito</Button>
    <br></br>
    
<form className='form'>
    <label className='inputLabel'>Nombre y Apellido</label>
    <input className='inputLabel' type={'text'} required="required"></input>
    <label className='inputLabel'>Email</label>
    <input className='inputLabel' type={'email'} required="required"></input>
    <label className='inputLabel'>Tel</label>
    <input className='inputLabel' type={'tel'} required="required"></input>
    <Button className='btnCompra' type='submit'>Confirmar Compra</Button>
</form>
   <h3 className='total'>Total: {cart.reduce((total, item) => total + (item.precio * item.cantidad),0)}</h3> 
  </div>
  )
}
