import './App.css';
import TopBar from './components/topbar/TopBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState} from 'react';

import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import Game from './pages/game/Game'
import Score from './pages/score/Score'
import NoPage from './pages/nopage/Nopage'

export const ThemeContext = React.createContext()

function App() {
  const [green,setGreen] = useState(true)

  return (
    <div className="App">
    
    <Router basename='memory_game2'>
      <TopBar green={green} setGreen={setGreen}/>
      <div className='content'>
      <ThemeContext.Provider value={{green}}>
      <Routes>
        <Route exact path='/' element = {<Homepage />}/>
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
