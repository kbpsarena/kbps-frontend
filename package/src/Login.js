import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({setUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
       
        if (username.length < 5 || username.length > 15) {
            setError('Username must be between 5 and 15 characters.');
            return;
        }
        if (password.length < 8 || password.length > 20) {
            setError('Password must be between 8 and 20 characters.');
            return;
        }

  
      

        try {
            const source = axios.CancelToken.source();
            const timeout = setTimeout(() => {
                source.cancel('Request timed out');
            }, 50000); // 5 seconds in milliseconds
            const response = await axios.post('http://localhost:8080/is-verified-user', { user_name : username, password : password }, 
                {
                headers: {
                  'Content-Type': 'application/json',
                },
                cancelToken: source.token,});

            if (response.data.valid_user) {
                setUser({username});
                // I want to direct the user to home-page after login
                navigate('/homepage');
                // now how to write home-page component
                setUsername(''); // Clear the username field
                setPassword(''); // Clear the password field
            

            }
            else {
                setError("An error ");
                // setUsername(''); // Clear the username field
                // setPassword(''); // Clear the password field
            }
        } 
        catch (error) {
            setError('An error occurred. Please try again.');
            setUsername(''); // Clear the username field
            setPassword(''); // Clear the password field
            

            
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default Login;
