import React, { useContext } from "react";
import './cartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';

export const CartWidget = () => {

    const { cartQuantityProduct, itemsCart } = useContext(CartContext);
    return (
        <div className="contenedor-widget">
            <ul className="nav-menu">
                <li >
                    <Link to={`/cartContainer/`}><FontAwesomeIcon icon={faShoppingCart} /></Link>
                </li>
            </ul> 
           {itemsCart.length !== 0 && (
                 <div className="texto-encima">{cartQuantityProduct}
            </div>
            )}   
        </div>
    )
}