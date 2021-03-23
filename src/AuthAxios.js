import Cookies from "js-cookie";
const axios = require("axios");

const AuthAxios = axios.create();

AuthAxios.interceptors.request.use(
  async (config) => {
    const value = Cookies.get("access_token");
    config.headers = {
      Authorization: `Bearer ${value}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default AuthAxios;