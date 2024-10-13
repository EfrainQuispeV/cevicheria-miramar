import React from 'react'
import './Ofertas.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import arrowright from '../../assets/arrow-right.svg'
const Ofertas = () => {
  return (
    <div className='ofertas'>
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn dark-btn'>ver mas <img src={arrowright} alt="" /></button>
    </div>
  )
}

export default Ofertas