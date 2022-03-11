import React from "react";
import './orderResume.css';
import { OrderItem } from "../orderItem/orderItem";


export const OrderResume = ({ order }) => {
    console.log(order)
    return (
        <div className="order-container-body">
            <div class="order-image">
                <div class="order-text">
                    <div className="order-container">
                        <div className="order-details">
                            <div className="order-header">
                                <div className="order-header-date">
                                    <p>{order.fechaOrder} </p>
                                </div>
                                <div className="order-header-orderid">
                                    <p>Orden #{order.id} </p>
                                </div>
                            </div>
                            {/* <div className="order-buyer">
                                <div>
                                    <p>Comprador: {order.name} </p>
                                </div>
                                <div>
                                    <p>Telefono: {order.phone} </p>
                                </div>
                                <div>
                                    <p>Email: {order.email} </p>
                                </div>
                            </div> */}

                            <div className="order-items" >
                                <div className="order-item order-item-header">
                                    <div>
                                        <p>Producto</p>
                                    </div>
                                    <div>
                                        <p>Cant.</p>
                                    </div>
                                    <div>
                                        <p>Importe</p>
                                    </div>
                                </div>
                                {
                                    order.items.map((product) => <OrderItem key={product.id} {...product} />)
                                }
                            </div>
                            <div className="order-resume">
                                <div className="order-total">
                                    <div>
                                        <div className="order-subtotal">Total</div>
                                        <div className="order-itemscount">{order.itemscount} items</div>
                                    </div>
                                    <div className="order-total-amount">$ {new Intl.NumberFormat('es-ES').format(order.total)}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};