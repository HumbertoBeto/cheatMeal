import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
   apiKey: 'AIzaSyDc9p4_a0decVkGCXCFiJIDUZCT2ih3njE',
   authDomain: 'motivnation-38d53.firebaseapp.com',
   databaseURL: 'https://motivnation-38d53.firebaseio.com',
   projectId: 'motivnation-38d53',
   storageBucket: 'motivnation-38d53.appspot.com',
   messagingSenderId: '730448542188'
 };

 firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
