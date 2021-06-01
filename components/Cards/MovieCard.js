import Link from "next/link";
import { useMoviePicture } from "../../hooks/useMoviePicture";
import Image from "next/image";
export default function MovieCard({ movie }) {
  if (movie.poster_path === null) return <></>;

  return (
    <Link href={`/movie/${encodeURIComponent(movie.id)}`} key={movie.id}>
      <div className=" flex-shrink-0  mx-4 w-48 mb-6    cursor-pointer   ">
        <Image
          src={useMoviePicture(movie.poster_path, "w185")}
          height="320"
          width="180"
          alt="cast"
          className=" rounded-xl hover:opacity-50 "
        ></Image>
      </div>
    </Link>
  );
}
