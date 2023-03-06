import React from 'react'
import './home.css'

function Home() {
  return (
    <div>
        <h3>HI THERE!</h3>
        <h3>I'm  <span>Raimundo Molide</span></h3>
        <p>Software Developer based in Maputo, Mozambique.</p>
        <a href="#about"><button className='btn'>about me <i className="fas fa-user"></i></button></a>
    </div>
  )
}

export default Home