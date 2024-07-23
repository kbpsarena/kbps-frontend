import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MatchPage.css'; // Ensure you create and import the CSS file

const MatchPage = () => {
  console.log("I am inside MatchPage");
  const { matchId } = useParams();
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const source = axios.CancelToken.source();
            const timeout = setTimeout(() => {
                source.cancel('Request timed out');
            }, 50000); // 5 seconds in milliseconds
            
        const response = await axios.post('http://localhost:8080/match/get', { match_id : matchId}, 
                {
                headers: {
                  'Content-Type': 'application/json',
                },
                cancelToken: source.token,});
        setMatchData(response.data);
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatchData();
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
    </div>
  );
}

export default MatchPage;
