import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const updateTime = () => {
    const date = new Date();
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "transparent", backdropFilter: "blur(5px)" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Typography variant="h6">
            {hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
