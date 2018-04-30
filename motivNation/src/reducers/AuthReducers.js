import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER,
  FETCH_USER_POINTS_SUCCESS,
  REWARD_SHOW,
  REWARD_DONT_SHOW
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  data: null,
  points: 0,
  rewardHidden: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case CREATE_USER:
        return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case FETCH_USER_POINTS_SUCCESS:
        return { ...state, points: action.payload };
    case REWARD_SHOW:
            return { ...state, rewardHidden: false };
    case REWARD_DONT_SHOW:
            return { ...state, rewardHidden: true };
    default:
      return state;
  }
};
