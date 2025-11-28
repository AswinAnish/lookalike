import data from "./courses.json";

const courses = Array.isArray(data.courses) ? data.courses : [];

export default courses;
