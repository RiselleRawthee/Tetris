import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getData } from '../actions'


export default function PreGame() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [])

    const handleButtonClick = () => {
        navigate('/game')
    }

    const game = useSelector((state) => state.game)
    const { topTenHS } = game

    return (
        <>
            <div className="pre-game-container">
                <h2>All Time High Scores</h2>
                <div>
                    {topTenHS.sort((a, b) => (a.score < b.score) ? 1 : -1).map(
                        d => (
                        <div className="user-info" key={d.id}>
                            <div>{d.username}</div>
                            <aside className="score">{d.score}</aside>
                        </div>
                        )
                    )}
                </div>
            </div>
            <div className="start-button">
                <button onClick={handleButtonClick}>Start Game</button>
            </div>
        </>
    )
}