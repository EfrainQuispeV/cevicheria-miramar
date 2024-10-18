import React from 'react'
import "./Home.css"
import arrow from "../../assets/arrow-right.svg"

function Hero() {
  return (
    <div className='hero container' name='inicio'>
      <div className='hero-text'>
        <h1> La cevichería preferida de los peruanos y turistas </h1>
        <p> Somos Miramar, una cevichería y restaurante creado no sólo para ofrecerles comida marina sino para transportarlos desde que ingresan
        a la sensación de estar en la playa.</p>
        <button className='btn'>explore more <img src={arrow} alt="" /> </button>

      </div>
    </div>
  )
}

export default Hero