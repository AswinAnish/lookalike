import React, { useState } from 'react';
import '../styles/HomePage.css';

function HomePage({ userName, userAvatar, onLogout }) {
  const [courses] = useState([
    {
      id: 1,
      title: 'The Complete JavaScript Course 2024',
      instructor: 'Jonas Schmedtmann',
      rating: 4.8,
      reviews: 1250,
      price: '$14.99',
      originalPrice: '$84.99',
      image: '📚',
      students: '2.5M'
    },
    {
      id: 2,
      title: 'React - The Complete Guide',
      instructor: 'Maximilian Schwarzmüller',
      rating: 4.7,
      reviews: 980,
      price: '$14.99',
      originalPrice: '$94.99',
      image: '⚛️',
      students: '1.8M'
    },
    {
      id: 3,
      title: 'Web Design for Beginners',
      instructor: 'Brad Traversy',
      rating: 4.9,
      reviews: 650,
      price: '$12.99',
      originalPrice: '$74.99',
      image: '🎨',
      students: '980K'
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Andrew Ng',
      rating: 4.8,
      reviews: 1100,
      price: '$16.99',
      originalPrice: '$99.99',
      image: '🐍',
      students: '3.2M'
    },
    {
      id: 5,
      title: 'Advanced CSS Mastery',
      instructor: 'Wes Bos',
      rating: 4.7,
      reviews: 520,
      price: '$11.99',
      originalPrice: '$79.99',
      image: '🎯',
      students: '750K'
    },
    {
      id: 6,
      title: 'Node.js & Express Complete Guide',
      instructor: 'Stephen Grider',
      rating: 4.8,
      reviews: 890,
      price: '$14.99',
      originalPrice: '$84.99',
      image: '🖥️',
      students: '1.5M'
    }
  ]);



  return (
    <div className="home-container">
      {/* Header/Navbar */}
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <h1 className="logo">Our Learning Platform</h1>
            <div className="search-bar">
              <input type="text" placeholder="Search for anything" />
              <button className="search-btn">🔍</button>
            </div>
          </div>
          <div className="navbar-right">
            <div className="user-section">
              <div className="user-avatar">{userAvatar}</div>
              <span className="user-greeting">Welcome, {userName}!</span>
            </div>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Learning that gets you</h2>
          <p>Skills for your present (and your future). Get started with courses from just $14.99</p>
        </div>
      </section>

      {/* Category Section */}
      <section className="categories">
        <div className="categories-wrapper">
          <button className="category-btn active">All</button>
          <button className="category-btn">Development</button>
          <button className="category-btn">Design</button>
          <button className="category-btn">Business</button>
          <button className="category-btn">Data Science</button>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-section">
        <div className="courses-container">
          <h2 className="section-title">Featured Courses</h2>
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image">{course.image}</div>
                <div className="course-info">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-instructor">{course.instructor}</p>
                  
                  <div className="course-rating">
                    <span className="rating-stars">⭐ {course.rating}</span>
                    <span className="rating-count">({course.reviews})</span>
                  </div>

                  <p className="course-students">{course.students} students</p>

                  <div className="course-footer">
                    <span className="price">{course.price}</span>
                    <span className="original-price">{course.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
