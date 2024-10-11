import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Menu from "./Components/Menu/Menu" 
import Title from "./Components/Title/Title"
 const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='container'>
        <Title subTitle='Nuestros Ofertas' title='Cevicheria' P/>
        <Menu/>
      </div>
    </div>
  )
}

export default App