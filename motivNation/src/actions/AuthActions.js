import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER,
  MY_GOALS_PRESSED,
  MY_TOOLS_PRESSED,
  MY_NATION_PRESSED
} from './types';

export const myGoalsPressed = () => {
  Actions.main();
  Actions.mygoals();
  return {
    type: MY_GOALS_PRESSED,
  };
};

export const myToolsPressed = () => {
  Actions.main();
  Actions.mytools();
  return {
    type: MY_TOOLS_PRESSED,
  };
};

export const myNationPressed = () => {
  Actions.main();
  Actions.mynation();
  return {
    type: MY_NATION_PRESSED,
  };
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

//login existing user
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
      //.catch((error) => { console.log(error); });
        //console.log(error);

        /*firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch)); */
  };
};

export const loginGoogleUser = ({ data }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    const credential =
    firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    // Login with the credential
    //Actions.main();
    firebase.auth().signInWithCredential(credential)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
      //.catch((error) => { console.log(error); });
        //console.log(error);

        /*firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch)); */
  };
};

//for register view create a user
export const createUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
      //.catch((error) => {
        //console.log(error);

        /*firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch)); */
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
