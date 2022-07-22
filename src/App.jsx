import Moviegrid from "./pages/Movie";
import "./scss/moviecard.scss";
import { Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/Moviedetails";
function App() {
  return (
    <div>
      <Link to="/">
        <h1 className="titlemovies">Movies</h1>
      </Link>
      <Routes>
        <Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>

          <Route path="/" element={<Moviegrid />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
