import AnimeCard from './AnimeCard';
export default async function Animes() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  return data.users.map((anime) => {
    return <AnimeCard anime={anime} />;
  });
}
