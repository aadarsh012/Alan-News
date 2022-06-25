import "./App.css";
import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

import NewsCards from "./Components/NewsCards/NewsCards";

function App() {
  const alanApiKey = "3f4a6bc5a5076c4ca7347dbe45bb3d392e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [news, setNews] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanApiKey,
      onCommand: ({ command, url }) => {
        if (command === "newHeadlines") {
          console.log(url);
          axios.get(url).then((response) => {
            console.log(response.data);
            setNews(response.data.articles);
          });
        } else if (command === "test-command") {
          alert("It works here.");
        }
      }
    });
  }, []);

  return (
    <>
      <NewsCards articles={news} />
    </>
  );
}

export default App;
