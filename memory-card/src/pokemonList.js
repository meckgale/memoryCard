import getName from "./getName";
import getImage from "./getImage";
export default async function pokemonList() {
  const list = [];
  for (let i = 0; i <= 29; i++) {
    const first = await getName(i);
    const second = await getImage(i);
    const pokemon = { name: "", image: "" };
    pokemon.name = first;
    pokemon.image = second;
    list.push(pokemon);
  }
  return list;
}
