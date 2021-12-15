import React from "react";

const RandomGroup = (props) => {
  return (
    <div>
      <h1>{props.lead}</h1>
      <ul>
        {props.apprentices.map((apprentice, index) => (
          <li key={index}>{apprentice.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomGroup;
