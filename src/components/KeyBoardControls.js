import React, { useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pause, resume, moveDown, moveLeft, moveRight, rotate, hold } from '../actions'

const ESCAPE_KEYS = ["ArrowLeft", "ArrowRight", "ArrowDown","ArrowUp", " ", "p"];

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default function KeyPressElement() {
  const dispatch = useDispatch()
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)
  const handler = ({ key }) => {
    if (ESCAPE_KEYS.includes(String(key))) {
        switch(String(key)){
            case "ArrowDown":
              if (!isRunning || gameOver) { return }
              dispatch(moveDown())
              break;
              case "ArrowLeft":
              if (!isRunning || gameOver) { return }
              dispatch(moveLeft())
              break;
              case "ArrowRight":
              if (!isRunning || gameOver) { return }
              dispatch(moveRight())
              break;
              case "ArrowUp":
              if (!isRunning || gameOver) { return }
              dispatch(hold())
              break;
              case " ":
              if (!isRunning || gameOver) { return }
              dispatch(rotate())
              break;
              case "p":
                if (isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
                break;
            default:
              break;
        }
      console.log("Escape key pressed!");
    }
  };

  useEventListener("keydown", handler);

  return <span></span>;
}