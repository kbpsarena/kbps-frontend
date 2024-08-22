import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../src/assets/images/users/user1.jpg";
import user2 from "../src/assets/images/users/user2.jpg";
import user3 from "../src/assets/images/users/user3.jpg";
import user4 from "../src/assets/images/users/user4.jpg";
import user5 from "../src/assets/images/users/user5.jpg";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getUserId } from './Utils'; // Adjust the path as needed
import Cookies from 'js-cookie';
import { baseUrl } from './Utils'; // Adjust the path as needed

const EventDetail = () => {
    console.log("I am inside MatchList");
    const [historicalData, setMatches] = useState([]);
    const [matchDetails, setMatchDetails] = useState([]);
    const [userData, setUserData] = useState({});
    const userId = getUserId(); 
  
    useEffect(() => {
      const fetchMatches = async () => {
        try {
          const source = axios.CancelToken.source();
              const timeout = setTimeout(() => {
                  source.cancel('Request timed out');
              }, 50000); // 5 seconds in milliseconds
              const response = await axios.post(`${baseUrl}/transactions/get`, { user_id : userId}, 
                  {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  cancelToken: source.token,});
          // const response = await fetch(''); // Replace with your actual API endpoint
          // if (!response.ok) {
          //   throw new Error('Network response was not ok');
          // }
          const data = response.data.get_historical_transaction_list;
          data.forEach((item) => {
            let detailsArray = [];
            if (typeof item.match_details === 'string') {
              detailsArray = item.match_details.split('$');
              // Proceed with using detailsArray
            } else {
              console.error('match_details is not a string:', item.match_details);
              // Handle the case where match_details is not a string
            }
        
            item.team_one_name = detailsArray[0];
            item.team_two_name = detailsArray[1];
            item.overs_by_team_one = detailsArray[2];
            item.overs_by_team_two = detailsArray[3];
        });

          setMatches(data);
          const detailsArray = data.match_details.split('$');

          // Extract each variable

        } catch (error) {
          console.error('Error fetching match data:', error);
        }
      };
  
      fetchMatches();
    }, []);



  return (
    <div>
      <Card>
        <CardBody background-color="red">
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Match Details</th>
                <th>Win Status</th>
                <th>Status</th>
                <th>Odd State</th>
                <th>Odd Value</th>
                <th>Total Money</th>
                <th>Money On Stake</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {historicalData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.match_details}</td>
                  <td>
                    {tdata.state_of_winning === "LOST" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.state_of_winning === "IN_PROGRESS" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.odd_state}</td>
                  <td>{tdata.odd}</td>
                  <td>${tdata.odd*tdata.money_on_stake}</td>
                  <td>{tdata.money_on_stake}</td>
                  <td>{tdata.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default EventDetail;
