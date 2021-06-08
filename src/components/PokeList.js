import React from "react";
import "../stylesheets/PokeList.scss";
import Pokemon from "./Pokemon";

function PokeList(props) {
  return (
    <ul>
      {props.data.map((pokemon) => {
        return (
          <li key={pokemon.id}>
            <Pokemon
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              url={pokemon.url}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default PokeList;
