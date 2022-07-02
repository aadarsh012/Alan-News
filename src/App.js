import "./App.css";
import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

import { CircularProgress } from "@mui/material";

import NewsCards from "./Components/NewsCards/NewsCards";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const alanApiKey = "3f4a6bc5a5076c4ca7347dbe45bb3d392e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const alanBtnInstance = alanBtn({
      key: alanApiKey,
      onCommand: ({ command, url, source }) => {
        if (command === "newHeadlines") {
          setLoading(true);
          console.log(url);
          axios
            .get(url)
            .then((response) => {
              console.log(response.data);
              if (response.data.articles.length === 0) {
                setLoading(false);
                setError(true);
                throw new Error("Sorry, please speak something valid.");
              } else {
                setNews(response.data.articles);
                setLoading(false);
                setError(false);
                alanBtnInstance.playText(`Here are the latest news from ${source}`);
              }
            })
            .catch((err) => {
              console.log(err.message);
              alanBtnInstance.playText(err.message.toString());
            });
        } else if (command === "test-command") {
          alanBtnInstance.playText("Hi I am alan");
        }
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      {!error ? (
        loading ? (
          <CircularProgress
            size={80}
            thickness={4}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}
          />
        ) : (
          <NewsCards articles={news} />
        )
      ) : (
        <>Error</>
      )}
    </>
  );
}

export default App;
