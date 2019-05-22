import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'teal',
  textDecoration: 'none',
  color: 'white',
  align: 'center',

}

/* add the navbar component */
const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'darkpink'
        }}
      >Home</NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >About</NavLink>
      <NavLink
        to="/add"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >New</NavLink>
    </div>

  )
}

export default NavBar;
