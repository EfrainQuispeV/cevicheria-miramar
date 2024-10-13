import React from 'react'
import './About.css'
import frontmiramar from '../../assets/frontmiramar.png'
import iconoplay from '../../assets/iconoplay.svg'

 const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={frontmiramar} className='about-img' />
        <img src={iconoplay} className="play-icon" />
      </div>
      <div className="about-right">
        <h3>Sobre nosotros</h3>
        <h2>nuestras sedes</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque fugit, molestias ullam architecto quae illo totam voluptatem libero repellat numquam dolor facilis recusandae ab ipsam. Vitae, beatae. Dolorum, fugit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic esse ipsam voluptatem aut libero deleniti sapiente id, blanditiis temporibus dolorum sed fuga velit error vero architecto cumque, illo molestias.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem pariatur eum ratione assumenda libero repellendus qui sit, in eligendi eaque, error consectetur corporis. Dolores voluptatem animi debitis deleniti atque sint!</p>
      </div>
    </div>
  )
}


export default About