import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { GitHub, Favorite } from "@mui/icons-material";

const Footer = () => {
  return (
    <AppBar position="relative" sx={{ bgcolor: "rgba(0,0,0,0.3)", top: "auto" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="body1">Made with </Typography>
        <Favorite
          sx={{
            color: "error.dark",
            mx: 1,
            animation: "pound 0.35s infinite alternate",
            "@keyframes pound": { to: { transform: "scale(1.1)" } }
          }}
        />
        <Typography variant="body1"> by Aadarsh | </Typography>
        <GitHub
          sx={{ ml: 1, cursor: "pointer" }}
          onClick={() => window.open("https://github.com/aadarsh012", "_blank")}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
