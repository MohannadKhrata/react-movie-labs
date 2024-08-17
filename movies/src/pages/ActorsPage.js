import React from "react";
import PageTemplate from "../components/templateActorsListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const ActorsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("popularActors", getActors);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const movies = data.results;

    return (
        <PageTemplate
            title="Actors List"
            movies={movies}
            action={(movie) => {}}
        />
    );
};
export default ActorsPage;
