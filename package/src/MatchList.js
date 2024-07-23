import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MatchList.css'; // Ensure you create and import the CSS file



const MatchList = () => {
  console.log("I am inside MatchList");
  const [matches, setMatches] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const source = axios.CancelToken.source();
            const timeout = setTimeout(() => {
                source.cancel('Request timed out');
            }, 50000); // 5 seconds in milliseconds
            const response = await axios.post('http://localhost:8080/homepage/get', { user_id : 1}, 
                {
                headers: {
                  'Content-Type': 'application/json',
                },
                cancelToken: source.token,});
        // const response = await fetch(''); // Replace with your actual API endpoint
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        const data = response.data;
        console.log('Fetched data:', data); // Add this line to check the response
        setMatches(data.matches);
        setUserData(data.user_data);
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatches();
  }, []);

  
  return (
    <div>
      <header className="App-header">
        {userData.user_name ? (
          <>
            <h1>Welcome, {userData.user_name}</h1>
            <p>Your balance: ${userData.user_money?.toFixed(2)}</p>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </header>
      <main>
        <ul className="match-list">
          {matches.map(match => (
            <li key={match.match_id} className="match-item">
              <Link to={`/matchpage/${match.match_id}`}>
                <div className="match-details">
                  <span className="team-name">{match.team_one}</span>
                  <span className="score">{match.team_one_score || 'N/A'}</span>
                  <span className="vs">vs</span>
                  <span className="team-name">{match.team_two}</span>
                  <span className="score">{match.team_two_score || 'N/A'}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default MatchList;
