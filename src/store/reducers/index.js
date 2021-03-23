import {
    GET_EDIT_PROFILE_INIT,
    GET_EDIT_PROFILE_SUCCESS,
    GET_EDIT_PROFILE_FAILED,
  } from "../actions/index";

export const initialState = {
  editProfileList: [],
};
export default function moviesReducer(state = initialState, action) {
  const handlers = {
    [GET_EDIT_PROFILE_INIT]: (state) => ({
      ...state,
    }),
    [GET_EDIT_PROFILE_SUCCESS]: (state, action) => ({
      ...state,
      editProfileList: action.response,
    }),
    [GET_EDIT_PROFILE_FAILED]: (state) => ({
      ...state,
      editProfileList: [],
    }),
  };
  const handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
}
