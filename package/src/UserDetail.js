import React,{useEffect, useState} from 'react';
import {useRoutes} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeRoutes from './route/ThemeRouter';
import { AuthProvider } from './AuthContext';
import './UserDetail.css';
import axios from 'axios';
import { getName, getUserName, getUserId, baseUrl} from './Utils';

const UserDetail = () => {
  const [payoutData, setPayoutData] = useState(null);

useEffect( () => {
  console.log("isnide hu");

  const fetchData = async () =>{
  const response = await axios.post(`${baseUrl}/get/payout`, {
        user_id: getUserId()
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    console.log("response pehle waalo je aaro hai from get payout",response.data);
    setPayoutData(response.data.current_payout);
    console.log("response je aaro hai from get payout",response.data.current_payout);
  };

  fetchData();

}, []);


  return (
 
    <body>
  <div class="center">
    <div class="contaner">
      <div class="left">
        <div class="photo">
          <div class="circle2"></div> 
          <img alt="user photo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1435559/sloth.jpg"/>
        </div>     
        <div class="title__contain">
          <div class="username">{getName()}</div>
        </div>
        <button class="follow">{getUserName()}</button>
      </div>
      <div class="right">
      {payoutData && (
        <>
        {/* <div class="rightbox">
          <span class="large">{payoutData.chips}</span>
          <span class="small">kurkure</span>
        </div> */}
        <div class="rightbox">
          <span class="large">{payoutData.totalAmount}</span>
          <span class="small">balance</span>
        </div>
        <div class="rightbox">
          <span class="large">{payoutData.exposure}</span>
          <span class="small">exposure</span>
        </div>
        </>
      )}
      </div>
    </div>
  </div>
</body>
     
  );
};


export default UserDetail;
