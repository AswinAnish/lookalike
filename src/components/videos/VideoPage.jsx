import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import "../home/Home.css";

export default function VideoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    fetch("/DB/data.json")
      .then((res) => res.json())
      .then((data) => {
        const section = data.sections?.find(
          (s) => s.type === "videos"
        );
        if (!section) return;

        setVideos(section.items);
        setVideo(
          section.items.find((v) => String(v.id) === id)
        );
      });
  }, [id]);

  if (!video) return null;

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
        {/* TOP BAR */}
        <header className="topbar">
          <h1 className="logo">Learnin!</h1>
          <input className="search" placeholder="Search videos" />
          <div className="profile" onClick={() => navigate("/user")}>
            👤
          </div>
        </header>

        {/* CONTENT */}
        <main className="content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "24px"
            }}
          >
            {/* LEFT SIDE */}
            <section>
              {/* VIDEO PLAYER (DUMMY) */}
              <div
                style={{
                  position: "relative",
                  height: "360px",
                  background: "#000",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "16px",
                  cursor: "pointer"
                }}
                onClick={() => setPaused(!paused)}
              >
                <img
                  src={video.image}
                  alt={video.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: paused ? 0.85 : 1
                  }}
                />

                {/* PLAY / PAUSE ICON */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "64px",
                    color: "#ffffff",
                    background: paused
                      ? "rgba(0,0,0,0.35)"
                      : "transparent"
                  }}
                >
                  {paused ? "▶" : "⏸"}
                </div>
              </div>

              <h2>{video.title}</h2>
              <p style={{ color: "#b5bac1", marginBottom: "20px" }}>
                {video.subtitle}
              </p>

              {/* COMMENTS */}
              <section>
                <h3 style={{ marginBottom: "16px" }}>Comments</h3>

                {/* COMMENT */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginBottom: "16px"
                  }}
                >
                  <img
                    src="https://i.pravatar.cc/40?img=11"
                    alt="User avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%"
                    }}
                  />
                  <div>
                    <strong>User123</strong>
                    <p style={{ color: "#b5bac1", fontSize: "0.9rem" }}>
                      This video really helped me understand the basics.
                    </p>
                  </div>
                </div>

                {/* COMMENT */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginBottom: "16px"
                  }}
                >
                  <img
                    src="https://i.pravatar.cc/40?img=32"
                    alt="User avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%"
                    }}
                  />
                  <div>
                    <strong>LanguageLearner</strong>
                    <p style={{ color: "#b5bac1", fontSize: "0.9rem" }}>
                      Clear explanation and easy examples 👍
                    </p>
                  </div>
                </div>

                {/* COMMENT */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px"
                  }}
                >
                  <img
                    src="https://i.pravatar.cc/40?img=45"
                    alt="User avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%"
                    }}
                  />
                  <div>
                    <strong>NewStudent</strong>
                    <p style={{ color: "#b5bac1", fontSize: "0.9rem" }}>
                      Looking forward to more videos like this!
                    </p>
                  </div>
                </div>
              </section>
            </section>

            {/* RIGHT SIDE */}
            <aside>
              <h3 style={{ marginBottom: "12px" }}>Up next</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {videos
                  .filter((v) => v.id !== video.id)
                  .map((v) => (
                    <article
                      key={v.id}
                      className="card"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/video/${v.id}`)}
                    >
                      <img src={v.image} alt={v.title} />
                      <div className="card-body">
                        <h3 style={{ fontSize: "0.9rem" }}>{v.title}</h3>
                        <p style={{ fontSize: "0.75rem" }}>
                          {v.subtitle}
                        </p>
                      </div>
                    </article>
                  ))}
              </div>
            </aside>
          </div>
        </main>
      </section>
    </div>
  );
}
