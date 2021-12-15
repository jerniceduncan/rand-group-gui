import React, { useEffect } from "react";
import LeadSelect from "../../components/LeadSelect/LeadSelect";
import axios from "axios";
import "./checkGroups.css";

const CheckGroups = ({ leads, toggleLead, activeLeads }) => {
  useEffect(() => {
    const showLeads = async () => {
      try {
        const success = await axios.put(
          "/api/groups",
          activeLeads.map((lead) => {
            return { id: lead.id, name: lead.name };
          })
        );

        console.log(success.data);
      } catch (err) {
        console.log(err);
      }
    };

    window.addEventListener("keyup", showLeads);
    return () => window.removeEventListener("keyup", showLeads);
  }, [activeLeads]);

  return (
    <div className="teacherSelectContainer">
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {leads.map((lead, index) => (
          <LeadSelect
            toggleLead={() => toggleLead(index)}
            key={index}
            lead={lead}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckGroups;
