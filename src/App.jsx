import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Menu from "./Components/Menu/Menu" 
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Ofertas from "./Components/Ofertas/Ofertas"
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='container'>
        <Title subTitle='Nuestros Ofertas' title='Cevicheria' P/>
        <Menu/>
        <About/>
        <Title subTitle='Galeria' title='Menu fotos' P/>
        <Ofertas/>
        <Title subTitle='Testimonios' title='Clientes dicen' P/>
        <Testimonials/>
        <Title subTitle='Contactanos' title='Ponerse en contacto' P/>
        <Contact/>
      </div>
    </div>
  )
}

export default App