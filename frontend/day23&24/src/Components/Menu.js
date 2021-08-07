import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <div className='nav'>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
