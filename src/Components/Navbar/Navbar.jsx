import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"


const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 200 ? setSticky(true): setSticky(false)
    })
  },[]);

  return (
  <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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