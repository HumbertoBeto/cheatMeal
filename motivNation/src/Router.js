import React from 'react';
import firebase from 'firebase';
import { GoogleSignin } from 'react-native-google-signin';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MyGoals from './components/MyGoals';
import MyNation from './components/MyNation';
import MyTools from './components/MyTools';
import Home from './components/Home';
import GoalCreate from './components/GoalCreate';
import ExerciseSearch from './components/ExerciseSearch';
import FoodSearch from './components/FoodSearch';
import HiitTimer from './components/HiitTimer';
import CalorieForm from './components/CalorieForm';


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
          //type='reset'
          initial
          />
        <Scene key="register" component={RegisterForm} title="Register Here" />
      </Scene>

      <Scene key="main">
        <Scene
        leftTitle="Log Out"
        onLeft={
         () => GoogleSignin.signOut()
         //() => firebase.auth().signOut()
        .then(() => Actions.auth({ type: 'reset' }))
        .catch((error) => { console.log(error); })
        }
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

        <Scene key="exercisesearch" component={ExerciseSearch} title="Exercise Database" />
        <Scene key="foodsearch" component={FoodSearch} title="Food Database" />
        <Scene key="hiittimer" component={HiitTimer} title="Hiit Timer" />
        <Scene key="calorieform" component={CalorieForm} title="Calorie Calculator" />
      </Scene>
      </Scene>

    </Router>
  );
};

export default RouterComponent;
