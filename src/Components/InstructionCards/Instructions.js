import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

const CustomColor = withStyles({
  root: {
    background: "-webkit-linear-gradient(45deg, #52006a 30%, #cd113b 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography);

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    height: "80vh",
    width: "60%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "-1"
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(4px)",
    // "-webkit-backdrop-filter": "blur( 4px )",
    border: "1px solid rgba(255, 255, 255, 0.18)"
  }
}));

const Instructions = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} sx={{ py: 8, px: 5 }}>
      <Grid item xs={4}>
        <Paper
          fullWidth
          sx={{
            p: 2,
            height: "100%",
            background: "rgba(255, 55, 244,0.25)",
            backdropFilter: "blur(3px)",

            borderRadius: 2,
            border: "1px solid rgba(255, 255, 255, 0.18)"
          }}
          elevation={12}
        >
          <CustomColor
            variant="h5"
            fontWeight={600}
            sx={{ width: "100%", textAlign: "center", mb: 3 }}
          >
            Get News from Different Sources.
          </CustomColor>
          <Typography variant="body1" lineHeight={2} sx={{ mb: 5 }}>
            Read the latest news from different sources like{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              BuzzFeed
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              BBC News
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Fox News
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              CNN
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Tech Crunch
            </Typography>{" "}
            and many more...
          </Typography>
          <Typography variant="body1">
            Try Speaking : Give me the news from{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              BuzzFeed
            </Typography>
            .
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          fullWidth
          sx={{
            p: 2,
            height: "100%",
            background: "rgba( 0, 255, 239,  0.3)",
            backdropFilter: "blur(7px)",

            borderRadius: 2,
            border: "1px solid rgba(255, 255, 255, 0.18)"
          }}
          elevation={12}
        >
          <CustomColor
            variant="h5"
            fontWeight={600}
            sx={{ width: "100%", textAlign: "center", mb: 3 }}
          >
            Get News on Any Topic.
          </CustomColor>
          <Typography variant="body1" lineHeight={2} sx={{ mb: 5 }}>
            Read the latest news on any topic like{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Tesla
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Bitcoin
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Virus
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Share Market
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Crypto
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Movies
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Stocks
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Corona Virus
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Weather
            </Typography>{" "}
            and many more...
          </Typography>
          <Typography variant="body1">
            Try Speaking : What are the news on{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Bitcoin
            </Typography>
            .
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          fullWidth
          sx={{
            p: 2,
            height: "100%",
            background: "rgba(248, 231, 28,  0.25)",
            backdropFilter: "blur(5px)",

            borderRadius: 2,
            border: "1px solid rgba(255, 255, 255, 0.18)"
          }}
          elevation={12}
        >
          <CustomColor
            variant="h5"
            fontWeight={600}
            sx={{ width: "100%", textAlign: "center", mb: 3 }}
          >
            Get News from Different Categories.
          </CustomColor>
          <Typography variant="body1" lineHeight={2} sx={{ mb: 5 }}>
            Read the latest news on different categories like{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Sports
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Technology
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Business
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Science
            </Typography>
            ,{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Entertainment
            </Typography>{" "}
            and many more...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Try Speaking : What are the latest news on{" "}
            <Typography component="span" variant="body1" fontWeight={600}>
              Technology
            </Typography>
            .
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Instructions;
