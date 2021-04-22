import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
// import { Link, Route, Router, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "450px",
    borderRadius: "13px",
    height: "250px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    minWidth: "150px",
  },
  title: {
    fontFamily: "Oskari G2 Medium",
    fontWeight: 400,
    fontSize: 24,
    color: "#484E55",
  },
  heading: {
    fontFamily: "Oskari G2 Regular",
    fontWeight: 400,
    fontSize: 14,
    color: "#899EB0",
  },
  info: {
    fontFamily: "Oskari G2 Medium",
    fontWeight: 400,
    fontSize: 14,
    color: "#484E55",
  },
  more: {
    paddingRight: 10,
  },
}));

export default function MovieCard({
  Title,
  Director,
  Genre,
  imdbRating,
  Poster,
  imdbID,
}) {
  const classes = useStyles();

  return (
    <Card elevation={6} className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={Poster}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>{Title}</Typography>
          <Typography
            className={classes.heading}
            variant="subtitle1"
            color="textSecondary"
          >
            Directed by:
          </Typography>
          <Typography
            className={classes.info}
            variant="subtitle1"
            color="textSecondary"
          >
            {Director}
          </Typography>
          <Typography
            className={classes.heading}
            variant="subtitle1"
            color="textSecondary"
          >
            IMDB
          </Typography>
          <Typography
            className={classes.info}
            variant="subtitle1"
            color="textSecondary"
          >
            {imdbRating}/10
          </Typography>
          <Grid container spacing={6}>
            <Grid item lg={12}>
              <Typography
                className={classes.heading}
                variant="subtitle1"
                color="textSecondary"
              >
                Genre
              </Typography>
              <Typography
                // noWrap
                className={classes.info}
                variant="subtitle1"
                color="textSecondary"
              >
                {Genre && Genre.split(",").slice(0, 2)}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`/details/id=${imdbID}`}>more</Link>
              </Typography>
              {/* <Link to="/details">more</Link> */}
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
}
