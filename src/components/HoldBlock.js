import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GridSquare from './GridSquare'
import { shapes } from '../utils'

export default function HoldBlock(props){
    const shape = useSelector((state) => state.game.shape);
    const rotation = useSelector((state) => state.game.rotation);
    const box = shapes[shape][rotation]
    // const requestRef = useRef()
    // const isRunning = useSelector((state) => state.game.isRunning);
    // useEffect(() => {
    //     requestRef.current = requestAnimationFrame(update)
    //     return () => cancelAnimationFrame(requestRef.current)
    // }, [isRunning])

    var hasShape
    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square === 0 ? 0 : shape} />
        })
    })
    
    return (
        <div className="hold-block">
            {grid}
        </div>
    )
    
}