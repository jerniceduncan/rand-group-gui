import React, { useEffect } from "react";
import LeadSelect from "../LeadSelect/LeadSelect";
import axios from "axios";

const LeadSelection = (props) => {
  useEffect(() => {
    const showLeads = async (key) => {
      if (key === "Enter") {
        try {
          const success = await axios.put(
            "/api/groups",
            props.activeLeads.map((lead) => {
              return { id: lead.id, name: lead.name };
            })
          );

          props.setRandomizedGroups(success.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    window.addEventListener("keyup", (e) => showLeads(e.key));
    return () => window.removeEventListener("keyup", (e) => showLeads(e.key));
  }, [props.activeLeads]);
  return (
    <>
      {props.leads.map((lead, index) => (
        <LeadSelect
          toggleLead={() => props.toggleLead(index)}
          key={index}
          lead={lead}
        />
      ))}
    </>
  );
};

export default LeadSelection;
