import React, { useEffect, useState } from "react";
import LeadSelect from "../../components/LeadSelect/LeadSelect";
import axios from "axios";
import "./checkGroups.css";
import RandomizedWithLead from "../../components/RandomizedWithLead/RandomizedWithLead";
import LeadSelection from "../../components/LeadSelection/LeadSelection";

const CheckGroups = ({ leads, toggleLead, activeLeads }) => {
  const [randomizedGroups, setRandomizedGroups] = useState({});

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
        {Object.keys(randomizedGroups).length === 0 ? (
          <LeadSelection
            setRandomizedGroups={setRandomizedGroups}
            activeLeads={activeLeads}
            leads={leads}
            toggleLead={toggleLead}
          />
        ) : (
          <RandomizedWithLead
            randomizedGroups={randomizedGroups}
            setRandomizedGroups={setRandomizedGroups}
          />
        )}
      </div>
    </div>
  );
};

export default CheckGroups;
