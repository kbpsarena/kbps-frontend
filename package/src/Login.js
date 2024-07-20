import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
    const [user_name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        if (user_name.length < 5 || user_name.length > 15) {
            setError('Username must be between 5 and 15 characters.');
            return;
        }
        if (password.length < 8 || password.length > 20) {
            setError('Password must be between 8 and 20 characters.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/is-verified-user', { user_name, password });
            if (response.valid_user) {
                // setIsLoggedIn(true);
                setError("An error krjgit rhthhtr ");

                

            } else {
                setError("An error ");
                setUsername(''); // Clear the username field
                setPassword(''); // Clear the password field
            }
        } catch (error) {
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
                        value={user_name}
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
