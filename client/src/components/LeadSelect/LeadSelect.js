import React from "react";
import "./leadSelect.css";

const LeadSelect = ({ lead, toggleLead }) => {
  const toggledStyles = {
    border: `1px ${lead.selected ? "black" : "#bebebe"} solid`,
    color: lead.selected ? "black" : "#bebebe",
  };

  return (
    <div
      onClick={() => {
        toggleLead();
      }}
      style={toggledStyles}
      className="teacherSelectCard"
    >
      <h1>{lead.name}</h1>
    </div>
  );
};

export default LeadSelect;
