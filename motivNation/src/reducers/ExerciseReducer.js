import { EXERCISE_SEARCH_BUTTON_PRESSED } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISE_SEARCH_BUTTON_PRESSED:
      return state;
    default:
      return state;
  }
};
