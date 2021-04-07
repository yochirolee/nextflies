import dynamic from "next/dynamic";
const CastCrewContainer = dynamic(() =>
  import("../../contaniners/CastCrew/CastCrewContianer")
);

import Jumbotron from "../../contaniners/Jumbotron/jumbotron";
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

  return (
    <Layout>
      <div className="flex flex-col   w-full  ">
        <Jumbotron movie={movie} />
        <CastCrewContainer credits={movie.credits} />
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
