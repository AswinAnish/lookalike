import React from "react";
import "../styles/HomePage.css";
import coursesData from "../data/coursesData";
import CourseCard from "./CourseCard";

function HomePage({ userName, userAvatar, onLogout }) {
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
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Learning that gets you</h2>
          <p>Skills for your present (and your future). Get started with courses from just ₹799</p>
        </div>
      </section>

      <section className="categories">
        <div className="categories-wrapper">
          <button className="category-btn active">All</button>
          <button className="category-btn">Languages</button>
          <button className="category-btn">Development</button>
          <button className="category-btn">Design</button>
          <button className="category-btn">Business</button>
        </div>
      </section>

      <section className="courses-section">
        <div className="courses-container">
          <h2 className="section-title">Featured Courses</h2>

          <div className="courses-grid">
            {coursesData.map((course) => (
              <CourseCard
                key={course.id}
                thumbnail={course.thumbnail}
                title={course.title}
                creator={course.creator || course.instructor}
                language={course.language}
                level={course.level}
                hours={course.hours}
                // pass extra props if needed
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

}

export default HomePage;
