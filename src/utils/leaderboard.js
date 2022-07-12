import './leaderboard.css'

export default function Leaderboard(){
    return(
        <section classname="leaderboard" id="leaderboardID">
            <h1 id="header"> Leaderboard </h1>
            <p> Your score is: </p>
            <p id="score"></p>
            <table id="leadertable" >
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
        </section>
    );
}