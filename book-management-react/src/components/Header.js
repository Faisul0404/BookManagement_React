import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
   <header>
   
    <div className='links'>
    <NavLink to="/" className="link" activeClassName="active" exact>
        BookList
    </NavLink>
    <NavLink to="/add" className="link" activeClassName="active" >
        AddBook
    </NavLink>
    </div>
    <hr />
    <h1> Book Management System</h1>
    
   </header>
  )
};

export default Header;