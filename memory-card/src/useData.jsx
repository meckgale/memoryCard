import { useState, useEffect } from "react";

export default function useData(id) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const pokemonObj = { name: pokemonName, image: pokemonImage };
  useEffect(() => {
    async function getRequest() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemonImage(data.sprites.other.home.front_default);
      setPokemonName(data.name.toUpperCase());
    }
    getRequest();
  }, [id]);
  return { pokemonObj };
}
