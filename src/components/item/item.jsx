import React from "react";
import './item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const Item = ({
    id,
    image,
    price,
    title,
}) => {
    return (
        < div className="flex-items">
            <div className="card-item">
                <div className="imgBox-item">
                    <img src={image} alt="mouse corsair" className="mouse-item" />
                </div>
                <div className="contentBox-item">
                    <h3>{title}</h3>
                    <h2 className="price-item">$ {new Intl.NumberFormat('es-ES').format(price)}</h2>
                    <Link className="buy-item" to={`/ItemDetailsContainer/${id}`}><FontAwesomeIcon icon={faSearch} /> Detalle</Link>
                </div>
            </div>
        </div >);
};