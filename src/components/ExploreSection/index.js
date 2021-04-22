import {
  Button,
  CircularProgress,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import "./index.css";
import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import MovieCard from "../MovieCard";
import {
  getMoviesByID,
  getMoviesBySearch,
  getMoviesBySearchButton,
} from "../../context/actions/getMovies";
import store from "../../store";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F3F7FB",
    "&:hover": {
      backgroundColor: fade("#F3F7FB", 0.75),
    },
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    // marginBottom: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "100%",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  buttonSearch: {
    backgroundColor: "#FFBF49",
    color: "white",
    textTransform: "capitalize",
    width: "180px",
    marginLeft: "5px",
    fontFamily: "Oskari G2 Medium",
    fontWeight: "400",
    fontSize: "18px",
  },
}));

const ExploreSection = ({ movies, foundMovies, totalMovies }) => {
  const classes = useStyles();

  // const [state, setState] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [id, setID] = useState("");
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setHasNextPage(true);
    setPage((page) => 1);
    // console.log("Title:", title, "Year:", year, "ID:", id);
    store.dispatch(getMoviesBySearchButton(title, year, 1));
  }

  const getData = () => {
    store.dispatch(getMoviesBySearch(title, year, page));
    // foundMovies.forEach((el) => store.dispatch(getMoviesByID(el, "", "short")));
  };

  const loadMoreData = () => {
    if (foundMovies && foundMovies.length < totalMovies) {
      getData();
    }
  };

  useEffect(() => {
    let remCount = foundMovies.length % 10;
    if (remCount % 10 === 0) {
      foundMovies
        .slice(-10)
        .forEach((el) => store.dispatch(getMoviesByID(el, "", "short")));
    } else {
      foundMovies
        .slice(-remCount)
        .forEach((el) => store.dispatch(getMoviesByID(el, "", "short")));
    }
  }, [foundMovies]);

  useEffect(() => {
    setPage((page) => page + 1);
    if (foundMovies && foundMovies.length >= totalMovies) {
      setHasNextPage(false);
    }
  }, [foundMovies]);

  return (
    <>
      <Container maxWidth="xl">
        <Typography class="explore-text" variant="h4" align="center">
          Explore more movies
        </Typography>
        <Container maxWidth="md">
          <Paper style={{ borderRadius: "13px" }} elevation={6}>
            <form onSubmit={handleSubmit}>
              <Grid
                container
                alignItems="center"
                direction="row"
                spacing={2}
                justify="space-around"
              >
                <Grid item lg={3}>
                  <div className={classes.search}>
                    <InputBase
                      value={title}
                      onInput={(e) => setTitle(e.target.value)}
                      placeholder="Search Title"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Grid>
                <Grid item lg={3}>
                  {" "}
                  <div className={classes.search}>
                    <InputBase
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="Year"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Grid>
                <Grid item lg={3}>
                  {" "}
                  <div className={classes.search}>
                    <InputBase
                      value={id}
                      onChange={(e) => setID(e.target.value)}
                      placeholder="ID"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Grid>
                <Grid item lg={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.buttonSearch}
                    // fullWidth
                    disableElevation
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>

        <Container maxWidth="lg">
          <Grid
            style={{ marginTop: 20 }}
            container
            direction="row"
            justify="space-around"
            spacing={4}
          >
            {movies && movies.length ? (
              movies.map(
                (movie) =>
                  movie && (
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
                  )
              )
            ) : (
              <div>
                <p>Couldn't find a movie</p>
              </div>
            )}
          </Grid>
        </Container>

        {hasNextPage ? (
          <Waypoint onEnter={loadMoreData}>
            <div class="loadingOuter">
              <div class="loadingInner">
                <CircularProgress />
              </div>
            </div>
          </Waypoint>
        ) : (
          <h4 style={{ textAlign: "center" }}>You've seen it all!</h4>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    foundMovies: state.movies.foundMovies,
    movies: state.movies.data,
    totalMovies: state.movies.totalMovies,
  };
};

export default connect(mapStateToProps)(ExploreSection);
