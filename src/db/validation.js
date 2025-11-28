// src/db/validation.js
import base from "./users.json";

/*
  base expected shape:
  {
    "users": [
      { "username": "admin", "password": "admin123" }
    ]
  }
*/

const LOCAL_KEY = "appUsers";

function readLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

function writeLocalUsers(users) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(users));
}

export function getAllUsers() {
  const baseUsers = Array.isArray(base.users) ? base.users : [];
  const local = readLocalUsers();
  return [...baseUsers, ...local];
}

export const validateUser = (username, password) => {
  const all = getAllUsers();
  const user = all.find(u => u.username === username && u.password === password);
  return { success: !!user, user: user || null };
};

export const userExists = (username) => {
  const all = getAllUsers();
  return all.some(u => u.username === username);
};

export const getUserByUsername = (username) => {
  const all = getAllUsers();
  return all.find(u => u.username === username) || null;
};

// Add a new user to localStorage. Returns { success: true } or { success: false, reason }
export const addLocalUser = (newUser) => {
  if (!newUser || !newUser.username || !newUser.password) {
    return { success: false, reason: "invalid_payload" };
  }

  // block duplicates
  if (userExists(newUser.username)) {
    return { success: false, reason: "exists" };
  }

  const local = readLocalUsers();
  local.push(newUser);
  writeLocalUsers(local);
  return { success: true };
};
