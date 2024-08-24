import React,{useState} from 'react';
import {useRoutes} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeRoutes from './route/ThemeRouter';
import { AuthProvider } from './AuthContext';
import './UserDetail.css';


  
  const UserDetail = () => {
  
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
          <div class="username">User Ka name</div>
        </div>
        <button class="follow">UserName</button>
      </div>
      <div class="right">
        <div class="rightbox">
          <span class="large">512</span>
          <span class="small">CHiPS</span>
        </div>
        <div class="rightbox">
          <span class="large">1234</span>
          <span class="small">BALANCE</span>
        </div>
        <div class="rightbox">
          <span class="large">241</span>
          <span class="small">EXPOSURE</span>
        </div>
      </div>
    </div>
  </div>
</body>
     
  );
  };


export default UserDetail;
