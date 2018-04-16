//import { Actions } from 'react-native-router-flux';
//import { GOAL_UPDATE, GOAL_CREATE, GOAL_FETCH_SUCCESS } from './types';
import {
  EXERCISE_SEARCH_BUTTON_PRESSED
} from './types';

export const fetchExercise = () => {
  return (dispatch) =>
    fetch('https://wger.de/api/v2/exerciseimage/?is_main=True')
      .then(response => response.json())
      .then(json => console.log(json))
      .then(() => {
      dispatch({ type: EXERCISE_SEARCH_BUTTON_PRESSED });
    });
};

/*
return (dispatch) =>
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    .then(() => {
    dispatch({ type: EXERCISE_SEARCH_BUTTON_PRESSED });
  });
}; */
/*export const goalUpdate = ({ prop, value }) => {
  return {
      type: GOAL_UPDATE,
      payload: { prop, value }
  };
};

export const goalCreate = ({ goal_name }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/goals`)
      .push({ goal_name })
      .then(() => {
        dispatch({ type: GOAL_CREATE });
        Actions.pop();
      });
  };
};

export const goalFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/goals`)
      .on('value', snapshot => {
        dispatch({ type: GOAL_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
*/
