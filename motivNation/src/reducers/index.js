import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import GoalFormReducer from './GoalFormReducer';

export default combineReducers({
  auth: AuthReducer,
  goalForm: GoalFormReducer
});
