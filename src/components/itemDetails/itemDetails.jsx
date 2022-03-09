import React, { Fragment, useContext, useState } from "react";
import './itemDetails.css';
import { ItemCount } from "../itemCount/itemCount"
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'


export const ItemDetails = ({ product }) => {
    const initial = 1;
   
    const [countItemBuy, setCountItemBuy] = useState(initial);
    const [showButton, setShowButton] = useState(true);
    const buyHandleClick = () => setShowButton(false);
    const { addItemCart } = useContext(CartContext)
   
    const onAdd = () => {
        addItemCart(product, countItemBuy);
        console.log("itemDetails: " + product.title + " _ " + countItemBuy)
        buyHandleClick();

    };
    
    return (
        < div className="flex-items-details">
            {
                product ? (
                    <Fragment>
                        <div className="card-details">
                            <div className="card-img-details">
                                <img className="img-product-details" src={product.image} alt="Producto" />
                            </div>
                            <div className="card-description-details">

                                <h1 className="title-product">{product.title}</h1>
                                <p>{product.description}</p>
                                <div className="description-details">
                                    {/*   <span className="stars-details">Ranking {product.rating.rate}</span> */}
                                    <span className="price-details">$ {new Intl.NumberFormat('es-ES').format(product.price)}</span>
                                </div>
                                {showButton && (
                                    <ItemCount className="itemcount-details" stock={product.stock} onAdd={onAdd} countItemBuy={countItemBuy} setCountItemBuy={setCountItemBuy} />
                                )}
                                {showButton || (
                                    <div className="btn-column">
                                        <Link className="btn-productos" to={`/itemListContainer`}>Continuar compra</Link>
                                        <Link className="btn-carrito" to={`/cartContainer`}>Ir a carrito</Link>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <p>Cargando Producto</p>
                )
            }
        </div >
    )
};