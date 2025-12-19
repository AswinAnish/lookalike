import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import SectionPage from "./components/pages/SectionPage";
import VideoPage from "./components/videos/VideoPage";
import CoursePage from "./components/courses/CoursePage";
import User from "./components/user/User";

const isAuthenticated = () =>
  localStorage.getItem("isLoggedIn") === "true";

const ProtectedRoute = ({ children }) =>
  isAuthenticated() ? children : <Navigate to="/" replace />;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/section/:type" element={<ProtectedRoute><SectionPage /></ProtectedRoute>} />
      <Route path="/video/:id" element={<ProtectedRoute><VideoPage /></ProtectedRoute>} />
      <Route path="/course/:id" element={<ProtectedRoute><CoursePage /></ProtectedRoute>} />
      <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
