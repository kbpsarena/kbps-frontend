import React from 'react';

import user1 from '../../src/assets/images/users/user1.jpg';
import './ChangePassword.css';

const ChangePassword = () => {
  return (
    <div class="mainDiv">
  <div class="cardStyle">
    <form action="" method="post" name="signupForm" id="signupForm">
      
      <img src="" id="signupLogo"/>
      
      <h2 class="formTitle">
        Change your Password</h2>
      
    <div class="inputDiv">
      <label class="inputLabel" for="password">New Password</label>
      <input type="password" id="password" name="password" required/>
    </div>
      
    <div class="inputDiv">
      <label class="inputLabel" for="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword"/>
    </div>
    
    <div class="buttonWrapper">
      <button type="submit" id="submitButton" onclick="validateSignupForm()" class="submitButton pure-button pure-button-primary">
        <span>Continue</span>
        <span id="loader"></span>
      </button>
    </div>
      
  </form>
  </div>
</div>
  );
};

export default ChangePassword;
