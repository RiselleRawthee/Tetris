import React from 'react'

import Controls from "./Controls"
import GridBoard from "./GridBoard"
import NextBlock from "./NextBlock"
import ScoreBoard from "./ScoreBoard"
import MessagePopup from "./MessagePopups"
import KeyPressElement from "./KeyBoardControls"
import Header from "./Header"

export default function Game(props) {
  return (
    <div className='App'>
      <Header />
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        <KeyPressElement />
    </div>
  );
}