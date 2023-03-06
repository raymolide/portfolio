import React from 'react'  
import './education.css'
 

function Education() {
  return (
    <div className="education">
      <h1 className="heading">my <span>education</span></h1>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2022</span>
          <h3> IT and telecommunication engineering</h3>
          <p>Graduated in Computer Engineering and Telecommunications from Instituto Superior de Transporte e Telecomunicações.</p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2017</span>
          <h3>Computers Science</h3>
          <p>Graduated in Computers Science from Instituto Médio Politecnico.</p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2013</span>
          <h3> Electricity</h3>
          <p>Graduated in Basic Electricity from Escola Industrial e Comercial 3 de Fevereiro - Nampula.</p>
        </div>
      </div>
    </div>
  )
}

export default Education