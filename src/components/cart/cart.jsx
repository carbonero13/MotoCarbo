import React, { useContext, Fragment } from "react";
import './cart.css';
import { CartItem } from "../cartItem/cartItem";
import { CartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';

export const Cart = ({ products }) => {

  const { costTotalCart } = useContext(CartContext)
  const { cartQuantityProduct } = useContext(CartContext)
  const { clearAllCart } = useContext(CartContext)

  return (



    <div className="Cart-Container-body">
      <div className="Cart-Container">
        {products.length ? (
          <Fragment>
            <div className="Header">
              <h3 className="Heading">Orden</h3>
              <h5 className="Action" onClick={() => clearAllCart()} >Eliminar todo</h5>
            </div>
            <div>
              {
                products.map((product) => <CartItem key={product.id} {...product} />)
              }
            </div>
            <hr></hr>
            <div className="checkout">
              <div className="total">
                <div>
                  <div className="Subtotal">Sub-Total</div>
                  <div className="items">{cartQuantityProduct} items</div>
                </div>
                <div className="total-amount">$ {new Intl.NumberFormat('es-ES').format(costTotalCart)}</div>
              </div>
              <div className="btn-carrito">
               <Link  to="../userForm">Checkout</Link>
               </div>
            </div>
          </Fragment>
        ) : (
          <h1>Su carrito esta Vacio</h1>
        )
        }
      </div>
    </div>
  )
}