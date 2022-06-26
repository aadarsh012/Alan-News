import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky">
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
