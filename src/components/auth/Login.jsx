import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/DB/users.json");
      const data = await res.json();

      const isValid = data.users.some(
        (u) => u.username === username && u.password === password
      );

      if (isValid) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        navigate("/home");
      } else {
        setError("Invalid username or password");
      }
    } catch {
      setError("Unable to login. Please try again.");
    }
  };

  return (
    <main className="login-root">
      <section className="login-card">
        <header className="login-header">
          <h1 className="logo">Learnin</h1>
          <p className="tagline">Learn Languages</p>
        </header>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Please enter your username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Please enter your password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <span className="error-text">{error}</span>}

          <button type="submit" className="login-btn">
            LOGIN
          </button>

          <span className="forgot">I’ve forgotten my password</span>
        </form>
      </section>
    </main>
  );
}
