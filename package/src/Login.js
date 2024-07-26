import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Login.css';
import whatsappLogo from './whatsapp_logo.png';

function Login({ setUser }) {
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
            }, 5000); // 5 seconds in milliseconds
            const response = await axios.post(`http://localhost:8080/is-verified-user`, { user_name: username, password: password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                cancelToken: source.token,
            });

            if (response.data.valid_user) {
                setUser({ username });
                Cookies.set('user_id', response.data.user_id); // Set user_id in cookies
                console.log('User ID:', response.data.user_id);
                navigate('/homepage'); // Navigate to home page after successful login
                setUsername(''); // Clear the username field
                setPassword(''); // Clear the password field
            } else {
                setError("An error occurred.");
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            setUsername(''); // Clear the username field
            setPassword(''); // Clear the password field
        }
    };

    const handleSignUp = () => {
        window.location.href = 'https://wa.me/YOUR_WHATSAPP_BUSINESS_NUMBER'; // Replace with your WhatsApp Business number
    };

    const handleDemoLogin = async () => {
        const source = axios.CancelToken.source();
            const timeout = setTimeout(() => {
                source.cancel('Request timed out');
            }, 5000); // 5 seconds in milliseconds
            const response = await axios.post(`http://localhost:8080/is-verified-user`, { user_name: 'demom0KL', password: 'Hwfw57YJuPBG' }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                cancelToken: source.token,
            });
        setUser({ username });
        Cookies.set('user_id', response.data.user_id); // Set demo user_id in cookies
        navigate('/homepage');
        setUsername(''); // Clear the username field
        setPassword(''); // Clear the password field
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
                <div className="button-container">
                    <button type="submit" className="login-button">Login</button>
                    <button type="button" onClick={handleSignUp} className="sign-up-button">
                        <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo" />
                        Sign Up
                    </button>
                </div>
                <button type="button" onClick={handleDemoLogin} className="demo-login-button">
                    Demo Login
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default Login;
