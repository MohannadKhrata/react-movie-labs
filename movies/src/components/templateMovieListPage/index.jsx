import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

<<<<<<< HEAD
function MovieListPageTemplate({ movies, title, action }) {
=======
function MovieListPageTemplate({ movies, title, selectFavorite }) {
>>>>>>> a17dccd5a0c7b98a9cf9c4ccd2aaa0516baff881
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
<<<<<<< HEAD
        <MovieList action={action} movies={displayedMovies}></MovieList>
=======
        <MovieList selectFavorite={selectFavorite} movies={displayedMovies}></MovieList>
>>>>>>> a17dccd5a0c7b98a9cf9c4ccd2aaa0516baff881
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
