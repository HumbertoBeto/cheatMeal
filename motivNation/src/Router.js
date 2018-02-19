import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    // login scene
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene
          rightTitle="Register?"
          onRight={() => Actions.register()}
          key="login"
          component={LoginForm}
          title="Login"
          initial
          />
        <Scene key="register" component={RegisterForm} title="Register Here" />
      </Scene>

      <Scene key="main">
        <Scene
        key="home"
        component={Home}
        title="Home"
        />
      </Scene>
      </Scene>

    </Router>
  );
}

export default RouterComponent;
