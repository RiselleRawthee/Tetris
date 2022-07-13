import React from 'react'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

import Controls from "./Controls"
import GridBoard from "./GridBoard"
import NextBlock from "./NextBlock"
import ScoreBoard from "./ScoreBoard"
import MessagePopup from "./MessagePopup"
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