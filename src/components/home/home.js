import React from "react";
import './home.css';
import { Link } from 'react-router-dom';


export const Home = () => {

  return (

    <div className="hero-text">
      <h3>Bienvenido</h3>
      <Link className="btn-catalog" to={`/itemListContainer`}>Catalogo de Motos</Link>
      <h3>Carbo Concecionario Oficial Benelli</h3>
    </div>

  )
}