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

const EventDetail = () => {
    console.log("I am inside MatchList");
    const [matches, setMatches] = useState([]);
    const [userData, setUserData] = useState({});
    const userId = getUserId(); 
  
    useEffect(() => {
      const fetchMatches = async () => {
        try {
          const source = axios.CancelToken.source();
              const timeout = setTimeout(() => {
                  source.cancel('Request timed out');
              }, 50000); // 5 seconds in milliseconds
              const response = await axios.post('http://localhost:8080/homepage/get', { user_id : userId}, 
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
          Cookies.set("user_money", data.user_data.user_money);
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
                <th>Team Lead</th>
                <th>Project</th>

                <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th>
                <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th>

              </tr>
            </thead>
            <tbody>
              {matches.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={user1}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.team_one}</h6>
                        <span className="text-muted"></span>
                      </div>
                    </div>
                  </td>
                  <td>{}dfg</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{}fdf</td>
                  <td>{}dfer</td>
                  <td>{}fdf</td>
                  <td>{}dfer</td>
                  <td>{}fdf</td>
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
