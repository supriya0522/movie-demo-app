import {
    GET_EDIT_PROFILE_INIT,
    SET_TOKEN,
    SET_TOKEN_SUCESS,
    SET_TV_SHOWS,
    SET_TV_SHOWS_SUCESS,
    SET_DETAIL,
    SET_DETAIL_SUCESS,
    SET_TRENDING_MOVIES,
    SET_TRENDING_MOVIES_SUCESS,
  } from "../actions/index";

export const initialState = {
  movieList: [],
  tvShows: [],
  movieDetail: {},
  trendingMovies: [],
};
export default function moviesReducer(state = initialState, action) {
  const handlers = {
    [GET_EDIT_PROFILE_INIT]: (state) => ({
      ...state,
    }),
    [SET_TOKEN]: (state) => (
      {
      ...state,
      movieList: action.data,
    }),
    [SET_TOKEN_SUCESS]: (state) => (
      {
      ...state,
      movieList: action.data,
    }),
    [SET_TV_SHOWS]: (state) => (
      {
      ...state,
      tvShows: action.data,
    }),
    [SET_TV_SHOWS_SUCESS]: (state) => (
      {
      ...state,
      tvShows: action.data,
    }),
    [SET_DETAIL]: (state) => (
      {
      ...state,
      movieDetail: action.data,
    }),
    [SET_DETAIL_SUCESS]: (state) => (
      {
      ...state,
      movieDetail: action.data,
    }),
    [SET_TRENDING_MOVIES]: (state) => (
      {
      ...state,
      trendingMovies: action.data,
    }),
    [SET_TRENDING_MOVIES_SUCESS]: (state) => (
      {
      ...state,
      trendingMovies: action.data,
    }),
  };
  const handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
}
