import React from "react";
import TeacherSelect from "./../../components/TeacherSelect/TeacherSelect";
import "./checkGroups.css";

const CheckGroups = ({ teachers }) => {
  const names = ["nancy", "markus", "ben", "nancy"];
  return (
    <div className="teacherSelectContainer">
      {names.map((teacher, index) => (
        <TeacherSelect key={index} name={teacher} />
      ))}
    </div>
  );
};

export default CheckGroups;
