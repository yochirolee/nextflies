import { useMoviePicture } from "../../hooks/useMoviePicture";
import time_convert from "../../utils/timeConvert";
import { useState } from "react";
import VideoModal from "../Modals/videoModal";

export default function Jumbotron({ movie }) {
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

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${useMoviePicture(
            movie.backdrop_path,
            "w1280"
          )}`,
        }}
        className=" bg-no-repeat bg-top bg-cover "
      >
        <div className="flex flex-col md:flex-row  text-white  bg-gradient-to-b  from-transparent  to-black  h-full">
          <div className="flex flex-col mx-auto md:flex-row items-center h-auto  w-full  mt-20 md:mt-44 mb-20 md:mx-10 lg:mx-20 ">
            <div
              style={{
                backgroundImage: `url(${useMoviePicture(
                  movie.poster_path,
                  "w300"
                )})`,
                
              }}
              className=" block relative flex-shrink-0 rounded-md  mr-6 w-64 h-96 bg-no-repeat cursor-pointer bg-cover "
            >
            
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="mb-6 text-center lg:text-left   ">
                <h2 className="text-3xl lg:text-6xl mb-2 font-bold ">
                  {movie.title}
                </h2>
                <h4 className="text-xl lg:text-3xl font-semibold mb-4">
                  {movie.tagline}
                </h4>
                <p className="text-xs lg:text-xl">
                  Duration: {time_convert(movie.runtime)}
                </p>
              </div>

              <div className="flex flex-row flex-wrap justify-auto lg:w-2/5">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <p
                      key={genre.id}
                      className="rounded-xl ml-2 font-thin text-xs sm:text-sm text-gray-300 bg-gray-700 px-2 bg-opacity-70"
                    >
                      {genre.name}
                    </p>
                  ))}
              </div>

              <button
                onClick={handleToggle}
                className="bg-red-800 font-bold my-6 opacity-75 rounded-md py-2 px-10 w-64 h-14 flex flex-row justify-around hover:bg-red-700 "
              >
                <div className="transform -rotate-90 ring-2 ring-white mr-2	mt-2 rounded-full ">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                  </svg>
                </div>
                <p className="my-auto text-xl">Watch Trailer</p>
              </button>
              <p className="lg:text-xl lg:leading-8 px-10 lg:px-0">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      {showModal && movie.videos && (
        <VideoModal movie={movie} handleToggle={handleToggle} />
      )}
    </>
  );
}
