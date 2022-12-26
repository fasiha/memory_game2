import './score.css'
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';
import {useNavigate,useLocation} from 'react-router-dom';

const Score = () => {
   const  {green} = useContext(ThemeContext)
   // flip color 
   const themeStyle = {
    backgroundColor: green? 'rgba(0, 128, 0, 0.781)':'#ff4800',
    color: 'white' 
 }
   const location = useLocation()
   const trial = location.state.trial

    return (
   
    <div className='score' style={themeStyle}>
       <h1>Score</h1>
       <h1>{trial} trials to finish the game</h1>
       <h2>Thank you for Playing</h2>
    </div>
    ) 
  }
  
  export default Score;