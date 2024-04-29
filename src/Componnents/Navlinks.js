import { NavLink } from "react-router-dom";

import React from 'react'

const Navlinks = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
        

    </div>
  )
}

export default Navlinks 