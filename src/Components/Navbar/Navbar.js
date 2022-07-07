import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const CustomColor = withStyles({
  root: {
    background: "-webkit-linear-gradient(45deg, #4deeea 30%, #74ee15 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography);

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
          <CustomColor variant="h5" sx={{ flexGrow: 1 }}>
            Alan News
          </CustomColor>
          <CustomColor fontWeight={600} variant="h6">
            {hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </CustomColor>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
