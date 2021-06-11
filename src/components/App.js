import "../stylesheets/App.scss";
//import React, { useState } from "react"; para guardar la data en el estado
import data from "../data/data.json";
import PokeList from "./PokeList";

function App() {
  //const [dataObject, setDataObject] =(data); useState para guardar en el estado pero no hace falta la función del cambio de estado (setDataObject) porque no se utilizaría.

  const state = {
    dataObject: data,
  };
  return (
    <>
      <PokeList data={state.dataObject} />
      {/* <PokeList data={dataObject} /> */}
    </>
  );
}

export default App;
