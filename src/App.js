import './App.css';
import TopBar from './components/topbar/TopBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import Game from './pages/game/Game'
import Score from './pages/score/Score'
import NoPage from './pages/nopage/Nopage'

export const ThemeContext = React.createContext()

function App() {
  const {render,green} = TopBar()

  return (
    <div className="App">
    
    <Router basename='memory_game2'>
      {render}
      <div className='content'>
      <ThemeContext.Provider value={{green}}>
      <Routes>
        <Route exaxt path='/' element = {<Homepage />}/>
        <Route path ='/about' element = {<About />} />
        <Route path ='/game' element={<Game />} />
        <Route path= '/score' element= {<Score />} /> 
        <Route path='*' element={<NoPage />} />
      </Routes>
      </ThemeContext.Provider>
      </div>

    </Router>
    </div>
  );
}

export default App;
