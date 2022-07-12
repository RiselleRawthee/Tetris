import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import './App.css';

import Controls from './components/Controls';
import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import MessagePopup from './components/MessagePopup';
import KeyPressElement from './components/KeyBoardControls';
import HoldBlock from './components/HoldBlock';
import Leaderboard from './utils/leaderboard';
//import LeaderBoardElement from .''
const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        <KeyPressElement />
        <HoldBlock />
        <Leaderboard/>
      </div>
    </Provider>
  );
}

export default App;