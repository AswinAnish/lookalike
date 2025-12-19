import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import "../home/Home.css";

export default function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    fetch("/DB/data.json")
      .then((res) => res.json())
      .then((data) => {
        const section = data.sections?.find(
          (s) => s.type === "courses"
        );
        if (!section) return;

        setCourse(
          section.items.find((c) => String(c.id) === id)
        );
      });
  }, [id]);

  if (!course) return null;

  const reviews = [
    {
      name: "Rahul",
      text: "Very clear explanations and examples.",
      img: "https://i.pravatar.cc/48?img=11"
    },
    {
      name: "Sneha",
      text: "Best Malayalam course I’ve found online.",
      img: "https://i.pravatar.cc/48?img=32"
    },
    {
      name: "John",
      text: "Helped me speak confidently at work.",
      img: "https://i.pravatar.cc/48?img=45"
    }
  ];

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
        {/* TOPBAR */}
        <header className="topbar">
          <h1 className="logo">Learnin!</h1>
          <input className="search" placeholder="Search courses" />
          <div className="profile" onClick={() => navigate("/user")}>👤</div>
        </header>

        <main className="content">
          {/* HERO */}
          <section style={{ maxWidth: "1100px", marginBottom: "32px" }}>
            <h1 style={{ fontSize: "2.2rem" }}>{course.title}</h1>
            <p style={{ color: "#b5bac1" }}>{course.subtitle}</p>
            <div style={{ marginTop: "8px", color: "#b5bac1", fontSize: "0.9rem" }}>
              ⭐ 4.6 • 18,420 students • Last updated 2024 • Malayalam
            </div>
          </section>

          {/* BODY */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 360px",
              gap: "32px",
              maxWidth: "1100px"
            }}
          >
            {/* LEFT */}
            <div>
              {/* PREVIEW VIDEO */}
              <div className="card" style={{ marginBottom: "24px" }}>
                <div className="card-body">
                  <h3 style={{ marginBottom: "12px" }}>Preview this course</h3>

                  <div
                    onClick={() => setPaused(!paused)}
                    style={{
                      position: "relative",
                      height: "220px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      background: "#000"
                    }}
                  >
                    <img
                      src={course.image}
                      alt="Course preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: paused ? 0.85 : 1
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "56px",
                        color: "#ffffff",
                        background: paused
                          ? "rgba(0,0,0,0.35)"
                          : "transparent"
                      }}
                    >
                      {paused ? "▶" : "⏸"}
                    </div>
                  </div>
                </div>
              </div>

              {/* WHAT YOU'LL LEARN */}
              <div className="card" style={{ marginBottom: "24px" }}>
                <div className="card-body">
                  <h3>What you'll learn</h3>
                  <ul style={{ paddingLeft: "18px", lineHeight: "1.8" }}>
                    <li>Strong language fundamentals</li>
                    <li>Real-world conversation</li>
                    <li>Grammar clarity</li>
                    <li>Confidence building</li>
                  </ul>
                </div>
              </div>

              {/* COURSE CONTENT */}
              <div className="card" style={{ marginBottom: "24px" }}>
                <div className="card-body">
                  <h3>Course content</h3>
                  <ul style={{ paddingLeft: "18px", lineHeight: "1.8" }}>
                    <li>Introduction</li>
                    <li>Basics</li>
                    <li>Practice</li>
                    <li>Advanced lessons</li>
                  </ul>
                </div>
              </div>

              {/* REVIEWS */}
              <div className="card">
                <div className="card-body">
                  <h3 style={{ marginBottom: "16px" }}>Student reviews</h3>

                  {reviews.map((r, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "14px",
                        marginBottom: "18px"
                      }}
                    >
                      <img
                        src={r.img}
                        alt={r.name}
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          objectFit: "cover"
                        }}
                      />
                      <div>
                        <strong>{r.name}</strong>
                        <div style={{ color: "#f5c451", fontSize: "0.85rem" }}>
                          ⭐⭐⭐⭐⭐
                        </div>
                        <p style={{ color: "#b5bac1", fontSize: "0.9rem" }}>
                          {r.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT – PURCHASE */}
            <aside>
              <div className="card" style={{ position: "sticky", top: "90px" }}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h2>{course.price}</h2>

                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "#5865f2",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      cursor: "pointer"
                    }}
                  >
                    Buy now
                  </button>

                  <button
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #5865f2",
                      background: "transparent",
                      color: "#5865f2",
                      borderRadius: "8px",
                      cursor: "pointer"
                    }}
                  >
                    Preview course
                  </button>

                  <ul
                    style={{
                      marginTop: "14px",
                      paddingLeft: "18px",
                      fontSize: "0.85rem",
                      color: "#b5bac1"
                    }}
                  >
                    <li>Lifetime access</li>
                    <li>Mobile & desktop</li>
                    <li>Certificate</li>
                  </ul>

                  <p style={{ fontSize: "0.8rem", color: "#b5bac1", marginTop: "10px" }}>
                    30-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </section>
    </div>
  );
}
