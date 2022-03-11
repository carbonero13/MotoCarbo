import React from "react";
import './itemListHome.css';
import { ItemHome } from '../itemHome/itemHome';

export const ItemListHome = ({ products }) => {

    return (
        <div className="home-container-products">
            {
                products.map((product) => <ItemHome key={product.id} {...product} />)
            }
        </div>
    );
};

