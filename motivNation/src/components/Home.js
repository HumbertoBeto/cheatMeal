import React, { Component } from 'react';
import firebase from 'firebase';
import ProgressBarClassic from 'react-native-progress-bar-classic';
import { GoogleSignin } from 'react-native-google-signin';
import { Dimensions, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon, Text, Container, Content, Thumbnail, View, H2 } from 'native-base';
import { myGoalsPressed, myToolsPressed, myNationPressed, fetchUserPoints } from '../actions';

class Home extends Component {

  componentWillMount() {
    //const user = firebase.auth().currentUser;
    const user = GoogleSignin.currentUser();

    if (user != null) {
      const email = user.name;
}
  }

  componentDidMount() {
    this.props.fetchUserPoints();
  }

  onToolsButtonPressed() {
  this.props.myToolsPressed();
  }

  onNationButtonPressed() {
  this.props.myNationPressed();
  }

onGoalsButtonPressed() {
this.props.myGoalsPressed();
}

renderButtonC() {
  return (
    <Button
    block
    large
    iconLeft
    warning
    onPress={this.onNationButtonPressed.bind(this)}
    style={{ marginTop: 20 }}
    >
      <Icon name='contacts' />
      <Text>My Nation</Text>
    </Button>
  );
}

renderButtonB() {
  return (
    <Button
    block
    large
    iconLeft
    onPress={this.onToolsButtonPressed.bind(this)}
    style={{ marginTop: 20 }}
    >
      <Icon name='construct' />
      <Text>My Tools</Text>
    </Button>
  );
}

  renderButtonA() {
   return (
     <Button
     block
     large
     iconLeft
     success
     onPress={this.onGoalsButtonPressed.bind(this)}
     style={{ marginTop: 20 }}
     >
       <Icon name='clipboard' />
       <Text> My Goals </Text>
     </Button>
   );
 }

    render() {
      //const user = firebase.auth().currentUser;
      const user = GoogleSignin.currentUser();
      //const email = user.name;
    return (
      <ImageBackground
        source={require('./images/mainpic.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
      <Container>
        <Content>
          <View style={{ flex: 1, alignSelf: 'center', marginTop: 15 }}>
            <H2 style={{ color: 'red', fontWeight: 'bold' }}>Meet those GOALS</H2>
            <H2 style={{ color: 'white', fontWeight: 'bold' }}> { user.name }! </H2>
            <View style={{ flex: 1, alignSelf: 'center', marginTop: 10 }}>
              <Thumbnail style={{ flex: 1 }} large source={{ uri: user.photo }} />
              </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <ProgressBarClassic
              progress={this.props.points}
              valueStyle={'balloon'}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            {this.renderButtonA()}
            {this.renderButtonB()}
            {this.renderButtonC()}
          </View>
        </Content>
      </Container>
    </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, points } = auth;

  return { email, password, error, loading, points };
};

export default connect(mapStateToProps,
  { myGoalsPressed, myNationPressed, myToolsPressed, fetchUserPoints })(Home);
