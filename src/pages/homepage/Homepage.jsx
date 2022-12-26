import './homepage.css'
import c from '../../images/cards-r/Playing_card_club_A.svg'
import d from '../../images/cards-r/Playing_card_diamond_A.svg'
import s from '../../images/cards-r/Playing_card_spade_A.svg'
import h from '../../images/cards-r/Playing_card_heart_A.svg'
import r from '../../images/back-r/astronaut.png'
import g from '../../images/back-r/blue2.png'

import { Link } from "react-router-dom";
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';
import {useNavigate} from 'react-router-dom'



const Homepage = ()=>{
    const  {green} = useContext(ThemeContext)
    
    // flip color 
    const themeStyle = {
        backgroundColor: green? 'rgba(0, 128, 0, 0.781)':'#ff4800',
        color: green? 'white': 'black' 
     }

    return (
        <div className='homepage' style={themeStyle}>
            <h1 className='title'>Choose a pair of Cards</h1>
            <div className='cards'>
                <img attr='trump card' src={green?g:r}></img>
                <img attr='trump card' src={d}></img>
                <img attr='trump card' src={s}></img>
                <img attr='trump card' src={h}></img>
            </div>
            <Link to='/game'>
            <button>Game Start</button>
            </Link>
        </div>
    )
}

export default Homepage;