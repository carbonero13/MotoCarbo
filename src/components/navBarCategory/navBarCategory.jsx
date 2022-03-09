import React from "react";
import './navBarCategory.css';
import { NavLink } from 'react-router-dom';

export const NavBarCategory = () => {

  return (
    <nav className="nav-category">
      <NavLink exact to={`/itemListContainer/`} activeClassName="active-link-0">Todos</NavLink>
      <NavLink to={`/itemListContainer/naked-classic`} activeClassName="active-link-1">Naked/Classic</NavLink>
      <NavLink to={`/itemListContainer/touring`} activeClassName="active-link-2" >Touring</NavLink>
      <NavLink to={`/itemListContainer/scrambler`} activeClassName="active-link-3" >Scrambler</NavLink> 
  </nav>
  )
}