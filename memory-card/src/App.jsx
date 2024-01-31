import { useState } from "react";
import "./App.css";

import pokemonList from "./pokemonList";

const objList = await pokemonList();

export default function App() {
  const [count, setCount] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function handleCard(obj) {
    if (clickedCards.includes(obj.id)) return;
    setCount((c) => c + 1);
    setClickedCards(() => [...clickedCards, obj.id]);
    console.log(clickedCards);
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
      <CardList onHandle={handleCard} objList={objList} />
    </div>
  );
}

function CardList({ onHandle, objList }) {
  return (
    <div className="card-list">
      {objList.map((obj) => (
        <Card
          name={obj.name}
          image={obj.image}
          key={obj.id}
          onHandle={onHandle}
          obj={obj}
        />
      ))}
    </div>
  );
}

function Card({ name, image, onHandle, obj }) {
  return (
    <div className="card" onClick={() => onHandle(obj)}>
      <img className="image" src={image} alt={`${name} poster`} />
      <h3>{name.toUpperCase()}</h3>
    </div>
  );
}
