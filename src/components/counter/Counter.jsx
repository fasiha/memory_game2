import './counter.css'
import { ThemeContext } from '../../App';
import React, { useState, useEffect,useContext } from 'react';

const Counter = ({counts})=>{
    const  {green} = useContext(ThemeContext)
    // flip color 
    const themeStyle = {
        backgroundColor: green? 'rgba(0, 128, 0, 0.781)':'#ff4800',
        color: 'white' 
     }
    return (
        <div className = 'counter' style={themeStyle}>
            <h2>{"Pairs: " + counts.pairs }</h2>
            <h2>{"Try: " + counts.trial}</h2>

        </div>
    )   
}

export default Counter;