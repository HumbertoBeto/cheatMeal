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
        //firebase.database().ref(`/users/${currentUser.uid}/userData`).update({
        //  points: 40
      //  });
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

export const goalDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  let curPoints;
  firebase.database()
   .ref(`users/${currentUser.uid}/userData/`)
   .on('value', snapshot => {
     curPoints = snapshot.val().points + 10;
    });

    if (curPoints > 100) {
      curPoints = 100;
    }
    
  firebase.database().ref(`/users/${currentUser.uid}/userData`).update({
    points: curPoints
  });

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/goals/${uid}`)
    .remove()
    .then(() => {
      Actions.employeeList({ type: 'reset' });
    });
  };
};
