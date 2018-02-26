import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MyGoals from './components/MyGoals';
import MyNation from './components/MyNation';
import MyTools from './components/MyTools';
import Home from './components/Home';
import GoalCreate from './components/GoalCreate';

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
        title="MotivNation"
        />
        <Scene
          onRight={() => Actions.goalCreate()}
          rightTitle="Create Goal"
          key="mygoals"
          component={MyGoals}
          title="My Goals"
        />
        <Scene key="goalCreate" component={GoalCreate} title="Create Goal" />
        <Scene key="mytools" component={MyTools} title="My Tools" />
        <Scene key="mynation" component={MyNation} title="My Nation" />
      </Scene>
      </Scene>

    </Router>
  );
};

export default RouterComponent;
