import React, { useState, useEffect, createRef, useDebugValue } from "react";

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
  activeClass: {
    boxShadow: 15,
    transform: "perspective(200px)translateZ(12px)"
  }
});

const NewsCard = ({ article, id, active }) => {
  const classes = useStyles();

  const [elRef, setElRef] = useState([]);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRef((refs) =>
      Array(20)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, []);

  useEffect(() => {
    if (id === active && elRef[active]) {
      scrollToRef(elRef[active]);
    }
  }, [id, active, elRef]);

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
        ref={elRef[id]}
        className={active === id ? classes.activeClass : null}
        sx={{
          height: "100%",
          minHeight: 500,
          boxShadow: 4,
          position: "relative",
          transition: "0.5s",
          "&:hover": { boxShadow: 15 }
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main" }}>
              {article?.author?.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={article.author}
          subheader="Author"
        />
        <CardMedia
          component="img"
          height="200"
          image={
            article.urlToImage
              ? article.urlToImage
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mdGN5s8oseLHmPyP9HqXw6FdYF8Aa0-b6Q&usqp=CAU"
          }
          alt="News Image"
        />
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
