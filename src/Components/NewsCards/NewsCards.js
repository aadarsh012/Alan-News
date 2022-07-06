import React from "react";
import NewsCard from "../NewsCard/NewsCard";

import { Grid, Grow } from "@mui/material";

const NewsCards = ({ articles, active }) => {
  return (
    <>
      <Grid container spacing={3} sx={{ py: 4, px: 8 }}>
        {articles.map((article, id) => (
          <Grow in timeout={500 * id}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
              <NewsCard active={active} article={article} id={id + 1} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </>
  );
};

export default NewsCards;
