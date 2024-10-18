import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import iconmenu from "../../assets/iconmenu.svg"

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 200 ? setSticky(true): setSticky(false)
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=> {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
  <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo"/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='inicio' smooth={true} offset={0} duration={500}>Inicio</Link></li>
        <li><Link to='menus' smooth={true} offset={-260} duration={500}>Ofertas</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Nosotros</Link></li>
        <li><Link to='ofertas' smooth={true} offset={-260} duration={500}>La carta</Link></li>
        <li><Link to='testimonios' smooth={true} offset={-260} duration={500}>Testimonios</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contactanos</Link></li>
      </ul>
      <img src={iconmenu} alt=""  className='menu-icon' onClick={toggleMenu}/>
  </nav>
  )
}

export default Navbar;
