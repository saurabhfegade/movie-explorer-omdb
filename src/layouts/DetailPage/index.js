import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import HeroDetailPage from "../../components/HeroDetailPage";
import {
  getMoviesByID,
  getSingleMovieByID,
} from "../../context/actions/getMovies";
import store from "../../store";

const DetailPage = ({ foundMovies }) => {
  const { id } = useParams();
  const [ratings, setRatings] = useState([]);
  console.log(id);
  useEffect(() => {
    store.dispatch(getSingleMovieByID(id, "", "full"));
  }, []);
  // let ratings = [];
  // if (foundMovies) {
  // setRatings(foundMovies.Ratings.map((el) => el.Value));
  // }

  console.log(ratings);
  return (
    <>
      {/* <h1>Detail Page</h1> */}
      <HeroDetailPage
        Title={foundMovies.Title}
        Director={foundMovies.Director}
        Writer={foundMovies.Writer}
        Language={foundMovies.Language}
        Runtime={foundMovies.Runtime}
        Actors={foundMovies.Actors}
        Plot={foundMovies.Plot}
        Genre={foundMovies.Genre}
        Poster={foundMovies.Poster}
        Ratings={foundMovies.Ratings}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    foundMovies: state.movies.foundMovie,
  };
};

export default connect(mapStateToProps)(DetailPage);
