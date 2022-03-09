import React from "react";
import './navBar.css';
import {CartWidget} from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (
    <div id="bg-img-id" className="bg-img bg-img-1">
         <div className="container-topnav">
          <div className="topnav">
            <Link className="topnav-img" to={`/`}><img src="https://i0.wp.com/www.mundomaipu.com.ar/wp-content/uploads/2021/06/benelli-logo.png" alt="" height="45px"/></Link>
            <Link to={`/`}>Inicio</Link>
            <Link to={`/itemListContainer`}>Motos</Link>
            <Link to={`/contacto`}>Contacto</Link>
            <Link to={`/nosotros`}>Nosotros</Link>
          </div>
        </div> 
        <div className="container-topnav-cart">
          <div className="topnav-cart">
            <CartWidget/>
          </div>
        </div>
      </div>
    )
}