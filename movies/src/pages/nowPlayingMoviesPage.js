import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const NowPlayingMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery(
        "nowPlaying",
        getNowPlayingMovies
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const movies = data.results;

    const favorites = movies.filter((m) => m.favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    return (
        <PageTemplate
            title="In Theaters Movies"
            movies={movies}
            action={(movie) => {}}
        />
    );
};
export default NowPlayingMoviesPage;
