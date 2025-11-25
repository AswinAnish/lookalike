import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (username) => {
    setUserName(username);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify({ username }));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserName(user.username);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomePage userName={userName} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
