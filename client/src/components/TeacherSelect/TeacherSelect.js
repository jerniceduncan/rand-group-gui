import React from "react";
import "./TeacherSelect.css";

const TeacherSelect = ({ name }) => {
  return (
    <div className="teacherSelectCard">
      <h1>{name}</h1>
    </div>
  );
};

export default TeacherSelect;
