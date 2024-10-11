import React from 'react';
import './Menu.css';
import ceviche from '../../assets/ceviche.jpg';
import duoMarino from '../../assets/duomarino.jpg';
import trioMarino from '../../assets/triomarino.jpg';
import icono1 from '../../assets/iconoceviche1.png';
import icono2 from '../../assets/iconoceviche2.png';
import icono3 from '../../assets/iconoceviche3.png';

const Menus = () => {
  return (
    <div className="menus">
        <div className="menu">
            <img src={ceviche} alt="" />
            <div className="caption">
              <img src={icono1} alt="" />
              <p>Menu Ceviche</p>
            </div>
        </div>
        <div className="menu">
            <img src={duoMarino} alt="" />
            <div className="caption">
              <img src={icono2} alt="" />
              <p>Duo marino</p>
            </div>
        </div>
        <div className="menu">
            <img src={trioMarino} alt="" />
            <div className="caption">
              <img src={icono3} alt="" />
              <p>Trio Marino</p>
            </div>
        </div>
    </div>
  )
}

export default Menus