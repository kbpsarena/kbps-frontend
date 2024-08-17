import React, { useState } from "react";
import "./BettingApp.css";

const BettingApp = () => {
  const [rate, setRate] = useState(1000);
  const [stake, setStake] = useState(0);

  const handleRateChange = (increment) => {
    setRate((prevRate) => prevRate + increment);
  };

  const handleStakeChange = (increment) => {
    setStake((prevStake) => prevStake + increment);
  };

  return (
    <div className="betting-form">
      <div className="header">
        <span className="header-title">The Draw</span>
        <span className="header-value">0</span>
      </div>

      <div className="rates">
        <span className="rate-option">1000</span>
        <span className="rate-option secondary">106</span>
        <span className="rate-option tertiary">0</span>
      </div>

      <div className="rate-stake-section">
        <div className="rate">
          <label className="label">RATE</label>
          <div className="input-group">
            <button onClick={() => handleRateChange(-100)}>-</button>
            <input type="text" value={rate} readOnly />
            <button onClick={() => handleRateChange(100)}>+</button>
          </div>
          
        </div>

        <div className="stake">
          <label className="label">STAKE</label>
          <div className="input-group">
            <button onClick={() => handleStakeChange(-100)}>-</button>
            <input type="text" value={stake} readOnly />
            <button onClick={() => handleStakeChange(100)}>+</button>
          </div>
          
        </div>
      </div>

      <div className="buttons">
        <button className="cancel-button">CANCEL</button>
        <button className="place-bet-button">PLACE BET</button>
      </div>

      <div className="min-max">
        <span>MIN : 100</span>
        <span>West Indies</span>
        <span>MAX : 10000</span>
        <span>0</span>
      </div>
    </div>
  );
};

export default BettingApp;