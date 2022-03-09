import React from "react";
import './itemCount.css';


export const ItemCount = ({ stock, onAdd, countItemBuy, setCountItemBuy }) => {

    const sumaContador = () => {
        if (countItemBuy < stock) {
            setCountItemBuy(countItemBuy + 1)
        }

    }
    const restaContador = () => {
        if (countItemBuy > 1) {
            setCountItemBuy(countItemBuy - 1)
        }
    }

    return (
        <div className="itemcount-details" >
            <div className="count-row">
                <button className="btn-blue" onClick={() => sumaContador()}>+</button>    
                <h3 className="count-item">{countItemBuy} </h3>
                <button className="btn-blue" onClick={() => restaContador()}>-</button>
            </div>
            <div className="purchase-details" onClick={onAdd}>Comprar</div>
        </div>
    );
}