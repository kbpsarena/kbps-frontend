import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MatchPage.css';
import { getUserMoney, getUserId } from './Utils.js';
import Cookies from 'js-cookie';

const MatchPage = () => {
  const { matchId } = useParams();
  const [matchData, setMatchData] = useState(null);
  const [oddsData, setOddsData] = useState(null);
  const [selectedOdd, setSelectedOdd] = useState(null);
  const [biddingAmount, setBiddingAmount] = useState(0);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderMessage, setOrderMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaceOrderButtonVisible, setIsPlaceOrderButtonVisible] = useState(true);
  const userMoney = getUserMoney();
  const [message, setMessage] = useState(`tere pass ${userMoney} rupay hai`);
  const [placingOddsMessage, setPlacingOddsMessage] = useState('');
  const [blinkTiles, setBlinkTiles] = useState({}); // Add this state
  const bottomSheetRef = useRef(null);

  // useEffect(() => {
  //   const fetchMatchData = async () => {
  //     try {
  //       const source = axios.CancelToken.source();
  //       setTimeout(() => {
  //         source.cancel('Request timed out');
  //       }, 50000);

  //       const response = await axios.post('http://localhost:8080/match/get', { match_id: matchId }, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         cancelToken: source.token,
  //       });
  //       setMatchData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching match data:', error);
  //     }
  //   };

  //   fetchMatchData();
  // }, [matchId]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws/odds');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      socket.send(JSON.stringify({ matchId }));
    };

    socket.onmessage = (event) => {
      // console.log('Received message:', event.data);
      const data1 = JSON.parse(event.data);
      let data = data1.give_odds_response;
      setMatchData(data1.match_page_response);
      // console.log('bacche data1.match_page_reponse hai {}', data1.match_page_response);
      // Check which odds have changed and update blinkTiles state
      setOddsData(prevOddsData => {
        if (prevOddsData) {
          const changedOdds = {};
          Object.keys(data).forEach(key => {
            if (prevOddsData[key] !== data[key]) {
              changedOdds[key] = true;
              setTimeout(() => {
                setBlinkTiles(prevBlinkTiles => ({ ...prevBlinkTiles, [key]: false }));
              }, 500);
            }
          });
          setBlinkTiles(changedOdds);
        }
        return data;
      });
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, [matchId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bottomSheetRef.current && !bottomSheetRef.current.contains(event.target)) {
        setIsBottomSheetOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTileClick = (odd) => {
    setSelectedOdd(odd);
    setBiddingAmount(0);
    setIsBottomSheetOpen(true);
    setIsPlaceOrderButtonVisible(true);
    setMessage(`tere pass ${userMoney} rupay hai`);
    setPlacingOddsMessage(`You are placing on ${odd.replace(/_/g, ' ')} odds`);
  };

  const handleBiddingChange = (amount) => {
    const newBiddingAmount = biddingAmount + amount;
    if (newBiddingAmount >= 0) {
      setBiddingAmount(newBiddingAmount);
      setIsMessageVisible(newBiddingAmount > userMoney);
      setMessage(newBiddingAmount > userMoney ? `teri aukaat ${userMoney} rupay ki hai bsdk` : `tere pass ${userMoney} rupay hai`);
    }
  };

  const handleBiddingInputChange = (e) => {
    const value = Math.max(0, Number(e.target.value));
    setBiddingAmount(value);
    setIsMessageVisible(value > userMoney);
    setMessage(value > userMoney ? `teri aukaat ${userMoney} rupay ki hai bsdk` : `tere pass ${userMoney} rupay hai`);
  };

  const placeOrder = async () => {
    if (!matchData) {
      console.error('Match data is not fully loaded yet.');
      setOrderStatus('failure');
      setOrderMessage('Match data not available');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/update/odds', {
        user_id: getUserId(), // Replace with actual user_id
        match_id: matchId,
        money_on_stake: biddingAmount,
        state_name: selectedOdd,
        odd_value : oddsData[selectedOdd],
        team_one_name: matchData.team_one_symbol,
        team_two_name: matchData.team_two_symbol,
        team_one_ball: matchData.overs_by_team_one,
        team_two_ball: matchData.overs_by_team_two,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      localStorage.setItem('user_money', response.data.user_money); // Update user money in cookies

      if (response.status === 200) {
        setOrderStatus('success');
        setOrderMessage('Order placed');
        setIsPlaceOrderButtonVisible(false); // Hide the button after successful order
        setTimeout(() => {
          setIsBottomSheetOpen(false);
          setOrderStatus(null);
          setOrderMessage('');
        }, 3000);
      } else {
        setOrderStatus('failure');
        setOrderMessage('Placement failed');
      }
    } catch (error) {
      setOrderStatus('failure');
      setOrderMessage('Placement failed');
      console.error('Error placing order:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!matchData) {
    return <div>Loading...</div>;
  }

  const LiveScoreSection = () => {
    const lastBallResults = matchData.last_balls_results || [];
    const formattedLastBallResults = lastBallResults.slice(1,6).reverse().join(' ');

    return (
      <div className="live-score-container">
        <div className="team">
          <div style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600' }}>
            {matchData.team_one_name}
          </div>
          <div style={{ fontSize: '12px', fontWeight: '600' }}>
            <span style={{ fontSize: '17px' }}>{matchData.team_one_score}</span>
            <span> {matchData.overs_by_team_one}</span>
            <br />
            {/* <span>CRR: calculateMeMaster</span> */}
          </div>
        </div>
        <div className="match-status">
          <span>run previous six balls</span>
          <div className="no-list-style">
              {formattedLastBallResults}
              <span className="status-text"> {lastBallResults.slice(0,1) || 'x'}</span>
          </div>
        </div>
        <div className="team">
          <div style={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: '600' }}>
            {matchData.team_two_name}
          </div>
          <div style={{ fontSize: '12px', fontWeight: '600' }}>
            <span style={{ fontSize: '17px' }}>{matchData.team_two_score}</span>
            <span> {matchData.overs_by_team_two}</span>
            <br />
            {/* <span>CRR: calculateMeMaster</span> */}
          </div>
        </div>
      </div>
    );
  };

  const OddsTiles = () => {
    if (!oddsData) return null;

    const oddsKeys = [
      'run_zero_odds', 'run_one_odds', 'run_two_odds', 'run_three_odds',
      'run_four_odds', 'run_five_odds', 'run_six_odds', 'wicket_odds'
    ];

    return (
      <div className="odds-container">
        {oddsKeys.map((key, index) => (
          <div
            key={index}
            className={`odds-tile ${blinkTiles[key] ? 'blink' : ''}`}
            onClick={() => handleTileClick(key)}
          >
            {key.replace(/_/g, ' ')}: {oddsData[key]}
          </div>
        ))}
      </div>
    );
  };

  const expectedMoney = biddingAmount * (oddsData ? oddsData[selectedOdd] : 0);

  return (
    <div id="market" className="col l8 s12 active">
      <LiveScoreSection />
      <OddsTiles />
      <div ref={bottomSheetRef} className={`bottom-sheet ${isBottomSheetOpen ? 'active' : ''}`}>
        <h5>Enter Bidding Amount</h5>
        <div className="bidding-container">
          <button onClick={() => handleBiddingChange(-1)}>-</button>
          <input
            type="number"
            value={biddingAmount}
            onChange={handleBiddingInputChange}
          />
          <button onClick={() => handleBiddingChange(1)}>+</button>
          <span className="expected-money">Your money will become {expectedMoney}</span>
        </div>
        <div className={`aukaat-message ${isMessageVisible ? 'warning' : ''}`}>
          {message}
        </div>
        <div className="placing-odds-message">
          {placingOddsMessage}
        </div>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          isPlaceOrderButtonVisible && <button onClick={placeOrder}>Place Order</button>
        )}
        {orderMessage && (
          <div className={`order-message ${orderStatus}`}>
            {orderMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchPage;
