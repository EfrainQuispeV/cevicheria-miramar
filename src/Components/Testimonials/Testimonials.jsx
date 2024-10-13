import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/iconarrowright.svg'
import backicon from '../../assets/iconarrowleft.svg'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'

const Testimonials = () => {
  
    const slider = useRef();
    let tx = 0; 

  const slideForward = ()=> {
    if(tx > -50){
      tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=> {
    if(tx < -0){
      tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={nexticon} alt="" className='next-btn' onClick={slideForward}/>  
      <img src={backicon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Leonardo Dicaprio</h3>
                  <span>California, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro odio quisquam molestiae molestias perferendis quo animi pariatur enim, error maiores in cum ex consectetur debitis id voluptatibus laboriosam ipsam!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Lean Nesan</h3>
                  <span>Manhatan, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro odio quisquam molestiae molestias perferendis quo animi pariatur enim, error maiores in cum ex consectetur debitis id voluptatibus laboriosam ipsam!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Pedro Suarez</h3>
                  <span>Lima, Peru</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro odio quisquam molestiae molestias perferendis quo animi pariatur enim, error maiores in cum ex consectetur debitis id voluptatibus laboriosam ipsam!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Gean Marco</h3>
                  <span>Barranco, Peru</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro odio quisquam molestiae molestias perferendis quo animi pariatur enim, error maiores in cum ex consectetur debitis id voluptatibus laboriosam ipsam!
              </p>
            </div>
          </li>
        </ul>
      </div>     
    </div>
  )
}

export default Testimonials