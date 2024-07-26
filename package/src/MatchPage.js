import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './MatchPage.css';
import './const-file';

// import Stack from 'react-bootstrap/Stack';
// import Button from 'react-bootstrap/Button';


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
 var m="Firstmhk ymhkykjitem";
  // return (
  //   <div className="match-page">
  //     <h1>{matchData.team_one_name} vs {matchData.team_two_name}</h1>
  //     <p><strong>Score:</strong> {matchData.team_one_score} - {matchData.team_two_score}</p>
  //     <p><strong>Live Match:</strong> {matchData.is_live_match ? 'Yes' : 'No'}</p>
  //     <p><strong>Created At:</strong> {new Date(matchData.created_at).toLocaleString()}</p>
  //     <p><strong>Updated At:</strong> {new Date(matchData.updated_at).toLocaleString()}</p>
  //     <p><a href={matchData.url} target="_blank" rel="noopener noreferrer">Watch Live</a></p>

  //     {oddsData && (
  //       <div className="odds-data">
  //         <h2>Odds for Each Ball</h2>
  //         <>
  //           <div className=' matches-page'>
  //           <div >9.1 Over 0 Run Bhav:
  //           </div>
  //           <div>{oddsData.run_zero_odds}</div>
  //           </div>
  //           <div className="matches-page ">
  //             <div >19.1 Over 1 Run Bhav</div>
  //             <button className='box-item'>{oddsData.run_one_odds}</button>
  //           </div>
          

 
  //   <Stack direction="horizontal" gap={3}>
  //     <div className="horizontal-box">udehirhoh fr er gr g g g rt  td  rtt  g  bg t  t  tryb  byt</div>
  //     <Button  >
  //     <div className="p-2 ms-auto">Third item</div>
  //       </Button>
  //       <div className="vr" />
  //       <Button className="p-2 " ><div className="p-2">Third item</div></Button>
      
  //   </Stack>
   
  //           <li>1 Run: {oddsData.run_one_odds}</li>
  //           <li>2 Runs: {oddsData.run_two_odds}</li>
  //           <li>3 Runs: {oddsData.run_three_odds}</li>
  //           <li>4 Runs: {oddsData.run_four_odds}</li>
  //           <li>5 Runs: {oddsData.run_five_odds}</li>
  //           <li>6 Runs: {oddsData.run_six_odds}</li>
  //           <li>Wicket: {oddsData.wicket_odds}</li>
  //         </>
  //       </div>
  //     )}
  //   </div>
  // );


  const LiveScoreSection = () => {
    const containerStyle = {
      backgroundImage: 'url(https://media.istockphoto.com/id/649619272/vector/cricket-stadium-with-neon-lights-arena.jpg?s=1024x1024&w=is&k=20&c=mzCvTXnWViXtAi9PL5UC6NrrKYYP_eJN3zKdhTUDTVU=)',
      color: '#fff',
      backgroundPosition: 'bottom',
      // backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      height: '80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px', // Adjust padding as needed
      backgroundSize: 'cover',
     
    };
  
    const teamStyle = {
      flex: '0 0 25%',
      maxWidth: '25%',
      textAlign: 'center',
      padding: '0 10px', // Adjust padding as needed
    };
  
    const matchStatusStyle = {
      flex: '0 0 50%',
      maxWidth: '50%',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: '10px',
      letterSpacing: '0px',
      padding: '4px 0',
      position: 'relative',
    };
  
    const statusTextStyle = {
      fontFamily: 'Tahoma, sans-serif',
      fontSize: '12px',
      animation: 'txt 3s ease-out infinite',
    };
  
    return (
      <div style={containerStyle}>
        <div style={teamStyle}>
          <div style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600' }}>{matchData.team_one_name}</div>
          <div style={{ fontSize: '12px', fontWeight: '600' }}>
            <span style={{ fontSize: '17px' }}>{matchData.team_one_score}</span> <span>(givemeOver)</span>
            <br />
            <span>CRR: calculateMe</span>
          </div>
        </div>
        <div style={matchStatusStyle}>
          <span style={statusTextStyle}>RunThisOver</span>
          <div>
            <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}></ul>
          </div>
        </div>
        <div style={teamStyle}>
          <div style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600' }}>{matchData.team_two_name}</div>
          <div style={{ fontSize: '12px', fontWeight: '600' }}>
            <span style={{ fontSize: '17px' }}>{matchData.team_two_score}</span> <span>(givemeOver)</span>
            <br />
            <span>CRR: calculateMe</span>
          </div>
        </div>
      </div>
    );
  };
 
  
  return (
    <div id="market" className="col l8 s12 active">
      <LiveScoreSection/>
      </div>
  );
}

export default MatchPage;


