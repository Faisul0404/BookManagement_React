import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
   <header>
    <h1> Book Management System.</h1>
    <hr />
    <div>
    <NavLink to="/" className="link" activeClassName="active" exact>
        BookList
    </NavLink>
    <NavLink to="/add" activeClassName="active" >
        AddBook
    </NavLink>
    </div>
   </header>
  )
};

export default Header;