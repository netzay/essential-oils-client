import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <Navbar bg="danger" variant="light" sticky="top">
      <Nav className="mr-auto">
        <Link to="/oils">Oils</Link>||
        <Link to="/about">About</Link>||
        <Link to="/addnew">New</Link>
      </Nav>
    </Navbar>
  )

}

export default NavBar;