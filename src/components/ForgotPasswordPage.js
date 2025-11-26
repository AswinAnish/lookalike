import React, { useState } from 'react';
import '../styles/ForgotPasswordPage.css';
import { getUserByUsername } from '../db/validation';

function ForgotPasswordPage({ onBackToLogin }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email && !username) {
      setError('Please enter your email or username');
      return;
    }

    if (email && !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      // Check if user exists (for demo purposes)
      let userFound = false;
      
      if (email) {
        userFound = JSON.parse(localStorage.getItem('appUsers') || '[]').some(
          (u) => u.email === email
        );
      }
      
      if (username) {
        userFound = getUserByUsername(username) !== undefined;
      }

      if (!userFound) {
        setError('No account found with that email or username');
        setIsLoading(false);
        return;
      }

      // Simulate sending email
      setSubmitted(true);
      setEmail('');
      setUsername('');
      setIsLoading(false);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="forgot-container">
        <div className="forgot-box">
          <div className="success-message">
            <h2>Reset Link Sent!</h2>
            <p>We've sent a password reset link to your email. Please check your inbox and follow the instructions.</p>
            <p className="note">(This is a demo - no email actually sent)</p>
            <button 
              onClick={onBackToLogin}
              className="back-button"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h1 className="forgot-title">Reset Password</h1>
        <p className="forgot-subtitle">Enter your email or username to receive a password reset link</p>
        
        <form onSubmit={handleSubmit} className="forgot-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isLoading}
            />
          </div>

          <div className="or-divider">OR</div>

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

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="send-button"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="forgot-footer">
          <p><button className="link-btn" onClick={onBackToLogin}>Back to Login</button></p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
