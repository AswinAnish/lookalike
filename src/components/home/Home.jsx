import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/DB/data.json")
      .then((res) => res.json())
      .then((data) => {
        const courseSection = data.sections.find(
          (s) => s.type === "courses"
        );
        const videoSection = data.sections.find(
          (s) => s.type === "videos"
        );

        setCourses(courseSection?.items || []);
        setVideos(videoSection?.items || []);
      });
  }, []);

  const filteredCourses = courses.filter((c) =>
    `${c.title} ${c.subtitle}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const filteredVideos = videos.filter((v) =>
    `${v.title} ${v.subtitle}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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

          <input
            className="search"
            placeholder="Search learning content"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div
            className="profile"
            onClick={() => navigate("/user")}
          >
            👤
          </div>
        </header>

        {/* CONTENT */}
        <main className="content">
          {/* COURSES */}
          {filteredCourses.length > 0 && (
            <section className="block">
              <h2 className="title">Courses</h2>
              <div className="course-row">
                {filteredCourses.map((course) => (
                  <article
                    key={course.id}
                    className="card"
                    onClick={() =>
                      navigate(`/course/${course.id}`)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img src={course.image} alt={course.title} />
                    <div className="card-body">
                      <h3>{course.title}</h3>
                      <p>{course.subtitle}</p>
                      <span className="price">{course.price}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* VIDEOS */}
          {filteredVideos.length > 0 && (
            <section className="block">
              <h2 className="title">Videos</h2>
              <div className="video-grid">
                {filteredVideos.map((video) => (
                  <article
                    key={video.id}
                    className="card"
                    onClick={() =>
                      navigate(`/video/${video.id}`)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img src={video.image} alt={video.title} />
                    <div className="card-body">
                      <h3>{video.title}</h3>
                      <p>{video.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* EMPTY STATE */}
          {search &&
            filteredCourses.length === 0 &&
            filteredVideos.length === 0 && (
              <p style={{ color: "#b5bac1" }}>
                No results found for “{search}”
              </p>
            )}
        </main>
      </section>
    </div>
  );
}
