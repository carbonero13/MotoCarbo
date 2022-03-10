import React from "react";
import './orderItem.css';


export const OrderItem = ({
  quantity,
  price,
  title,
}) => {



  return (
    <div className="order-item">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{quantity} </p>
      </div>
      <div>
        <p>$ {new Intl.NumberFormat('es-ES').format(price)}</p>
      </div>
    </div>);
};