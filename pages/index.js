import dynamic from "next/dynamic";
import Layout from "../Layout/Layout";
const MoviesListContainer = dynamic(() =>
  import("../contaniners/MoviesListContainer/MoviesListContainer")
);
const Slider = dynamic(() =>
  import("../components/sliders/slider")
);
const Jumbotron = dynamic(() => import("../contaniners/Jumbotron/jumbotron"));

export default function Home({ movie, trendingList, inTheathers, topRated }) {
  return (
    <Layout>
      <div className="flex flex-col   w-full  ">
        <Jumbotron movie={movie} />

        <div className="w-full ">
          <Slider
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

export async function getStaticProps() {
  const [movie, trendingList, inTheathers, topRated] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/58?api_key=45bf6592c14a965b33549f4cc7e6c664&append_to_response=videos,credits,similar`
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
