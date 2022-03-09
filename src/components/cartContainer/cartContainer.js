import React, { useContext } from "react";
import './cartContainer.css';
import { Cart } from '../cart/cart'


import { CartContext } from "../../context/cartContext";

export const CartContainer = () => {

    
    
    const { itemsCart } = useContext(CartContext)
    

    return (

        <div className="container-list">
            { itemsCart ? (
                <Cart products={itemsCart} />
            ) : (
                <h1>No se encontraron productos en su carro!!!!!!</h1>
            )
            }
        </div>
    )
}