import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import React, { useState, useEffect } from 'react';
import astro from '../../images/back-r/astronaut.png'
import blue from '../../images/back-r/blue2.png'

// this way of writing might be able to get tested.
// need to find out the way to make it testable 
export default function TopBar(props) {
    
    const {green,setGreen} = props
    function handleClick(){
      setGreen(prev=>!prev)
    }
    return (
      <div className="top">
         <div className="topLeft" >
         <h1 className='logo'>Memory</h1> 
         </div>
      <div className="topCenter">
        <ul className="topList">
        <li className='topListItem'>
               <Link to='/'>
                 Home
               </Link>
        </li>
        <li className='topListItem'>
               <Link to='/about'>
                 About
               </Link>
        </li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
            <img 
            src={green? blue:astro} data-testid={green? 'initial':'clicked'} className='topImg' onClick={handleClick}/> 
        </ul>
      </div>
    </div>)
      }



  