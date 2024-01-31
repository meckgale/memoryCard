import getData from "./getData";
const newData = await getData();
export default async function getName(rank) {
  const res = await fetch(`${newData.results.at(rank).url}`);
  const data = await res.json();
  return data.name;
}
