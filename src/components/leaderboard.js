import React from 'react';
import './leaderboard.css'
import DummyData from '../services/DummyData';

export default function Leaderboard(){
    const scoreList = DummyData().sort((a, b) => { return b.score - a.score });
    const playerScore = 0;

    function renderRow(props, index) {
        return (
          <tr>
            <td>{ index }</td>
            <td>{ props.username }</td>
            <td>{ props.score }</td>
          </tr>
        );
      };
    
    return(
            <div className='leaderboard' style={{paddingLeft: '300px'}}>
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
                {scoreList.map((item, index) => renderRow(item, index + 1))}
              </table>
            </div>
    );
}