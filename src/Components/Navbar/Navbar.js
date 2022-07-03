import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "transparent", backdropFilter: "blur(5px)" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
