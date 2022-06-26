import React from "react";

import {
  Grid,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Avatar,
  Button
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NewsCard = ({ article, id }) => {
  const theme = useTheme();

  return (
    <>
      <Card sx={{ height: "100%", minHeight: 500, boxShadow: 4, position: "relative" }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "primary.main" }}>{article?.author?.charAt(0)}</Avatar>}
          title={article.author}
          subheader="Author"
        />
        <CardMedia component="img" height="200" image={article.urlToImage} alt="News Image" />
        <CardContent>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }}
          >
            <Typography gutterBottom variant="subtitle2" color="text.secondary">
              {article.source.name}
            </Typography>
            <Typography gutterBottom variant="subtitle2" color="text.secondary">
              September 26, 2022
            </Typography>
          </Box>
          <Typography variant="body1" fontWeight={600} gutterBottom>
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            noWrap
            sx={{ width: "100%" }}
            gutterBottom
            color="text.secondary"
          >
            {article.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            width: "100%",
            borderTop: "1px solid grey",
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 0
          }}
        >
          <Button onClick={() => window.open(article.url, "_blank")}>Learn More</Button>
          <Typography variant="subtitle1" sx={{ mr: 3 }} color="text.secondary">
            {id}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default NewsCard;
