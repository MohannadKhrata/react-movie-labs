
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ movie }) => {  // Don't miss this!

  
  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {movie.biography}
      </Typography>
      </>
  );
};
export default ActorDetails ;
