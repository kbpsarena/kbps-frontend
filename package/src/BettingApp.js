import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const BettingApp = () => {
  useEffect(() => {
    // Initialize Materialize CSS JavaScript features
    M.AutoInit();
  }, []);

  return (
    <div>
      <nav className="blue darken-2">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Betting App</a>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div id="market" className="col s12 l8">
            <h5>Market</h5>
            {/* Add market content here */}
          </div>

          <div id="bets" className="col s12 l4">
            <BetTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

const BetTabs = () => {
  useEffect(() => {
    const elem = document.querySelector('.tabs');
    M.Tabs.init(elem);
  }, []);

  return (
    <div>
      <ul className="tabs">
        <li className="tab col s4"><a href="#matched" className="active">Matched</a></li>
        <li className="tab col s4"><a href="#unmatched">Un-Matched</a></li>
        <li className="tab col s4"><a href="#fancy">Fancy</a></li>
      </ul>

      <div id="matched" className="col s12">
        <BetTable type="Matched" />
      </div>
      <div id="unmatched" className="col s12">
        <BetTable type="Unmatched" />
      </div>
      <div id="fancy" className="col s12">
        <BetTable type="Fancy" />
      </div>
    </div>
  );
};

const BetTable = ({ type }) => {
  const headers = type === 'Unmatched' 
    ? ['Cancel', 'Runner', 'Rate', 'Stake', 'Profit/Loss', 'Date/Time']
    : ['Runner', 'Rate', 'Stake', 'Profit/Loss', 'Date/Time'];

  return (
    <table className="striped">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Add table rows here */}
      </tbody>
    </table>
  );
};

export default BettingApp;