import { useState } from "react";
import "./App.css";

import pokemonList from "./pokemonList";

const objList = await pokemonList();

export default function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCard() {
    setCount((c) => c + 1);
    setClicked((cards) => [...cards, clicked]);
    console.log(clicked);
  }

  function handleClickedCard() {
    setClicked((cards) => [...cards, clicked]);
  }

  return (
    <div className="main">
      <header className="header-container">
        <h1>Title of the App</h1>
        <div>
          <h1>Scoreboard</h1>
          <h3>{count}</h3>
        </div>
      </header>
      <CardList objList={objList} onHandle={handleCard} />
    </div>
  );
}

function CardList({ onHandle }) {
  return (
    <div className="card-list">
      {objList.map((obj, i) => (
        <Card obj={obj} key={i} onHandle={onHandle} />
      ))}
    </div>
  );
}

function Card({ obj, onHandle }) {
  return (
    <div className="card" onClick={onHandle}>
      <img className="image" src={obj.image} alt={`${obj.name} poster`} />
      <h3>{obj.name.toUpperCase()}</h3>
    </div>
  );
}
