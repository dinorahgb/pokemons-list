import React from "react";
import "../stylesheets/PokeList.scss";
import Pokemon from "./Pokemon";

function PokeList(props) {
  return (
    <>
      <ul className='poke__list'>
        <h1 className='poke__list--title'> Mi lista de Pokemons </h1>
        {props.data.map((pokemon) => {
          return (
            <li className='poke__list--card' key={pokemon.id}>
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
    </>
  );
}

export default PokeList;
