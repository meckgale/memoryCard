import { useState } from "react";
import "./App.css";

import pokemonList from "./pokemonList";

const objList = await pokemonList();

export default function App() {
  const [count, setCount] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [highscore, setHighscore] = useState(null);

  function handleHighscore() {
    count >= highscore ? setHighscore(count) : highscore;
  }

  function shuffle() {
    let currentIndex = objList.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [objList[currentIndex], objList[randomIndex]] = [
        objList[randomIndex],
        objList[currentIndex],
      ];
    }
    return objList;
  }

  function newTurn() {
    setCount(0);
    setClickedCards([]);
    shuffle();
    handleHighscore();
  }

  function handleCard(obj) {
    if (clickedCards.includes(obj.id)) return newTurn();
    setCount((c) => c + 1);
    setClickedCards(() => [...clickedCards, obj.id]);
    shuffle();
  }

  return (
    <div className="main">
      <header className="header-container">
        <h1>Remember Your Pokecards</h1>
        <div>
          <h1>Scoreboard</h1>
          <h4>{highscore && `Highscore: ${highscore}`}</h4>
          <h3>Score: {count}</h3>
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
