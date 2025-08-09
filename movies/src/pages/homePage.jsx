import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../components/movieCard";

const HomePage = ({ movies }) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <h1>HomePage</h1>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <MovieCard movie={movies[0]} />
    </Grid>
  </Grid>
);

export default HomePage;
