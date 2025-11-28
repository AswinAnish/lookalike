import React from "react";
import "../styles/HomePage.css";
import courses from "../db/courses.json";

export default function HomePage({ userName, userAvatar, onLogout }) {
  return (
    <div className="home-container">
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
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Learning that gets you</h2>
          <p>
            Skills for your present and your future. Get started with courses
            from just $14.99
          </p>
        </div>
      </section>

      <section className="categories">
        <div className="categories-wrapper">
          <button className="category-btn active">All</button>
          <button className="category-btn">Development</button>
          <button className="category-btn">Design</button>
          <button className="category-btn">Business</button>
          <button className="category-btn">Data Science</button>
        </div>
      </section>

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

                  <p className="course-students">
                    {course.students} students
                  </p>

                  <div className="course-footer">
                    <span className="price">{course.price}</span>
                    <span className="original-price">
                      {course.originalPrice}
                    </span>
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
