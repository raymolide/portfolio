import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div>
            <h1 className="heading">Contact <span>me</span></h1>

            <div className="row">
                <div className="content">
                    <h3 className='title'>Contact Info</h3>
                    <div className="info">

                        <div className='email'>

                            <h3 >
                                <i className="fas fa-envelope"></i>
                                raymolide@gmail.com
                            </h3>
                        </div>
                        <h3>
                            <i className="fas fa-phone"></i>
                            (+258) 822570768
                        </h3>
                        <h3>
                            <i className="fas fa-phone"></i>
                            (+258)  848638584 (WhatsApp)
                        </h3>
                        <h3>
                            <i className="fas fa-map-marker-alt"></i>
                            Mozambique, Maputo, Av. Josina Machel.
                        </h3>
                    </div>
                </div>

                <form action="">
                    <input type="text" className='box' placeholder='name' />
                    <input type="email" className='box' placeholder='email' />
                    <input type="text" className='box' placeholder='project' />
                    <textarea className='box message' name="message" id="message" cols={30} rows={10} placeholder="Message"></textarea>
                    <button type='submit' className='btn'>Send <i className="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Contact