import React from "react";
import LeadSelect from "../../components/LeadSelect/LeadSelect";
import "./checkGroups.css";

const CheckGroups = ({ leads }) => {
  return (
    <div className="teacherSelectContainer">
      {leads.map((teacher, index) => (
        <LeadSelect key={index} name={teacher.name} />
      ))}
    </div>
  );
};

export default CheckGroups;
