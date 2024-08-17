import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const TopRatedMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery(
        "topRated",
        getTopRatedMovies
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
            title="Top Rated"
            movies={movies}
            action={(movie) => {}}
        />
    );
};
export default TopRatedMoviesPage;
