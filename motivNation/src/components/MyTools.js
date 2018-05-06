import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { ImageBackground } from 'react-native';
import { Button, Icon, Text, Container, Content, View, H2, Thumbnail } from 'native-base';
import { exerciseDataPressed,
        foodDataPressed,
        hiitTimerPressed,
        calorieCalcPressed } from '../actions';

class MyTools extends Component {

  onExerciseDataButtonPressed() {
    this.props.exerciseDataPressed();
  }

  onFoodDataButtonPressed() {
    this.props.foodDataPressed();
  }

  onHiitTimerButtonPressed() {
    this.props.hiitTimerPressed();
  }

  onCalorieCalcButtonPressed() {
    this.props.calorieCalcPressed();
  }

  render() {
    const user = GoogleSignin.currentUser();
    return (
      <ImageBackground
        source={require('./images/mainpic.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
      <Container>
        <Content>
        <View style={{ flex: 1, alignSelf: 'center', marginTop: 15 }}>
          <H2 style={{ color: 'black' }}>
          Tools to reach your goals!
          </H2>
        </View>
          <View>
            <Button
              block
              large
              iconLeft
              success
              onPress={this.onExerciseDataButtonPressed.bind(this)}
              style={{ marginTop: 20 }}
            >
              <Icon name='clipboard' />
              <Text> Exercise Database </Text>
            </Button>

            <Button
            block
            large
            iconLeft
            onPress={this.onHiitTimerButtonPressed.bind(this)}
            style={{ marginTop: 50 }}
            >
              <Icon name='construct' />
              <Text>HIIT Timer</Text>
            </Button>

            <Button
              block
              large
              iconLeft
              warning
              onPress={this.onFoodDataButtonPressed.bind(this)}
              style={{ marginTop: 50 }}
            >
              <Icon name='construct' />
              <Text>Food Database</Text>
            </Button>

            <Button
              block
              large
              iconLeft
              danger
              onPress={this.onCalorieCalcButtonPressed.bind(this)}
              style={{ marginTop: 50 }}
            >
              <Icon name='construct' />
              <Text>Calorie Calculator</Text>
            </Button>

          </View>
        </Content>
      </Container>
    </ImageBackground>
    );
  }
}


export default connect(null,
  { exerciseDataPressed, foodDataPressed, hiitTimerPressed, calorieCalcPressed })(MyTools);
