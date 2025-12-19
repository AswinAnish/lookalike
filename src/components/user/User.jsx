import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../home/Home.css";
import "./User.css";

export default function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");

    fetch("/DB/users.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.users.find(u => u.username === username);
        setUser(found || null);
      });
  }, []);

  if (!user) return null;

  return (
    <div className="home-root">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="brand">Learnin!</h2>
        <nav className="nav">
          <NavLink to="/home" className="nav-item">Home</NavLink>
          <NavLink to="/section/videos" className="nav-item">Videos</NavLink>
          <NavLink to="/section/courses" className="nav-item">Courses</NavLink>
          <NavLink to="/section/settings" className="nav-item">Settings</NavLink>
          <NavLink to="/section/about" className="nav-item">About</NavLink>
        </nav>
      </aside>

      {/* MAIN */}
      <section className="main">
        <header className="topbar">
          <h1 className="logo">Learnin!</h1>
          <div className="profile">👤</div>
        </header>

        <main className="content">
          <div className="profile-container">
            {/* LEFT PANEL */}
            <section className="profile-left">
              <img
                src="https://i.pravatar.cc/160"
                alt="avatar"
                className="profile-avatar"
              />

              <h2>{user.username}</h2>
              <span className="profile-role">Learner</span>
              <span className="profile-status">● Online</span>

              <button
                className="logout-primary"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </section>

            {/* RIGHT PANEL */}
            <section className="profile-right">
              <div className="info-grid">
                <div className="info-card">
                  <span>Username</span>
                  <strong>{user.username}</strong>
                </div>

                <div className="info-card">
                  <span>Account Type</span>
                  <strong>Standard</strong>
                </div>

                <div className="info-card">
                  <span>Joined</span>
                  <strong>2024</strong>
                </div>

                <div className="info-card">
                  <span>Courses Enrolled</span>
                  <strong>3</strong>
                </div>
              </div>

              <div className="about-section">
                <h3>About</h3>
                <p>
                  Passionate learner exploring languages and communication skills
                  through structured courses and curated video lessons on Learnin!.
                </p>
              </div>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}
