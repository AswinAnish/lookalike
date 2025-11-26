import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [currentPage, setCurrentPage] = useState('login');

  const avatars = ['👤', '👨', '👩', '🧑', '👨‍💼', '👩‍💼', '👨‍🎓', '👩‍🎓'];

  const getRandomAvatar = () => {
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  const handleLogin = (username) => {
    const storedUsers = JSON.parse(localStorage.getItem('appUsers') || '[]');
    const user = storedUsers.find(u => u.username === username);
    
    let avatar = user?.avatar || getRandomAvatar();
    
    setUserName(username);
    setUserAvatar(avatar);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify({ username, avatar }));
  };

  const handleSignUp = (username) => {
    const avatar = getRandomAvatar();
    
    setUserName(username);
    setUserAvatar(avatar);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify({ username, avatar }));
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setCurrentPage('login');
    localStorage.removeItem('user');
  };

  const handleBackToLogin = () => {
    setCurrentPage('login');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserName(user.username);
      setUserAvatar(user.avatar);
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div className="App">
        <HomePage userName={userName} userAvatar={userAvatar} onLogout={handleLogout} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      {currentPage === 'login' && (
        <LoginPage 
          onLogin={handleLogin}
          onNavigateSignUp={() => setCurrentPage('signup')}
          onNavigateForgot={() => setCurrentPage('forgot')}
        />
      )}
      {currentPage === 'signup' && (
        <SignUpPage 
          onSignUp={handleSignUp}
          onBackToLogin={handleBackToLogin}
        />
      )}
      {currentPage === 'forgot' && (
        <ForgotPasswordPage 
          onBackToLogin={handleBackToLogin}
        />
      )}
    </div>
  );
}

export default App;
