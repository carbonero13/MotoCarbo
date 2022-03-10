import React, { useContext } from "react";
import './cartItem.css';
import { CartContext } from "../../context/cartContext";

export const CartItem = ({
  id,
  quantity,
  image,
  price,
  title,
}) => {

  const { removeItemCart } = useContext(CartContext)

  return (
    <div className="Cart-Items">
      <div className="image-box">
        <img src={image} alt="" />
      </div>
      <div className="about">
        <h1 className="title">{title}</h1>
      </div>
      <div className="counter">
        <div className="count-row">
          <h3 className="cart-count-item">{quantity} </h3>
        </div>
      </div>
      <div className="prices">
        <div className="amount">$ {new Intl.NumberFormat('es-ES').format(price)}</div>
        <div className="remove" onClick={() => removeItemCart(id,  quantity,price)}><u>Eliminar</u></div>

      </div>
    </div>);
};