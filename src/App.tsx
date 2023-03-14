import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './nav/Nav';
import Menu from './menu/Menu';
import Home from './home/Home';
import About from './about/About';
import Education from './education/Education';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import rocket from './assets/rocket.png'
import Certification from './certification/Certification';

function App() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {     
    console.log(window.scrollY)
    setScroll(window.scrollY)
  }, [scroll])

  return (
    <div className="App">

      <Nav />
      <Menu />
      <section className='home' id='home'>
        <Home />
      </section>

      <section className='about' id='about'>
        <About />
      </section>

      <section className='education' id='education'>
        <Education />
      </section>
      
      <section className='certification' id='certification'>
        <Certification />
      </section>

      <section className='portfolio' id='portfolio'>
        <Portfolio />
      </section>

      <section className='contact' id='contact'>
        <Contact />
      </section>


      <div className="top">
        <a href="#home">
          <img src={rocket} alt="topRocket" />
        </a>
      </div>




    </div>
  );
}

export default App;
