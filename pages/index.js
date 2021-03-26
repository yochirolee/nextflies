import Link from "next/link";
import { useMoviePicture } from "../hooks/useMoviePicture";
import Layout from "../Layout/Layout";
import MoviesListContainer from "../contaniners/MoviesListContainer/MoviesListContainer";

export default function Home({ movie, trendingList, inTheathers, topRated }) {
  const image = useMoviePicture(movie.backdrop_path, "w1280");

  return (
    <Layout>
      <div className="flex flex-col   w-full  ">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-auto bg-no-repeat bg-cover"
        >
          <div className="flex flex-row text-white  bg-gradient-to-b  from-transparent to-black  h-full">
            <div className="block h-auto  w-full lg:w-4/6 mt-44 mb-20 mx-10 lg:mx-20 ">
              <div className="mb-6">
                <h2 className=" lg:text-6xl mb-2 font-bold ">{movie.title}</h2>
                <h4 className="text-3xl font-semibold mb-4">{movie.tagline}</h4>
                <p className="text-xl leading-8">
                  {movie.overview.substr(0, 100)}...
                </p>
              </div>
              <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
                <button className="bg-gray-700 opacity-75 rounded-md py-2 px-10">
                  More Info
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <MoviesListContainer
            movies={trendingList}
            category={"Trending Movies"}
          />
          <MoviesListContainer movies={inTheathers} category={"In Theaters"} />
          <MoviesListContainer movies={topRated} category={"Top Rated"} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const [movie, trendingList, inTheathers, topRated] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/527774?api_key=45bf6592c14a965b33549f4cc7e6c664`
    ).then((r) => r.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=45bf6592c14a965b33549f4cc7e6c664`
    ).then((r) => r.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=45bf6592c14a965b33549f4cc7e6c664`
    ).then((r) => r.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=45bf6592c14a965b33549f4cc7e6c664`
    ).then((r) => r.json()),
  ]);

  return {
    props: { movie, trendingList, inTheathers, topRated }, // will be passed to the page component as props
  };
}
