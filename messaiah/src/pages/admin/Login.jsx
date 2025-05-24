import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }

    if (!username.includes('@')) {
      setError('Username must contain "@" (e.g., email address).');
      return;
    }

    // Clear error and navigate
    setError('');
    navigate('/dashboard');
  };

  return (
    <div className="login-wrapper">
      <div className="login-header">Messiah's Admin Panel</div>
      <div className="login-box">
        <img src="/assets/logo.png" alt="Messiah Cafe Logo" className="login-logo" />
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="login-error">{error}</div>}
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
