import "./App.css";
import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";
import wordsToNumbers from "words-to-numbers";

import { CircularProgress, Typography } from "@mui/material";

import Type from "./Components/TypedJS/Type";

import NewsCards from "./Components/NewsCards/NewsCards";
import HomePage from "./Components/HomePage/HomePage";
import Instructions from "./Components/InstructionCards/Instructions";
import Layout from "./Components/Layout/Layout";

function App() {
  const alanApiKey = process.env.REACT_APP_ALAN_API_KEY;

  const [news, setNews] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const errorComponent = (
    <Typography variant="h6" sx={{ width: "100%", textAlign: "center", p: 2, color: "error.main" }}>
      Please try to speak something else.
    </Typography>
  );

  useEffect(() => {
    const alanBtnInstance = alanBtn({
      key: alanApiKey,
      onButtonState: (status) => {
        if (["LISTEN", "PROCESS", "REPLY"].includes(status)) {
          setPlayVideo(true);
        } else {
          setPlayVideo(false);
        }
      },
      onCommand: ({ command, url, source, term, category, number, articles }) => {
        if (command === "newHeadlines") {
          setLoading(true);
          const urlWithKey = `${url}&apiKey=${process.env.REACT_APP_NEWS_API}`;
          axios
            .get(urlWithKey)
            .then((response) => {
              if (response.data.articles.length === 0) {
                setLoading(false);
                setError(true);
                throw new Error("Sorry, please speak something valid.");
              } else {
                setNews(response.data.articles);
                setActiveArticle(0);
                setLoading(false);
                setError(false);
                if (source) {
                  alanBtnInstance.playText(`Here are the latest news from ${source}`);
                } else if (term) {
                  alanBtnInstance.playText(`Here are the latest news on ${term}`);
                } else if (category) {
                  alanBtnInstance.playText(`Here are the latest news on ${category}`);
                }
                alanBtnInstance.callProjectApi(
                  "read",
                  { data: response.data.articles },
                  function (error, result) {}
                );
              }
            })
            .catch((err) => {
              console.log(err.message);
              setError(true);
              setLoading(false);
              alanBtnInstance.playText(err.message.toString());
            });
        } else if (command === "read-headline") {
          setActiveArticle((prevState) => prevState + 1);
        } else if (command === "open") {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
          window.open(articles[Number(parsedNumber) - 1].url, "_blank");
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
            <NewsCards articles={news} active={activeArticle} />
          ) : (
            <>
              {error ? errorComponent : null}
              <Type />
              <Instructions />
            </>
          )}
        </HomePage>
      </Layout>
    </>
  );
}

export default App;
