import "../stylesheets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

function App() {
  const state = {
    dataObject: data,
  };
  return (
    <>
      <PokeList data={state.dataObject} />
      
    </>
    
  );
}

export default App;
