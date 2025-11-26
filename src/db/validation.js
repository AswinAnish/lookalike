import users from './users.json';

export const validateUser = (username, password) => {
  // Check in users.json first
  let user = users.users.find(
    (u) => u.username === username && u.password === password
  );
  
  if (user) {
    return { success: true, user };
  }

  // Check in localStorage for newly created users
  const appUsers = JSON.parse(localStorage.getItem('appUsers') || '[]');
  user = appUsers.find(
    (u) => u.username === username && u.password === password
  );

  return user ? { success: true, user } : { success: false, user: null };
};

export const userExists = (username) => {
  // Check in users.json
  if (users.users.some((u) => u.username === username)) {
    return true;
  }

  // Check in localStorage
  const appUsers = JSON.parse(localStorage.getItem('appUsers') || '[]');
  return appUsers.some((u) => u.username === username);
};

export const getUserByUsername = (username) => {
  // Check in users.json
  let user = users.users.find((u) => u.username === username);
  if (user) {
    return user;
  }

  // Check in localStorage
  const appUsers = JSON.parse(localStorage.getItem('appUsers') || '[]');
  return appUsers.find((u) => u.username === username);
};
