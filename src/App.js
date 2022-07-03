import "./App.css";
import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

import { CircularProgress, Typography } from "@mui/material";

import NewsCards from "./Components/NewsCards/NewsCards";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Instructions from "./Components/InstructionCards/Instructions";
import Layout from "./Components/Layout/Layout";

function App() {
  const alanApiKey = "3f4a6bc5a5076c4ca7347dbe45bb3d392e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [greeting, setGreeting] = useState(false);

  const errorComponent = (
    <Typography variant="h6" sx={{ width: "100%", textAlign: "center", p: 2, color: "error.main" }}>
      Please try to speak something else.
    </Typography>
  );

  useEffect(() => {
    const alanBtnInstance = alanBtn({
      key: alanApiKey,
      onButtonState: (status) => {
        if (status === "LISTEN" || status === "PROCESS" || status === "REPLY") {
          setPlayVideo(true);
        } else {
          setPlayVideo(false);
        }
      },
      onCommand: ({ command, url, source, term, category }) => {
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
                alanBtnInstance.setVisualState({ articles: response.data.articles });
                setLoading(false);
                setError(false);
                if (source) {
                  alanBtnInstance.playText(`Here are the latest news from ${source}`);
                } else if (term) {
                  alanBtnInstance.playText(`Here are the latest news on ${term}`);
                } else if (category) {
                  alanBtnInstance.playText(`Here are the latest news on ${category}`);
                }
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
      <Layout>
        <HomePage play={playVideo}>
          {loading ? (
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
          ) : news.length ? (
            <NewsCards articles={news} />
          ) : (
            <>
              {error ? errorComponent : null}

              <Instructions />
            </>
          )}
        </HomePage>
      </Layout>
    </>
  );
}

export default App;
