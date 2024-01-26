import { useState } from "react";
import "./App.css";
import useData from "./useData";
import getData from "./getData";
import getImage from "./getImage";
import getName from "./getName";
import pokemonList from "./pokemonList";

export default function App() {
  // const { pokemonObj } = useData(1);
  // console.log(pokemonObj);

  return (
    <div className="main">
      <header className="header-container">
        <h1>Title of the App</h1>
        <div>Scoreboard</div>
      </header>
      <div className="card-list">
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
        <Card id={4} />
        <Card id={5} />
        <Card id={6} />
        <Card id={7} />
        <Card id={8} />
        <Card id={9} />
        <Card id={10} />
        <Card id={11} />
        <Card id={12} />
      </div>
    </div>
  );
}

function Card({ id }) {
  const { pokemonObj } = useData(id);
  return (
    <div className="card">
      <img
        className="image"
        src={pokemonObj.image}
        alt={`${pokemonObj.name} poster`}
      />
      <h3>{pokemonObj.name}</h3>
    </div>
  );
}

getData();
getImage(0);
getName(0);
pokemonList();
