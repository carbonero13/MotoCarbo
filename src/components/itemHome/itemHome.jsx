import React from "react";
import './itemHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const ItemHome = ({
    id,
    image,
    price,
    title,
}) => {
    return (
        < div className="home-flex-items">
            <div className="home-card-item">
                <div className="home-imgBox-item">
                    <img src={image} alt="mouse corsair" className="home-mouse-item" />
                </div>
                <div className="home-contentBox-item">
                    <h3>{title}</h3>
                    <h2 className="home-price-item">$ {new Intl.NumberFormat('es-ES').format(price)}</h2>
                    <Link className="home-buy-item" to={`/ItemDetailsContainer/${id}`}><FontAwesomeIcon icon={faSearch} /> Detalle</Link>
                </div>
            </div>
        </div >);
};