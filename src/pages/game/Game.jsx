import './game.css'
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';
import {useNavigate} from 'react-router-dom'

import Play from '../../components/play/Play'
import Counter from '../../components/counter/Counter'


const Game = ()=>{
    const  {green} = useContext(ThemeContext)
    const [pairs,setPairs] = useState(0)
    const [trial, setTrial] = useState(0)
    
    // flip color 
    const themeStyle = {
        backgroundColor: green? 'rgba(0, 128, 0, 0.781)':'#ff4800',
        color: 'white' 
     }
     
    return (
        <div className='game' style={themeStyle}>
            <Counter counts ={{pairs,trial}}/>
            <Play sets={{setTrial,setPairs}} />
        </div>
    )
}

export default Game;