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
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<PreGame />} />
          <Route path='game' element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;