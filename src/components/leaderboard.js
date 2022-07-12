import './leaderboard.css'
import DummyData from '../services/DummyData';
import { useNavigate } from 'react-router-dom';

export default function Leaderboard(){
    const scoreList = DummyData();
    const playerScore = 0;
    const navigate = useNavigate();

    function renderRow(props) {
        return (
          <tr>
            <td>{ props.id }</td>
            <td>{ props.username }</td>
            <td>{ props.score }</td>
          </tr>
        );
      };
    
    return(
            <div className='leaderboard'>
              <h1 id="header"> Leaderboard </h1>
              <p> Your score is: {playerScore}</p>
              <table id="leaderboardTable">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Score</th>
                  </tr>
                </thead>
                {scoreList.map((item) => renderRow(item))}
              </table>
              <button onClick={() => navigate("../game")} className='leaderboardButton'>Return to Game</button>
            </div>
    );
}