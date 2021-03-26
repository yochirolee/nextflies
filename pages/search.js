import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../contexts/SearchContext";
import Layout from "../Layout/Layout";
import MovieListContainer from "../contaniners/MoviesListContainer/MoviesListContainer";
import { useRouter } from "next/router";

export default function Search() {
  const [search] = useContext(SearchContext);
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const searchMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=45bf6592c14a965b33549f4cc7e6c664`
    ).then((r) => r.json());
    setMovies(data);
  };

  useEffect(() => {
    searchMovies();
   
  }, [search]);

  return (
    <Layout>
      <div className="flex flex-col   w-full  pt-20 ">
        <MovieListContainer movies={movies} category={"Search Results"} />
      </div>
    </Layout>
  );
}
