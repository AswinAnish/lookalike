import base from "./users.json";

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
const localUsers = readLocalUsers();
return [...baseUsers, ...localUsers];
}

export function userExists(username) {
return getAllUsers().some((u) => u.username === username);
}

export function createUser({ username, password, email, avatar }) {
if (!username || !password) {
return { success: false, reason: "invalid_payload" };
}

if (userExists(username)) {
return { success: false, reason: "exists" };
}

const localUsers = readLocalUsers();

const newUser = {
id: Date.now(),
username,
password,
email: email || "",
avatar: avatar || "👤",
};

localUsers.push(newUser);
writeLocalUsers(localUsers);

return { success: true, user: newUser };
}

export default {
getAllUsers,
userExists,
createUser,
};