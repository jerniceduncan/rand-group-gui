import React from "react";
import RandomGroup from "./../RandomGroup/RandomGroup";

const RandomizedWithLead = (props) => {
  const makeCard = () => {
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

    return arr;
  };

  return <div>{makeCard()}</div>;
};

export default RandomizedWithLead;
