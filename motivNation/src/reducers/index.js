import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import GoalFormReducer from './GoalFormReducer';
import GoalReducer from './GoalReducer';
import ExerciseReducer from './ExerciseReducer';

export default combineReducers({
  auth: AuthReducer,
  goalForm: GoalFormReducer,
  goals: GoalReducer,
  exercise: ExerciseReducer
});

console.disableYellowBox = true;
