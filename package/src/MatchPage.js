import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MatchPage.css';

const MatchPage = () => {
  console.log("I am inside MatchPage");
  const { matchId } = useParams();
  const [matchData, setMatchData] = useState(null);
  const [oddsData, setOddsData] = useState(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const source = axios.CancelToken.source();
        const timeout = setTimeout(() => {
          source.cancel('Request timed out');
        }, 50000); // 50 seconds in milliseconds
        
        const response = await axios.post('http://localhost:8080/match/get', { match_id: matchId }, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
          cancelToken: source.token,
        });
        setMatchData(response.data);
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatchData();
  }, [matchId]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws/odds');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      // Send the matchId once the connection is established
      socket.send(JSON.stringify({ matchId: matchId }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setOddsData(data);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, [matchId]);

  if (!matchData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="match-page">
      <h1>{matchData.team_one_name} vs {matchData.team_two_name}</h1>
      <p><strong>Score:</strong> {matchData.team_one_score} - {matchData.team_two_score}</p>
      <p><strong>Live Match:</strong> {matchData.is_live_match ? 'Yes' : 'No'}</p>
      <p><strong>Created At:</strong> {new Date(matchData.created_at).toLocaleString()}</p>
      <p><strong>Updated At:</strong> {new Date(matchData.updated_at).toLocaleString()}</p>
      <p><a href={matchData.url} target="_blank" rel="noopener noreferrer">Watch Live</a></p>

      {oddsData && (
        <div className="odds-data">
          <h2>Odds for Each Ball</h2>
          <ul>
            <li>0 Runs: {oddsData.run_zero_odds}</li>
            <li>1 Run: {oddsData.run_one_odds}</li>
            <li>2 Runs: {oddsData.run_two_odds}</li>
            <li>3 Runs: {oddsData.run_three_odds}</li>
            <li>4 Runs: {oddsData.run_four_odds}</li>
            <li>5 Runs: {oddsData.run_five_odds}</li>
            <li>6 Runs: {oddsData.run_six_odds}</li>
            <li>Wicket: {oddsData.wicket_odds}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MatchPage;
