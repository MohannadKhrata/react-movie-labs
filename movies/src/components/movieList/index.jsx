import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

const MovieList = (props) => {
  let movieCards = props.movies.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
<<<<<<< HEAD
      <Movie key={m.id} movie={m} action={props.action} />
=======
          <Movie key={m.id} movie={m} selectFavorite={props.selectFavorite} />

>>>>>>> a17dccd5a0c7b98a9cf9c4ccd2aaa0516baff881
    </Grid>
  ));
  return movieCards;
};

export default MovieList;
<<<<<<< HEAD
=======

>>>>>>> a17dccd5a0c7b98a9cf9c4ccd2aaa0516baff881
