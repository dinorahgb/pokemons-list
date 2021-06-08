import React from "react";

function Pokemon(props) {
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <h2>{props.name}</h2>
      <ul>
        {props.types.map((type) => {
          return <li>{type}</li>;
        })}
      </ul>
    </div>
  );
}

export default Pokemon;
