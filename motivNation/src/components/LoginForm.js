import React, { Component } from 'react';
import firebase from 'firebase';
import { ImageBackground, Image } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { Container,
        Content,
        Form, Item,
        Input,
        Label,
        Button,
        Icon,
        Text,
        View,
        Spinner
      } from 'native-base';
import { emailChanged, passwordChanged, loginUser, loginGoogleUser } from '../actions';
//import { Spinner } from './common';

class LoginForm extends Component {
  componentWillMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true });
    GoogleSignin.configure({
      iosClientId: '730448542188-fbhpaa3o9no2bs63nvkhv6ah34sq22qf.apps.googleusercontent.com',
      webClientId: '730448542188-egj90flmn31nutil2ug2qm0r4g8vtc83.apps.googleusercontent.com'
    });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    //const { email, password } = this.props;

    this.props.loginUser();
  }

  turnOnSpinner() {
    if (this.props.loading) {
      return <Spinner />;
    }
  }

  handleSignInGoogle() {
    //this.props.loginUser();
    GoogleSignin.signIn()
      .then((data) => {
        console.log('I clicked the google button');
        this.props.loginGoogleUser({ data });
        // Create a new Firebase credential with the token
      /*  const credential =
        firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
        // Login with the credential
        //Actions.main();
        return firebase.auth().signInWithCredential(credential); */
      });
      /*.then((user) => {
        console.log(user);
        this.setState({ user });
        //Actions.main();
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      }); */
  }

  renderRegisterButton() {
    if (this.props.loading) {
      return <Spinner color='blue' />;
    }

    return (
      <Button
      transparent warning
      onPress={this.handleSignInGoogle.bind(this)}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>    No Account? Register! </Text>
      </Button>
    );
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner color='blue' />;
    }

    return (
      <GoogleSigninButton
 style={{ width: 230, height: 48 }}
 size={GoogleSigninButton.Size.Standard}
 color={GoogleSigninButton.Color.Dark}
 onPress={this.handleSignInGoogle.bind(this)}
      />
    );
  }

  render() {
    return (
      <ImageBackground
        source={require('./images/loginpic.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
      <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
      }}
      >
       <Content>
         {this.renderButton()}
         {this.renderRegisterButton()}
       </Content>
     </Container>
     </ImageBackground>
    );
  }
}

//alignSelf: 'center' }
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, data } = auth;

  return { email, password, error, loading, data };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, loginGoogleUser
})(LoginForm);
