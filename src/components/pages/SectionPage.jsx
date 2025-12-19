import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import "../home/Home.css";

export default function SectionPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [section, setSection] = useState(null);

  useEffect(() => {
    fetch("/DB/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.sections?.find((s) => s.type === type);
        setSection(found || null);
      });
  }, [type]);

  if (!section) return null;

  return (
    <div className="home-root">
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

      <section className="main">
        <header className="topbar">
          <h1 className="logo">Learnin!</h1>
          <input className="search" placeholder={`Search ${section.title}`} />
          <div className="profile" onClick={() => navigate("/user")}>👤</div>
        </header>

        <main className="content">
          <section className="block">
            <h2 className="title">{section.title}</h2>

            <div className={type === "videos" ? "video-grid" : "course-row"}>
              {section.items.map((item) => (
                <article
                  key={item.id}
                  className="card"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (type === "videos") navigate(`/video/${item.id}`);
                    if (type === "courses") navigate(`/course/${item.id}`);
                  }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    {item.price && <span className="price">{item.price}</span>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}
