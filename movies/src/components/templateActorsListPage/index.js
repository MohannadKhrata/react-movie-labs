import React from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ movies, title, action }) {

  let displayedMovies = movies

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>

        </Grid>
        <ActorList action={action} movies={displayedMovies}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;