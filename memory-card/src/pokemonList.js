import getName from "./getName";
import getImage from "./getImage";
import getID from "./getID";
export default async function pokemonList() {
  const list = [];
  for (let i = 0; i <= 29; i++) {
    const first = await getName(i);
    const second = await getImage(i);
    const third = await getID(i);
    const pokemon = { name: "", image: "", id: null };
    pokemon.name = first;
    pokemon.image = second;
    pokemon.id = third;
    list.push(pokemon);
  }
  return list;
}
