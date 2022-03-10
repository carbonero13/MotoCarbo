import React from "react";
import './navBarCategory.css';
import { Link } from 'react-router-dom';

export const NavBarCategory = () => {

  return (
    <nav className="nav-category">
      <Link to={`/itemListContainer/`}>Todos</Link>
      <Link to={`/itemListContainer/naked-classic`}>Naked/Classic</Link>
      <Link to={`/itemListContainer/touring`}>Touring</Link>
      <Link to={`/itemListContainer/scrambler`}>Scrambler</Link>
      
  </nav>
  )
}