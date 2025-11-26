import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { validateUser } from '../db/validation';

function LoginPage({ onLogin, onNavigateSignUp, onNavigateForgot }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Validate against database
    setIsLoading(true);
    setTimeout(() => {
      const result = validateUser(username, password);
      
      if (result.success) {
        console.log('Login successful:', result.user);
        onLogin(result.user.username);
        setUsername('');
        setPassword('');
        setIsLoading(false);
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <button className="link-btn" onClick={onNavigateSignUp}>Sign up</button></p>
          <p><button className="link-btn" onClick={onNavigateForgot}>Forgot password?</button></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
