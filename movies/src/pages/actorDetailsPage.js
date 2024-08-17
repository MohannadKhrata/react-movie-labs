import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorPage";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant

const ActorPage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <ActorDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default ActorPage;