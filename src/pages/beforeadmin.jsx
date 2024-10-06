// src/AdminLogin.js
import React, { useState } from 'react';
import '../stylesheet/beforeadmin.css'
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'badmin';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === hardcodedUsername && password === hardcodedPassword) {
        navigate('/admin');
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, Admin!</h2>
          <button onClick={handleLogout}>Logout</button>
          {/* Admin content goes here */}
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
