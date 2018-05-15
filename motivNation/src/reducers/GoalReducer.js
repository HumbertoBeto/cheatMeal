import { GOAL_FETCH_SUCCESS, POST_FETCH_SUCCESS, POST_CREATE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOAL_FETCH_SUCCESS:
      return action.payload;
    case POST_FETCH_SUCCESS:
      return action.payload;
    case POST_CREATE:
      return { ...state };
    default:
      return state;
  }
};
