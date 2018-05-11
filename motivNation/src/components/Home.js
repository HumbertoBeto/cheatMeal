import React, { Component } from 'react';
import firebase from 'firebase';
import ProgressBarClassic from 'react-native-progress-bar-classic';
import { GoogleSignin } from 'react-native-google-signin';
import { Dimensions, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon, Text, Container, Content, Thumbnail, View, H2, H1 } from 'native-base';
import { RewardConfirm, MyView } from './common';
import { myGoalsPressed, myToolsPressed, myNationPressed, fetchUserPoints, rewardSwitch, resetPoints } from '../actions';

class Home extends Component {
state = { showModal: false, isHidden: true };


  componentWillMount() {
    //const user = firebase.auth().currentUser;
    const user = GoogleSignin.currentUser();

    if (user != null) {
      const email = user.name;
}
  }

  componentDidMount() {
    this.props.fetchUserPoints();
    this.props.rewardSwitch();
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onAccept() {
    this.props.resetPoints(); //implement this sets points to 0
    this.setState({ showModal: false });
    this.state.isHidden = true;
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
    onPress={this.onNationButtonPressed.bind(this)}
    style={{ marginTop: 20 }}
    >
      <Icon name='contacts' />
      <Text>My Nation</Text>
    </Button>
  );
}

renderRewardButton() {
  return (
    <Button
    block
    large
    iconLeft
    danger
    onPress={() => this.setState({ showModal: !this.state.showModal })}
    style={{ marginTop: 20 }}
    visible={false}
    >
      <Icon name='contacts' />
      <Text>Redeem Cheat Meal!</Text>
    </Button>
  );
}

renderButtonB() {
  return (
    <Button
    block
    large
    iconLeft
    warning
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
      if (this.props.points > 99) {
        console.log('Show the button!');
        this.state.isHidden = false;
      }
    return (
      <ImageBackground
        source={require('./images/mainpic.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
      <Container>
        <Content>
          <View style={{ flex: 1, alignSelf: 'center', marginTop: 15 }}>
            <H1 style={{ color: 'black', fontWeight: 'bold' }}> { user.name } </H1>
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
            {this.renderButtonC()}
            {this.renderButtonB()}
            <MyView hide={this.state.isHidden}>
            {this.renderRewardButton()}
            </MyView>
          </View>
          <RewardConfirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Do you want to redeem your reward?
          </RewardConfirm>
        </Content>
      </Container>
    </ImageBackground>
    );
  }
}

//{this.renderButtonB()}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, points, rewardHidden } = auth;

  return { email, password, error, loading, points, rewardHidden };
};

export default connect(mapStateToProps,
  { myGoalsPressed,
    myNationPressed,
    myToolsPressed,
    fetchUserPoints,
    rewardSwitch,
    resetPoints })(Home);
