import React from 'react';
import './Card.css'; // Import CSS for styling

const Card = ({ teamName, odds }) => {
  return (
    <div className="card">
      <h3 className="card-title">{teamName}</h3>
      <div className="card-content">
        <p><strong>Odds:</strong> {odds}</p>
        {/* Add more team-related information here if needed */}
      </div>
    </div>
  );
};

export default Card;
