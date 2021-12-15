import React, { useState, useEffect } from "react";
import RandomGroup from "./../RandomGroup/RandomGroup";

const RandomizedWithLead = (props) => {
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    let arr = [];

    for (let lead in props.randomizedGroups) {
      arr.push(
        <RandomGroup
          key={lead}
          lead={lead}
          apprentices={props.randomizedGroups[lead]}
        />
      );
    }
    setGroupData(arr);
  }, [props.randomizedGroups]);

  return <div>{groupData}</div>;
};

export default RandomizedWithLead;
