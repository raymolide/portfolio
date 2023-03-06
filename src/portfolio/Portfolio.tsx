import React from 'react'
import './portfolio.css'
import checkin_hotel from '../assets/checkin_hotel.jpg'
import room_hotel from '../assets/room_hotel.jpg'
import food_login  from '../assets/food_login.jpg'
import food_register from '../assets/food_register.jpg'
import music_player from '../assets/music_player.jpg'
import buy_coffee from '../assets/buy_coffee.jpg'

function Portfolio() {
    return (
        <div>
            <h1 className="heading"><span>my</span> Portfolio</h1>

            <div className="box-container">
                <div className="box">
                    <img src={checkin_hotel} alt="App Checkin" /> 
                    <p>jkjkjkjk</p>
                </div>

                <div className="box">                     
                    <img src={room_hotel} alt="App Checkin" />
                </div>

                <div className="box">
                    <img src={food_login} alt="App food login " /> 
                </div>

                <div className="box"> 
                    <img src={food_register} alt="App food register " />
                </div>

                <div className="box"> 
                    <img src={music_player} alt="Music player" />
                    <h3>Flutter</h3>
                </div>

                <div className="box"> 
                    <img src={buy_coffee} alt="Take me a coffee" />
                </div>
            </div> 

        </div>
    )
}

export default Portfolio