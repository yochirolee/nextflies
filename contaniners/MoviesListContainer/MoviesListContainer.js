import Link from "next/link";
import { useHorizontalScroll } from "../../hooks/useHorizotalScroll";
import MovieCard from "../../components/Cards/MovieCard";

export default function MoviesListContainer({ movies, category }) {
  let moviesList = null;

  if (movies) {
    moviesList = movies.results;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <div className="  text-white my-6 py-6  px-10 ">
      <h3 className="text-2xl font-semibold mb-6 ">{category}</h3>
      <div
        ref={scrollRef}
        id="card-container "
        className="flex flex-row  flex-nowrap overflow-hidden "
      >
        {moviesList &&
          moviesList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
