import React from "react";
import NewsCard from "../NewsCard/NewsCard";

import { Grid } from "@mui/material";

const NewsCards = ({ articles }) => {
  return (
    <>
      <Grid container spacing={3} sx={{ py: 4, px: 8 }}>
        {articles.map((article, id) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <NewsCard article={article} id={id + 1} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default NewsCards;
