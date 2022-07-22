import { Link } from "react-router-dom";

export default function Moviecard({ movie }) {
  const imgurl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    : "";
  return (
    <li className="containermovie">
      <Link to={"/movies/" + movie.id}>
        <img className="cardimg" src={imgurl} alt={movie.title}></img>
        <div className="cardtitle">{movie.title}</div>
        <div className="ratingmovie">
          {[...Array(5)].map((element, i) => {
            //para tener un rating de 2 en dos
            const ratingvalue = i * 2 + 1 * 2;
            return (
              <label
                key={i}
                value={ratingvalue}
                className={
                  ratingvalue <= movie.vote_average ? "orange" : "white"
                }
              >
                ★
              </label>
            );
          })}
        </div>
      </Link>
    </li>
  );
}
