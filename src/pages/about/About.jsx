import './about.css'

import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';
import {useNavigate} from 'react-router-dom'


const About = ()=>{
    const  {green} = useContext(ThemeContext)
    // flip color 
    const themeStyle = {
        backgroundColor: green? 'rgba(0, 128, 0, 0.781)':'#ff4800',
        color: 'white' 
     }
    return (
        <div className='about' style={themeStyle}>
            <h1>About</h1>
            <p>This Memory Card game was build with React. If you click on the card in the navigation bar, the application
                 design will change a little</p>
            <p>Thank you for checking the about page. Hope you enjoy playing the game.</p>

            <h3>Credits</h3>
            <p>Card images from <a href="https://en.wikipedia.org/wiki/Standard_52-card_deck">https://en.wikipedia.org/wiki/Standard_52-card_deck</a> and 
 <a href='https://tekeye.uk/playing_cards/svg-playing-cards'>https://tekeye.uk/playing_cards/svg-playing-cards</a></p>
        </div>
    )
}

export default About;