/* eslint-disable import/no-anonymous-default-export */
import {
  MOVIES_LOADING,
  MOVIES_LOAD_SUCCESS,
  MOVIE_LOAD_SUCCESS,
  MOVIES_LOAD_ERROR,
  MOVIES_SEARCH_SUCCESS,
  MOVIES_SEARCH_BUTTON_SUCCESS,
  CAROUSEL_MOVIES_LOAD_SUCCESS,
} from "../actionTypes";
import moviesInitialState from "../initialstates/moviesInitialState";

const movies = (state = moviesInitialState, { payload, type }) => {
  switch (type) {
    case MOVIES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case MOVIES_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
      };
    }
    case CAROUSEL_MOVIES_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        carouselMovies: [...state.carouselMovies, payload],
      };
    }
    case MOVIE_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        foundMovie: payload,
        carouselMovies: [],
      };
    }
    case MOVIES_SEARCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        foundMovies: state.foundMovies.concat(
          payload.Search.map((movie) => movie.imdbID)
        ),
      };
    }
    case MOVIES_SEARCH_BUTTON_SUCCESS: {
      return {
        ...state,
        loading: false,
        foundMovies: payload.Search.map((movie) => movie.imdbID),
        data: [],
        totalMovies: payload.totalResults,
      };
    }
    case MOVIES_LOAD_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
export default movies;
