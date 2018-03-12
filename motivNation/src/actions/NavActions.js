import { Actions } from 'react-native-router-flux';
import {
  EXERCISE_DATA_PRESSED,
  FOOD_DATA_PRESSED,
  HIIT_TIMER_PRESSED,
  CALORIE_CALC_PRESSED
} from './types';

export const exerciseDataPressed = () => {
  Actions.main();
  Actions.exercisesearch();
  return {
    type: EXERCISE_DATA_PRESSED,
  };
};

export const foodDataPressed = () => {
  Actions.main();
  Actions.foodsearch();
  return {
    type: FOOD_DATA_PRESSED,
  };
};

export const hiitTimerPressed = () => {
  Actions.main();
  Actions.hiittimer();
  return {
    type: HIIT_TIMER_PRESSED,
  };
};

export const calorieCalcPressed = () => {
  Actions.main();
  Actions.calorieform();
  return {
    type: CALORIE_CALC_PRESSED,
  };
};
