import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';

const NavBar = () => {

  return (

      <div className="Navbar">
        <Link to="/oils"> Oils </Link> / 
        <Link to="/about"> About </Link> / 
        <Link to="/addnew"> New </Link>

      </div>



  )
}
export default NavBar;