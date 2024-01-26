export default async function getData() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30`);
  const data = await res.json();
  return data;
}
