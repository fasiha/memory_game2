import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import React, { useState, useEffect } from 'react';
import astro from '../../images/back-r/astronaut.png'
import blue from '../../images/back-r/blue2.png'

export default function TopBar() {
    
    const [green,setGreen] = useState(true)
    function handleClick(){
      setGreen(prev=>!prev)
    }
    return {green,
       render:(
      <div className="top">
         <div className="topLeft" >
         <h1 className='logo'>Memory</h1> 
         </div>
      <div className="topCenter">
        <ul className="topList">
               <Link to='/'>
                 <li className='topListItem'>Home</li>
               </Link>
               <Link to='/about'>
                 <li className='topListItem'>About</li>
               </Link>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
            <img 
            src={green? blue:astro} className='topImg' onClick={handleClick}/> 
        </ul>
      </div>
    </div>)
      }
  }