import React from "react";
import './itemList.css';
import { Item } from '../item/item';



export const ItemList = ({ products }) => {

    return (
        <div className="container-products">
            {
                products.map((product) => <Item key={product.id} {...product} />)
            }
        </div>
    );
};

