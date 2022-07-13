import React from 'react'

import Controls from "./Controls"
import GridBoard from "./GridBoard"
import NextBlock from "./NextBlock"
import ScoreBoard from "./ScoreBoard"
import MessagePopup from "./MessagePopups"
import KeyPressElement from "./KeyBoardControls"

export default function Game(props) {
  return (
    <>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        <KeyPressElement />
    </>
  );
}