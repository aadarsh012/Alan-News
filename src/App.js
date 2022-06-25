import "./App.css";
import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanApiKey = "3f4a6bc5a5076c4ca7347dbe45bb3d392e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [news, setNews] = useState();

  useEffect(() => {
    alanBtn({
      key: alanApiKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNews(articles);
        }
      }
    });
  }, []);

  return <div></div>;
}

export default App;
