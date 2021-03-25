import { getmovies , getsearchMovie , getsearchTvShows , getdetail, getTrendingMovies, getshowDetail} from "../api/movies-api";
export const SET_TOKEN = "SET_TOKEN";
export const GET_EDIT_PROFILE_INIT = "GET_EDIT_PROFILE_INIT";
export const GET_EDIT_PROFILE_SUCCESS = "GET_EDIT_PROFILE_SUCCESS";
export const GET_EDIT_PROFILE_FAILED = "GET_EDIT_PROFILE_FAILED";
export const SET_TOKEN_SUCESS = "SET_TOKEN_SUCESS";
export const SET_TV_SHOWS = "SET_TV_SHOWS";
export const SET_TV_SHOWS_SUCESS = "SET_TV_SHOWS_SUCESS";
export const SET_DETAIL = "SET_DETAIL";
export const SET_DETAIL_SUCESS = "SET_DETAIL_SUCESS";
export const SET_TRENDING_MOVIES = "SET_TRENDING_MOVIES";
export const SET_TRENDING_MOVIES_SUCESS = "SET_TRENDING_MOVIES_SUCESS";

export function getUpcomingMoview(page, movieList) {
  return function (dispatch) {
    dispatch({ type: GET_EDIT_PROFILE_INIT });
    getmovies(page)
      .then((response) => {
        dispatch({ type: SET_TOKEN, data: response });
        return dispatch({ type: SET_TOKEN_SUCESS, data: response });
      })

      .catch((error) => 
        dispatch({ type: GET_EDIT_PROFILE_FAILED, error })
      );
  };
};

export function getTrendingMovieList() {
  return function (dispatch) {
    dispatch({ type: GET_EDIT_PROFILE_INIT });
    getTrendingMovies()
      .then((response) => {
        dispatch({ type: SET_TRENDING_MOVIES, data: response });
        return dispatch({ type: SET_TRENDING_MOVIES_SUCESS, data: response });
      })

      .catch((error) => 
        dispatch({ type: GET_EDIT_PROFILE_FAILED, error })
      );
  };
};

export function getTvshowsDetail(id) {
  return function (dispatch) {
    dispatch({ type: GET_EDIT_PROFILE_INIT });
    getshowDetail(id)
      .then((response) => {
        dispatch({ type: SET_DETAIL, data: response });
        return dispatch({ type: SET_DETAIL_SUCESS, data: response });
      })

      .catch((error) => 
        dispatch({ type: GET_EDIT_PROFILE_FAILED, error })
      );
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    dispatch({ type: GET_EDIT_PROFILE_INIT });
    getdetail(id)
      .then((response) => {
        dispatch({ type: SET_DETAIL, data: response });
        return dispatch({ type: SET_DETAIL_SUCESS, data: response });
      })

      .catch((error) => 
        dispatch({ type: GET_EDIT_PROFILE_FAILED, error })
      );
  };
};

export function searchForMovie(query) {
  return function (dispatch) {
    dispatch({ type: GET_EDIT_PROFILE_INIT });
    getsearchMovie(query)
      .then((response) => {
        dispatch({ type: SET_TOKEN, data: response });
        return dispatch({ type: SET_TOKEN_SUCESS, data: response });
      })

      .catch((error) => 
        dispatch({ type: GET_EDIT_PROFILE_FAILED, error })
      );
  };
};

export function searchForTvShows(query) {
  return function (dispatch) {
    dispatch({ type: GET_EDIT_PROFILE_INIT });
    getsearchTvShows(query)
      .then((response) => {
        dispatch({ type: SET_TV_SHOWS, data: response });
        return dispatch({ type: SET_TV_SHOWS_SUCESS, data: response });
      })

      .catch((error) => 
        dispatch({ type: GET_EDIT_PROFILE_FAILED, error })
      );
  };
}