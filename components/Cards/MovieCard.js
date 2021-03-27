import Link from "next/link";
import { useMoviePicture } from "../../hooks/useMoviePicture";
import Image from "next/image";
export default function MovieCard({ movie }) {
  if (movie.poster_path === null) return <></>;

  return (
    <Link href={`/movie/${encodeURIComponent(movie.id)}`} key={movie.id}>
      <div className="block flex-shrink-0  mr-6 mb-6 w-44 h-64  cursor-pointer   ">
        <Image
          src={useMoviePicture(movie.poster_path, "w185")}
          height="145"
          width="98"
          layout="responsive"
          alt="cast"
          className="object-scale-down rounded-xl hover:opacity-50"
        ></Image>
      </div>
    </Link>
  );
}
