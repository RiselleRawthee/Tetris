import './leaderboard.css'

export default function Leaderboard(){
    return(
        <div classname="leaderboard" id="leaderboardID">
            <h1 classname="header"> Leaderboard </h1>
            <p> Your score is: </p>
            <p id="score"></p>
            <table>
                <tr>
                    <th>Username</th>
                    <th>High Score</th>
                </tr>
                <tr>
                    <td>mika1234</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>lisa1999</td>
                    <td>456</td>
                </tr>
            </table>
        </div>
    );
}