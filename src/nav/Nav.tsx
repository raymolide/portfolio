import React from 'react'
import './nav.css'
import imagem from '../assets/me.png';
function Nav() {
  return (
    <header>
        <div className='user'>
            <img src={imagem} alt="" />
            <h3 className='name'>Raimundo Molide</h3>
            <p className='post'> Mobile and Web Developer</p>
       </div>

       <nav className="navbar">
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#education">education</a></li>
                <li><a href="#portfolio">porfolio</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
       </nav>

    </header>
  )
}

export default Nav