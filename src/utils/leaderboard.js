import './leaderboard.css'



export default function Leaderboard(){
    const scoreList = [
        {rank: '1',
        username: 'aaa',
        score:'123'},
        {rank: '2',
        username: 'aaa',
        score:'123'},
        {rank: '3',
        username: 'aaa',
        score:'123'},
    ];

    const playerScore = 0;

    function renderRow(props) {
        return (
          <tr>
            <td>{ props.rank }</td>
            <td>{ props.username }</td>
            <td>{ props.score }</td>
          </tr>
        );
      };
    
    return(
            <div className='Leader-board' id="leaderboardID">
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
            </div>
    );
}