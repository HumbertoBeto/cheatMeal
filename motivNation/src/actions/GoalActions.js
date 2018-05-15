import firebase from 'firebase';
import { GoogleSignin } from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';
import { GOAL_UPDATE, GOAL_CREATE, GOAL_FETCH_SUCCESS, POST_FETCH_SUCCESS, POST_CREATE } from './types';

export const goalUpdate = ({ prop, value }) => {
  return {
      type: GOAL_UPDATE,
      payload: { prop, value }
  };
};

export const goalCreate = ({ goal_name }) => {
  const { currentUser } = firebase.auth();
  //const myName = { goal_name };
  console.log(currentUser);
  const user = GoogleSignin.currentUser();
  console.log(currentUser.uid);


  firebase.database().ref(`/users/YCXh6HR4XuWmpl9xuuDbASZ2VQk1/postsCreated`).push(
    {
    likes: 0,
    name: { goal_name },
    heading: 'Created Goal: ',
    userName: user.name,
    userPic: user.photo
    }
  );

  firebase.database().ref(`/users/pBEYmfYUQxVm7aaGC9Ps67wYV8r2/postsCreated`).push(
    {
    likes: 0,
    name: { goal_name },
    heading: 'Created Goal: ',
    userName: user.name,
    userPic: user.photo
    }
  );

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

export const postFetch = () => {
    const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/postsCreated`)
      .on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({ type: POST_FETCH_SUCCESS, payload: snapshot.val() });
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
