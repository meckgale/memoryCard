import getData from "./getData";
const newData = await getData();

export default async function getName(id) {
  //   console.log(newData);
  const res = await fetch(`${newData.results.at(id).url}`);
  const data = await res.json();
  return data.name;
}
