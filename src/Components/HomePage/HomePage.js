import React, { useEffect, useRef } from "react";
import { Grid, Box, Typography, Paper, AppBar, Toolbar } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

import video from "./video.mp4";

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    height: "100vh",
    width: "100%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "-1"
  }
}));

const HomePage = ({ play, children }) => {
  const vidRef = useRef();

  const playVideo = () => {
    vidRef.current.play();
  };
  const pauseVideo = () => {
    vidRef.current.pause();
  };

  useEffect(() => {
    if (play) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [play]);

  const classes = useStyles();
  return (
    <>
      <Grid sx={{ minHeight: "100vh", position: "relative" }}>
        <video
          ref={vidRef}
          muted
          loop
          src={video}
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            objectFit: "fill",
            zIndex: -1
          }}
        />
        {children}
      </Grid>
    </>
  );
};

export default HomePage;
