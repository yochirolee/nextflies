import { useState } from "react";
import CastCrewContainer from "../../contaniners/CastCrew/CastCrewContianer";
import VideoModal from "../../contaniners/Modals/videoModal";
import { useMoviePicture } from "../../hooks/useMoviePicture";
import time_convert from "../../utils/timeConvert";
import Layour from "../../Layout/Layout";
import Layout from "../../Layout/Layout";

export default function Movie({ movie }) {
  if (!movie)
    return (
      <Layout>
        <div className="text-white h-screen grid place-items-center">
          <p className="text-2xl animate-pulse">Loading...</p>
        </div>
      </Layout>
    );

  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const image = useMoviePicture(movie.backdrop_path, "w1280");
  const getMoviePicture = (path, size) => {
    return useMoviePicture(path, size);
  };
  return (
    <Layout>
      <div className="flex flex-col   w-full  ">
        <div
          style={{
            backgroundImage: `url(${getMoviePicture(
              movie.backdrop_path,
              "w1280"
            )}`,
          }}
          className="h-auto bg-no-repeat bg-cover  "
        >
          <div className="flex flex-row  text-white  bg-gradient-to-b  from-transparent  to-black  h-full">
            <div className="flex flex-row items-center h-auto  w-full  mt-44 mb-20 mx-10 lg:mx-20 ">
              <div
                style={{
                  backgroundImage: `url(${getMoviePicture(
                    movie.poster_path,
                    "w300"
                  )})`,
                }}
                className="block flex-shrink-0 rounded-md  mr-6 w-64 h-96 bg-no-repeat cursor-pointer bg-cover border-b border-gray-800 hover:border-gray-200  "
              ></div>
              <div className="flex flex-col">
                <div className="mb-6">
                  <h2 className=" lg:text-6xl mb-2 font-bold ">
                    {movie.title}
                  </h2>
                  <h4 className="text-3xl font-semibold mb-4">
                    {movie.tagline}
                  </h4>
                  <p className="text-xl">
                    Duration: {time_convert(movie.runtime)}
                  </p>
                </div>

                <div className="flex flex-row  justify-auto w-2/5">
                  {movie.genres.map((genre) => (
                    <p
                      key={genre.id}
                      className="rounded-xl ml-2 font-thin text-sm text-gray-300 bg-gray-300 px-2 bg-opacity-30"
                    >
                      {genre.name}
                    </p>
                  ))}
                </div>

                <button
                  onClick={handleToggle}
                  className="bg-gray-700 font-bold my-6 opacity-75 rounded-md py-2 px-10 w-60 flex flex-row justify-around hover:bg-gray-500"
                >
                  <div className="transform -rotate-90 ring-2 ring-white	 rounded-full ">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                    </svg>
                  </div>
                  <p className="my-auto">Watch Trailer</p>
                </button>
                <p className="text-xl leading-8">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
        <CastCrewContainer credits={movie.credits} />
        {showModal && movie.videos && (
          <VideoModal movie={movie} handleToggle={handleToggle} />
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=45bf6592c14a965b33549f4cc7e6c664&append_to_response=videos,credits,similar`
  ).then((r) => r.json());

  return {
    props: {
      movie: movie,
    },
  };
}
