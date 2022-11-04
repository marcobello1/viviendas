import React from 'react';
import logo from "../logo sn header.svg";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="custom_navbar">
      <div className="navbar__logo">
       <img src={logo}  />
      </div> <hr></hr>
      <div className='navbartitle'>
       
       <p>Viviendas San Nicolás</p>
      </div>
      <div className='navbar_rigth'>
      </div>
    </div>
  );
};

export default NavBar;
