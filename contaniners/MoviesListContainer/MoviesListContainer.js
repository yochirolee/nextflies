import { useHorizontalScroll } from "../../hooks/useHorizotalScroll";
import MovieCard from "../../components/Cards/MovieCard";

export default function MoviesListContainer({ movies, category }) {
  let moviesList = null;

  if (movies) {
    moviesList = movies.results;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <div className="  text-white   px-10 ">
      <h3 className="text-2xl font-semibold mb-6 ">{category}</h3>
      <div
        ref={scrollRef}
        id="card-container  "
        className={`flex flex-row   overflow-hidden ${
          category === "Search Results" ? "flex-wrap justify-evenly flex-grow" : "flex-nowrap"
        }`}
      >
        {moviesList &&
          moviesList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
