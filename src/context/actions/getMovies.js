/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "../../helpers/axiosInstance";
import axios from "axios";
import { CONNECTION_ERROR } from "../../constants/api";
import {
  MOVIES_LOADING,
  MOVIES_LOAD_SUCCESS,
  MOVIE_LOAD_SUCCESS,
  MOVIES_SEARCH_SUCCESS,
  MOVIES_SEARCH_BUTTON_SUCCESS,
  MOVIES_LOAD_ERROR,
  CAROUSEL_MOVIES_LOAD_SUCCESS,
} from "../actionTypes";

const apikey = process.env.REACT_APP_API_KEY;
const baseURL = process.env.REACT_APP_BACKEND_URL;

// GET MOVIES BY TITLE
export const getMoviesByTitle = (title, year, plot) => (dispatch) => {
  dispatch({
    type: MOVIES_LOADING,
  });
  axios
    .get(`${baseURL}/?apikey=${apikey}&t=${title}&y=${year}&plot=${plot}`)
    .then((res) => {
      dispatch({
        type: MOVIES_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MOVIES_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};

// GET MOVIES BY ID
export const getMoviesByID = (ID, year, plot) => (dispatch) => {
  dispatch({
    type: MOVIES_LOADING,
  });
  axios
    .get(`${baseURL}/?apikey=${apikey}&i=${ID}&y=${year}&plot=${plot}`)
    .then((res) => {
      dispatch({
        type: MOVIES_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MOVIES_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};

// GET CAROUSEL MOVIES BY ID
export const getCarouselMoviesByID = (ID, year, plot) => (dispatch) => {
  dispatch({
    type: MOVIES_LOADING,
  });
  axios
    .get(`${baseURL}/?apikey=${apikey}&i=${ID}&y=${year}&plot=${plot}`)
    .then((res) => {
      dispatch({
        type: CAROUSEL_MOVIES_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MOVIES_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};

// GET MOVIES BY ID
export const getSingleMovieByID = (ID, year, plot) => (dispatch) => {
  dispatch({
    type: MOVIES_LOADING,
  });
  axios
    .get(`${baseURL}/?apikey=${apikey}&i=${ID}&y=${year}&plot=${plot}`)
    .then((res) => {
      dispatch({
        type: MOVIE_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MOVIES_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};

// GET MOVIES BY SEARCH
export const getMoviesBySearch = (title, year, page) => (dispatch) => {
  dispatch({
    type: MOVIES_LOADING,
  });
  axios
    .get(`${baseURL}/?apikey=${apikey}&s=${title}&y=${year}&page=${page}`)
    .then((res) => {
      dispatch({
        type: MOVIES_SEARCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MOVIES_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};

// GET MOVIES BY SEARCH BUTTON
export const getMoviesBySearchButton = (title, year, page) => (dispatch) => {
  dispatch({
    type: MOVIES_LOADING,
  });
  axios
    .get(`${baseURL}/?apikey=${apikey}&s=${title}&y=${year}&page=${page}`)
    .then((res) => {
      dispatch({
        type: MOVIES_SEARCH_BUTTON_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MOVIES_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
// export default getMovies;
