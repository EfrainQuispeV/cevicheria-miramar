import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"


const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className="logo"/>
      <ul>
        <li>Inicio</li>
        <li>Menu</li>
        <li>Nosotros</li>
        <li>Sedes</li>
        <li>Testimonios</li>
        <li><button className='btn'>Contactanos</button></li>
      </ul>
    </nav>
  )
}

export default Navbar