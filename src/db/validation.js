import users from './users.json';

export const validateUser = (username, password) => {
  const user = users.users.find(
    (u) => u.username === username && u.password === password
  );
  return user ? { success: true, user } : { success: false, user: null };
};

export const userExists = (username) => {
  return users.users.some((u) => u.username === username);
};

export const getUserByUsername = (username) => {
  return users.users.find((u) => u.username === username);
};
