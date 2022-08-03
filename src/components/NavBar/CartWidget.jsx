import React, { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { myContext } from "../Context/CartContext";
import "./CartWidget.css";




export default function CartWidget() {

const { cart } = useContext(myContext); 



    return(
        <div className="espacio">
        <Link to={'/cart'} className="cartWid"><FaOpencart/>        
        {cart.length}</Link>
        </div>
    );
}
