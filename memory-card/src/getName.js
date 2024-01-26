import getData from "./getData";
const newData = await getData();
export default async function getName(id) {
  const res = await fetch(`${newData.results.at(id).url}`);
  const data = await res.json();
  return data.name;
}
