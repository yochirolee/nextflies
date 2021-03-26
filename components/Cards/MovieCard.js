import Link from "next/link";
import { useMoviePicture } from "../../hooks/useMoviePicture";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${encodeURIComponent(movie.id)}`} key={movie.id}>
      <div
        id="movie-card"
        style={{
          backgroundImage: `url(${useMoviePicture(movie.poster_path, "w185")})`,
        }}
        className="block flex-shrink-0 rounded-md  mr-6 w-44 h-64 bg-no-repeat cursor-pointer bg-cover border-b border-gray-800 hover:border-gray-200  "
      ></div>
    </Link>
  );
}
