import React, { useState } from 'react';
import user1 from '../../src/assets/images/users/user1.jpg';
import './ChangePassword.css';
import { getUserId, baseUrl } from '../Utils';
import axios from 'axios';

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const validateSignupForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const userId = getUserId(); // Replace this with the actual user ID from your context/state if needed
    const oldPassword = e.target.currentPassword.value;
    const newPassword = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Regex to check for at least 8 characters, one symbol, and one number
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirmation do not match.");
      setLoading(false);
      return;
    }

    if (!passwordRegex.test(newPassword)) {
      setErrorMessage("Password must be at least 8 characters long, include a symbol, and a number.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/update/password`, {
          user_id: userId,
          old_password: oldPassword,
          new_password: newPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response);
      if (response.data.success) {
        // console.log('Password updated successfully:', response.data);
        setSuccessMessage("Password updated successfully.");
        // Clear the input fields
        e.target.reset();
      } else {
        const errorData = response.data;
        // console.error('Failed to update password:', errorData);
        setErrorMessage(errorData.message || 'Your old password is incorrect.');
      }
    } catch (error) {
      console.error('Error during password update:', error);
      setErrorMessage('An error occurred while updating the password. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mainDiv">
      <div className="cardStyle">
        <form action="" method="post" name="signupForm" id="signupForm" onSubmit={validateSignupForm}>
          
          <img src={user1} alt="User" id="signupLogo"/>
          
          <h2 className="formTitle">Change your Password</h2>
          
          <div className="inputDiv">
            <label className="inputLabel" htmlFor="currentPassword">Current Password</label>
            <input type="password" id="currentPassword" name="currentPassword" required/>
          </div>
          
          <div className="inputDiv">
            <label className="inputLabel" htmlFor="password">New Password</label>
            <input type="password" id="password" name="password" required/>
          </div>
          
          <div className="inputDiv">
            <label className="inputLabel" htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required/>
          </div>

          {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green', textAlign: 'center' }}>{successMessage}</p>}
          
          <div className="buttonWrapper">
            <button type="submit" id="submitButton" className="submitButton pure-button pure-button-primary" disabled={loading}>
              <span>Continue</span>
              {loading && <span id="loader"></span>}
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;