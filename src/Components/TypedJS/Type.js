import React, { useRef, useEffect } from "react";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Typed from "typed.js";

const CustomColor = withStyles({
  root: {
    background: "-webkit-linear-gradient(45deg, #4deeea 30%, #74ee15 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography);

const Type = (props) => {
  const elRef = useRef();

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: [
        "Give me the news from BuzzFeed.",
        "Get me the news from BBC News.",
        "What are the news on Tesla.",
        "Tell me the latest news on Sports.",
        "What's up with Corona Virus.",
        "Bring me the Technology news.",
        "Show the recent news on Science.",
        "What are the news on Bitcoin.",
        "Fetch me the  news from Fox News",
        "Tell me the news on Entertainment."
      ],
      typeSpeed: 30,
      backSpeed: 10,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <CustomColor
        ref={elRef}
        id="type"
        fontWeight={600}
        component="div"
        variant="h6"
        sx={{ width: "100%", textAlign: "center", p: 2, height: 60 }}
      ></CustomColor>
    </>
  );
};

export default Type;
