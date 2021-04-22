/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default (history = null) => {
  const baseURL = process.env.REACT_APP_BACKEND_URL;

  let headers = {};

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};
