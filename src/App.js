import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import './App.css';

import Game from './components/Game';
import Header from './components/Header';
import PreGame from './components/PreGame';
import Profile from './components/Profile';
import Leaderboard from './components/leaderboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<PreGame />} />
          <Route path='game' element={<Game />} />
          <Route path='profile' element={<Profile />} />
          <Route path='leaderboard' element={<Leaderboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;