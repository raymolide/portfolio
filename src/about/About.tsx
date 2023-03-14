import React from 'react'
import './about.css'

function About() {
    return (
        <div>
            <h1 className="heading">
                <span>about</span> me
            </h1>

            <div className="row">
                <div className="info">
                    <div className="inlinecontent">
                        <h3>
                            <span>name: </span>
                        </h3>
                        <h3> Raimundo Molide</h3>
                    </div>

                    <div className="inlinecontent">
                        <h3>
                            <span>age: </span>
                        </h3>
                        <h3>  { new Date().getFullYear()-1998} years old</h3>
                    </div>

                    <div className="inlinecontent">
                        <h3>
                            <span>qualification: </span>

                        </h3>
                        <h3> IT Engeenier </h3>
                    </div>

                    <div className="inlinecontent">
                        <h3>
                            <span>Certified by: </span>
                        </h3>
                        <div>
                            <ul className='unordenad'>
                                <li><h3>Instituto Superior de Transportes e Comunicações</h3></li>
                                <li><h3>Udemy</h3></li>
                                <li><h3>Palo Alto</h3></li>
                                <li><h3>Intel Corporation</h3></li>
                            </ul> 
                        </div>
                        
                    </div>
                    <div className="inlinecontent">
                        <h3>
                            <span>post: </span>
                        </h3>
                        <h3> Mobile and Web Developer</h3>
                    </div>
                    <div className="inlinecontent">
                        <h3>
                            <span>langague: </span>
                        </h3>
                        <h3>
                            Portuguese/English</h3>
                    </div>


                    <a href="#">
                        <button className="btn">
                            download CV <i className="fas fa-download"></i>
                        </button>
                    </a>


                </div>

                <div className="counter" style={{ width: 'fit-content' }}>
                    <div className="box">
                        <span>8+</span>
                        <h3>years of experience</h3>
                    </div>
                    <div className="box">
                        <span>25+</span>
                        <h3>project completed</h3>
                    </div>
                    <div className="box">
                        <span>15+</span>
                        <h3>happy clients</h3>
                    </div>
                    <div className="box">
                        <span>2+</span>
                        <h3>event speaker</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About