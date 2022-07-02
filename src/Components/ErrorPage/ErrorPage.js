import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

import errorImage from "./error.jpg";

import Instructions from "../InstructionCards/Instructions";

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    height: "80vh",
    width: "60%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "-1"
  }
}));

const ErrorPage = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.image}>
        <img style={{ position: "absolute", height: "100%", width: "100%" }} src={errorImage} />
      </Box>
      <Typography variant="h6" sx={{ width: "100%", textAlign: "center", p: 2 }}>
        Please try to speak something else.
      </Typography>
      <Instructions />
    </>
  );
};

export default ErrorPage;
