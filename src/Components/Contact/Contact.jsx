import React from 'react'
import './Contact.css'
import msj from '../../assets/iconmsj.svg'
import iconmsj from '../../assets/iconmessage.svg'
import iconphone from '../../assets/iconphone.svg'
import iconubication from '../../assets/iconubication.svg'
import arrowright from '../../assets/arrow-right.svg'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
      <h3>Enviar un mensaje <img src={msj} alt="" /></h3>  
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium mollitia ab tenetur, repellat quae impedit nemo. Incidunt accusantium fugiat fuga consectetur maxime, debitis nam libero exercitationem consequatur quae laudantium.
      </p>
      <ul>
        <li><img src={iconmsj} alt="" /> EfrainQuispe156@gmail.com</li>
        <li><img src={iconphone} alt="" />+51 99999999</li>
        <li><img src={iconubication} alt="" />Av. Faisanes. urb, chorrillos - lima peru</li>
      </ul>
      </div>
      <div className='contact-col'>
        <form action="">
          <label htmlFor="">Tu nombre</label>
            <input type="text" name="name" placeholder='ingresar tu  nombre' required/>
          <label htmlFor="">Numero Celular</label>
            <input type="tel" name="phone" placeholder='ingresar tu  celular' required/>
          <label htmlFor="">Escribe aqui tu mensaje</label>
            <textarea name="menssage" rows="6" placeholder='ingresar tu  mensaje' required/>
            <button type='submit' className='btn dark-btn'>Enviar ahora <img src={arrowright} alt="" /></button>
        </form>
        <span>
          
        </span>
      </div>
    </div>
  )
}

export default Contact