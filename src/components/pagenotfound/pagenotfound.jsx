import React from "react";
import './pagenotfound.css';
import { Link } from 'react-router-dom';


export const PageNotFound = () => {

  return (

    <div className="hero-text-not">
      <h3>Pagina No Encontrada</h3>
      <Link className="btn-catalog-not" to={`/itemListContainer`}>Catalogo de Motos</Link>
      <h3>Carbo Concecionario Oficial Benelli</h3>
    </div>

  )
}