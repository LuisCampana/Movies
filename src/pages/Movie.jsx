import { useEffect, useState } from "react";
import Moviecard from "../component/Moviecard";
import { getapp, getapp2 } from "../component/get";
import { Search } from "../component/Search";
import { useLocation } from "react-router-dom";
export default function Moviegrid(search) {
  const [movie, setmovie] = useState([]);
  let params = new URLSearchParams(useLocation().search);
  search = params.get("search");
  useEffect(() => {
    search
      ? getapp2(search).then((data) => setmovie(data.results))
      : getapp("/discover/movie").then((data) => setmovie(data.results));
  }, [search]);

  return (
    <div>
      <Search />
      <ul className="moviegrid">
        {movie.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
