import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles }) => {
  return (
    <>
      Hi
      {articles.map((article) => (
        <NewsCard />
      ))}
    </>
  );
};

export default NewsCards;
