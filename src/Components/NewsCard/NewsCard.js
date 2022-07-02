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
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      boxShadow: 10
    }
  }
});

const NewsCard = ({ article, id }) => {
  const theme = useTheme();
  const classes = useStyles();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const dateFormater = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
    return <>{`${months[month]} ${day < 10 ? "0" + day : day}, ${year}`}</>;
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          minHeight: 500,
          boxShadow: 4,
          position: "relative",
          "&:hover": { boxShadow: 12 }
        }}
      >
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
              {dateFormater(article.publishedAt)}
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
