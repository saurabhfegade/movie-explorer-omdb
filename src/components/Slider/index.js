import React, { useState } from "react";

import "./index.css";
import { Container, Grid, Typography } from "@material-ui/core";
import avatar_poster from "../../assets/images/avatar_poster.jpg";
import inception_poster from "../../assets/images/inception_poster.jpg";
import into_the_wild_poster from "../../assets/images/into_the_wild_poster.jpg";

import { Link } from "react-router-dom";
import logo from "../../assets/images/buyceps_logo.png";
import { getCarouselMoviesByID } from "../../context/actions/getMovies";
import { connect } from "react-redux";
import store from "../../store";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

var moviesPoster = {
  Inception: inception_poster,
  Avatar: avatar_poster,
  "Into the Wild": into_the_wild_poster,
};

const Slider = ({ carouselMovies }) => {
  const itemsNew =
    carouselMovies &&
    carouselMovies.map((movie) => {
      return (
        <div className="keen-slider__slide">
          <div
            style={{
              backgroundImage: `url(${moviesPoster[movie.Title]})`,
            }}
            className="number-slide1"
          >
            <Container class="container-header" maxWidth="lg">
              <Grid container spacing={1}>
                <Grid item lg={12}>
                  <Typography display="inline" class="home-movie-title">
                    {movie.Title}
                  </Typography>
                  <Typography display="inline" class="home-movie-year">
                    ({movie.Year})
                  </Typography>
                  <Typography class="home-movie-directed">
                    Directed By: {movie.Director}
                  </Typography>
                </Grid>
                <Grid item lg={4}>
                  <Typography class="home-movie-rating">
                    <span>{movie.imdbRating}</span>/10
                  </Typography>
                  <Typography class="home-movie-imdb">IMDB</Typography>
                </Grid>
                <Grid item lg={4}>
                  <Typography class="home-movie-plot">{movie.Plot}</Typography>
                </Grid>
                <Grid item lg={6}>
                  <Typography class="home-movie-info">
                    {movie.Runtime} &nbsp;&nbsp;| &nbsp;&nbsp;{movie.Genre}
                    &nbsp;&nbsp; | &nbsp;&nbsp;{movie.Language}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      );
    });

  React.useEffect(() => {
    const movies_list = ["tt0499549", "tt1375666", "tt0758758"];
    movies_list.forEach((el) =>
      store.dispatch(getCarouselMoviesByID(el, "", "short"))
    );
    // movies_list.forEach((el) => getMovieRequest(el));
  }, []);

  console.log({ itemsNew });

  return (
    <>
      <div className="navigation-wrapper">
        <nav id="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </div>
          <div className="signUp1">
            <Link to="/">
              <button class="btnSignup transparent">Login</button>
            </Link>
          </div>
          <div className="signUp2">
            <Link to="/">
              <button class="btnSignup transparent">Sign Up</button>
            </Link>
          </div>
        </nav>

        <div className="slider">
          <AliceCarousel
            autoPlay
            infinite
            autoPlayInterval={5000}
            autoPlayStrategy="none"
            disableButtonsControls
            animationType="fadeout"
            items={itemsNew}
          />
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    carouselMovies: state.movies.carouselMovies,
  };
};

export default connect(mapStateToProps)(Slider);
