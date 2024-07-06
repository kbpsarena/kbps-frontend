import React, { useState } from 'react';
import './MainPage.css'; // Import CSS for styling

const MainPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null); // State to track selected team
  const [betAmount, setBetAmount] = useState(''); // State for bet amount input
  const [message, setMessage] = useState(''); // State for messages (e.g., validation)

  const minBet = 10;
  const maxBet = 1000;

  // Array of teams with betting options
  const teams = [
    { id: 1, name: 'Team 1', betOption: '2X' },
    { id: 2, name: 'Team 2', betOption: '2X' },
    { id: 3, name: 'Team 3', betOption: '2X' },
    { id: 4, name: 'Team 4', betOption: '2X' },
    { id: 5, name: 'Team 5', betOption: '2X' },
    { id: 6, name: 'Team 6', betOption: '2X' },
    { id: 7, name: 'Team 7', betOption: '2X' },
    { id: 8, name: 'Team 8', betOption: '2X' },
  ];

  // Function to handle team selection
  const handleTeamSelect = (teamId) => {
    setSelectedTeam(teamId);
    setMessage('');
    setBetAmount('');
  };

  // Function to handle bet amount change
  const handleBetAmountChange = (event) => {
    const amount = parseFloat(event.target.value);
    setBetAmount(amount);
    if (isNaN(amount)) {
      setMessage('Please enter a valid number.');
    } else if (amount < minBet) {
      setMessage(`The minimum bet amount is $${minBet}`);
    } else if (amount > maxBet) {
      setMessage(`The maximum bet amount is $${maxBet}`);
    } else {
      setMessage('');
    }
  };

  // Function to handle bet submission
  const handleBetSubmit = () => {
    if (!selectedTeam) {
      setMessage('Please select a team.');
      return;
    }
    if (!betAmount || isNaN(betAmount) || betAmount < minBet || betAmount > maxBet) {
      setMessage('Please enter a valid bet amount.');
      return;
    }
    setMessage(`You placed a bet of $${betAmount} on Team ${selectedTeam} (${teams[selectedTeam - 1].betOption}).`);
    // Here you can implement further logic, e.g., sending data to a backend
  };

  return (
    <div className="betting-interface">
      <div className="teams-container">
        {teams.map((team) => (
          <div
            key={team.id}
            className={`team ${selectedTeam === team.id ? 'selected' : ''}`}
            onClick={() => handleTeamSelect(team.id)}
          >
            <h3>{team.name}</h3>
            <button className="bet-option">2X</button>
          </div>
        ))}
      </div>
      {selectedTeam && (
        <div className="betting-options">
          <h2>Bet on Team {selectedTeam}</h2>
          <input
            type="number"
            value={betAmount}
            onChange={handleBetAmountChange}
            placeholder="Enter bet amount"
          />
          <button onClick={handleBetSubmit}>Place Bet</button>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default MainPage;
