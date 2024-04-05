import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';

const ToWatchPage = () => {
  const {playlist: movieIds } = useContext(MoviesContext);

  const toWatchQueries = useQueries(
    movieIds.map((movieId) => {
       return {
        queryKey: ["movie", { id: movieId }],
         queryFn: getMovie,
       };
     })
   );
   const isLoading = toWatchQueries.find((m) => m.isLoading === true);

   if (isLoading) {
     return <Spinner />;
   }
   const movies = toWatchQueries.map((q) => {
     q.data.genre_ids = q.data.genres.map(g => g.id)
     console.log(q.data.genres)
     return q.data
   });

  return (
    <PageTemplate
      title="Movies to Watch"
      movies={movies}
      action={(movie) => {
        return (
          <>
            
          </>
        );
      }}
    />
  );
};

export default ToWatchPage;
