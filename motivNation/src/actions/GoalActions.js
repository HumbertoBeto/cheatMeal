import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { GOAL_UPDATE, GOAL_CREATE, GOAL_FETCH_SUCCESS } from './types';

export const goalUpdate = ({ prop, value }) => {
  return {
      type: GOAL_UPDATE,
      payload: { prop, value }
  };
};

export const goalCreate = ({ goal_name }) => {
  const { currentUser } = firebase.auth();
  console.log(currentUser);

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/goals`)
      .push({ goal_name })
      .then(() => {
        dispatch({ type: GOAL_CREATE });
        Actions.pop();
        firebase.database().ref(`/users/${currentUser.uid}/userData`).update({
          points: 40
        });
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
