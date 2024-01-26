import getData from "./getData";
const newData = await getData();
export default async function getImage(id) {
  //   console.log(newData);
  const res = await fetch(`${newData.results.at(id).url}`);
  const data = await res.json();
  // return data;
  return data.sprites.other.home.front_default;
}
