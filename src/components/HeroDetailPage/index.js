import React from "react";
import "./style.css";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import MovieCard from "../MovieCard";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link, useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  movieCard: {
    borderRadius: 13,
  },
}));

// const randomArr = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]

const HeroDetailPage = ({
  movies,
  Title,
  Director,
  Ratings,
  Language,
  Genre,
  Runtime,
  Plot,
  Writer,
  Actors,
  Poster,
}) => {
  const randomNumber = Math.floor(Math.random() * 7);
  return (
    <>
      {/* <h1>Hero</h1> */}
      <div class="movie-card">
        <div class="close-btn">
          <Link to="/">
            <CancelIcon fontSize="large" style={{ color: "gray" }} />
          </Link>
        </div>
        <div class="container">
          <Card
            elevation={6}
            style={{
              borderRadius: 13,
              position: "absolute",
              top: 200,
              left: 115,
              zIndex: 100,
            }}
          >
            <CardMedia
              class="cover"
              // className={classes.cover}
              image={Poster}
              title="Live from space album cover"
            />
          </Card>

          <div class="hero">
            <div class="details">
              <Container maxWidth="xl">
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    <Typography class="movie-title">{Title}</Typography>
                    <Typography class="movie-directed">
                      Directed By: {Director}
                    </Typography>
                    <Typography class="movie-info">
                      {Runtime} | {Genre} | {Language}
                    </Typography>
                  </Grid>
                  <Grid item lg={6}>
                    <div class="ratings-box">
                      <Paper
                        variant="outlined"
                        // color="transparent"
                        square
                        className="ratings"
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "#6A7A8A",
                          borderWidth: 2,
                        }}
                      >
                        <Typography className="movie-rating">
                          <span>
                            {Ratings &&
                              Ratings.map((el) => el.Value)[0].split("/")[0]}
                          </span>
                          /10
                        </Typography>
                        <Typography className="movie-imdb">IMDB</Typography>
                      </Paper>
                      <Paper
                        variant="outlined"
                        square
                        className="ratings"
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "#6A7A8A",
                          borderWidth: 2,
                        }}
                      >
                        <Typography className="movie-rating">
                          <span>
                            {Ratings &&
                              (Ratings.map((el) => el.Value)[1]
                                ? Ratings.map((el) => el.Value)[1]
                                : "N/A")}
                          </span>
                        </Typography>
                        <Typography className="movie-imdb">
                          Rotten Tomatoes
                        </Typography>
                      </Paper>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>

          <div class="description">
            <Container maxWidth="xl">
              <Grid container>
                <Grid class="column1" item lg={2}>
                  <Typography class="heading" variant="h4" align="center">
                    Plot:
                  </Typography>
                </Grid>
                <Grid class="column2" item lg={6}>
                  <Typography class="text" variant="title1">
                    {Plot}
                  </Typography>
                </Grid>
              </Grid>
            </Container>

            <Box style={{ overflow: "auto" }}>
              <Container class="description2" maxWidth="xl">
                <Grid container>
                  <Grid class="column11" item lg={2}>
                    <Typography class="heading" variant="h4" align="center">
                      Crew:
                    </Typography>
                  </Grid>
                  <Grid class="column22" item lg={6}>
                    <Grid container spacing={5}>
                      <Grid item lg={4}>
                        <Typography class="detail-heading" variant="title1">
                          Directed By<br></br>
                        </Typography>
                        <Typography class="detail-info" variant="title1">
                          {Director}
                        </Typography>
                      </Grid>
                      <Grid item lg={4}>
                        <Typography class="detail-heading" variant="title1">
                          Writer<br></br>
                        </Typography>
                        <Typography class="detail-info" variant="title1">
                          {Writer}
                        </Typography>
                      </Grid>
                      <Grid item lg={4}>
                        <Typography class="detail-heading" variant="title1">
                          Actor<br></br>
                        </Typography>
                        <Typography class="detail-info" variant="title1">
                          {Actors && Actors.split(",").slice(0, 1)}
                        </Typography>
                      </Grid>
                      <Grid item lg={4}>
                        <Typography class="detail-heading" variant="title1">
                          Actor<br></br>
                        </Typography>
                        <Typography class="detail-info" variant="title1">
                          {Actors && Actors.split(",").slice(1, 2)}
                        </Typography>
                      </Grid>
                      <Grid item lg={4}>
                        <Typography class="detail-heading" variant="title1">
                          Actor<br></br>
                        </Typography>
                        <Typography class="detail-info" variant="title1">
                          {Actors && Actors.split(",").slice(2, 3)}
                        </Typography>
                      </Grid>
                      <Grid item lg={4}>
                        <Typography class="detail-heading" variant="title1">
                          Actor<br></br>
                        </Typography>
                        <Typography class="detail-info" variant="title1">
                          {Actors && Actors.split(",").slice(3, 4)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Box>

            <Container class="container-explore" maxWidth="lg">
              <Typography class="heading" variant="h4">
                Explore more movies
              </Typography>
              <Grid container justify="center" spacing={0} direction="row">
                {movies.length ? (
                  movies.slice(randomNumber, randomNumber + 3).map((movie) => (
                    <Grid item lg={4}>
                      <MovieCard
                        Poster={movie.Poster}
                        Title={movie.Title}
                        Director={movie.Director}
                        Genre={movie.Genre}
                        imdbRating={movie.imdbRating}
                        imdbID={movie.imdbID}
                      />
                    </Grid>
                  ))
                ) : (
                  <p>Couldn't find a movie</p>
                )}
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    foundMovies: state.movies.foundMovies,
    movies: state.movies.data,
  };
};
export default connect(mapStateToProps)(HeroDetailPage);
