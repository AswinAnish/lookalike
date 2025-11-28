import React from "react";
import "../styles/CourseCard.css";

function CourseCard({ thumbnail, title, creator, language, level, hours }) {
return (
<div className="course-card">
<img className="course-card-thumbnail" src={thumbnail} alt={title} />
<div className="course-card-body">
<h3 className="course-card-title">{title}</h3>
<p className="course-card-creator">{creator}</p>
<p className="course-card-meta">
{language} • {level}
</p>
<p className="course-card-hours">{hours} hours</p>
</div>
</div>
);
}
