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
        // movies: {
        //   ...state.movies,
        loading: true,
        // },
      };
    }
    case MOVIES_LOAD_SUCCESS: {
      return {
        ...state,
        // movies: {
        //   ...state.movies,
        loading: false,
        data: [...state.data, payload],
        // data: state.data.concat(payload),
        // foundMovies: [],
        // },
      };
    }
    case CAROUSEL_MOVIES_LOAD_SUCCESS: {
      return {
        ...state,
        // movies: {
        //   ...state.movies,
        loading: false,
        carouselMovies: [...state.carouselMovies, payload],
        // data: state.data.concat(payload),
        // foundMovies: [],
        // },
      };
    }
    case MOVIE_LOAD_SUCCESS: {
      return {
        ...state,
        // movies: {
        //   ...state.movies,
        loading: false,
        // data: [...state.data, payload],
        foundMovie: payload,
        carouselMovies: [],
        // },
      };
    }
    case MOVIES_SEARCH_SUCCESS: {
      return {
        ...state,
        // movies: {
        //   ...state.movies,
        loading: false,
        // data: [...state.data, payload],
        foundMovies: state.foundMovies.concat(
          payload.Search.map((movie) => movie.imdbID)
        ),
        // data: [],
        // totalMovies: payload.totalResults,
        // },
      };
    }
    case MOVIES_SEARCH_BUTTON_SUCCESS: {
      return {
        ...state,
        // movies: {
        //   ...state.movies,
        loading: false,
        // data: [...state.data, payload],
        foundMovies: payload.Search.map((movie) => movie.imdbID),
        data: [],
        totalMovies: payload.totalResults,
        // },
      };
    }
    case MOVIES_LOAD_ERROR: {
      return {
        ...state,
        // movies: {
        //   ...state.movies,
        loading: false,
        error: payload,
        // },
      };
    }
    default:
      return state;
  }
};
export default movies;
