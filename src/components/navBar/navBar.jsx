import React from "react";
import './navBar.css';
import { CartWidget } from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
  const { pathname } = useLocation();
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const random = getRandomArbitrary(2, 7)
  const classRandom = "bg-img-" + random
  return (
    <div id="bg-img-id" className={`bg-img ${pathname === '/home' || pathname === '/' ? classRandom : 'bg-img-1'}`}>
      <div className="container-topnav">
        <div className="topnav">
          <Link className="topnav-img" to={`/`}><img src="https://i0.wp.com/www.mundomaipu.com.ar/wp-content/uploads/2021/06/benelli-logo.png" alt="" height="45px" /></Link>
          <Link to={`/`}>Inicio</Link>
          <Link to={`/itemListContainer`}>Motos</Link>
          <Link to={`/orderResumeSearch`}><FontAwesomeIcon icon={faSearch} /> Orden</Link>
          <Link to={`/contactUs`}>Contacto</Link>
        </div>
      </div>
      <div className="container-topnav-cart">
        <div className="topnav-cart">
          <CartWidget />
        </div>
      </div>
    </div>
  )
}