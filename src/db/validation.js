import { getAllUsers, userExists } from "./userStore";

export { userExists };

export const validateUser = (username, password) => {
const all = getAllUsers();
const user = all.find(
(u) => u.username === username && u.password === password
);

return user ? { success: true, user } : { success: false, user: null };
};

export const getUserByUsername = (username) => {
const all = getAllUsers();
return all.find((u) => u.username === username) || null;
};