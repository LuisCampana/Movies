const API = "https://api.themoviedb.org/3";
const APIKEY = "?api_key=96479196b09b11fc4dd7546906fdb2f0";

export async function getapp(path) {
  const response = await fetch(API + path + APIKEY);
  const data = await response.json();
  return data;
}
export async function getapp2(path) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=96479196b09b11fc4dd7546906fdb2f0&language=en-US&query=${path}&page=1&include_adult=false;`
  );
  const data = await response.json();
  return data;
}
