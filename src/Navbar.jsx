import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <NavLink className="Nav_link"  to="/">
          Home
        </NavLink>
        <NavLink className="Nav_link"  to="/about">
          About
        </NavLink>
        <NavLink className="Nav_link"  to="/contact">
          Contact
        </NavLink>
        <NavLink className="Nav_link"  to="/skills">
          Skills
        </NavLink>
        <NavLink className="Nav_link"  to="/projects">
          Projects
        </NavLink>
      </div>
    </>
  );
}

export default Navbar