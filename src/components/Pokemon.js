import React from "react";
import "../stylesheets/PokeCard.scss";

function Pokemon(props) {
  return (
    <article className='card'>
      <img src={props.url} alt={props.name} />
      <h2 className='card__title'>{props.name}</h2>
      <ul className='card__list'>
        {props.types.map((type) => {
          return <li className='card__list--type'>{type}</li>;
        })}
      </ul>
    </article>
  );
}



export default Pokemon;
