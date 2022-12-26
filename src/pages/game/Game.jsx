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
    
    
     
    return (
        <div className='game' >
            <Counter counts ={{pairs,trial}}/>
            <Play sets={{setTrial,setPairs,pairs,trial}} />
        </div>
    )
}

export default Game;