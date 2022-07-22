import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getapp } from "../component/get";

export function MovieDetails() {
  const [movie, setmovie] = useState([]);
  const { movieId } = useParams();

  console.log(movieId);
  useEffect(() => {
    getapp("/movie/" + movieId).then((data) => setmovie(data));
  }, [movieId]);

  const imgurl = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;

  return (
    <div className="containerdetailscenter">
      <div className="containerdetails">
        <img className="imgdetail" src={imgurl} alt={movie.title}></img>
        <div className="moviedetail">
          <p>
            <strong>Title: </strong>
            {movie.title}
          </p>

          <p>
            <strong>Overview: </strong>
            {movie.overview}
          </p>
          <p>
            <div className="ratingmovie">
              <strong>Rating:</strong>
              {[...Array(5)].map((element, i) => {
                //para tener un rating de 2 en dos
                const ratingvalue = i * 2 + 1 * 2;
                return (
                  <label
                    key={i}
                    value={ratingvalue}
                    className={
                      ratingvalue <= movie.vote_average ? "orange" : ""
                    }
                  >
                    ★
                  </label>
                );
              })}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
