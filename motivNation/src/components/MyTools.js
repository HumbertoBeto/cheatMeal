import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Text, Container, Content, View } from 'native-base';
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
    return (
      <Container>
        <Content>
          <View>
            <Button
              block
              large
              iconLeft
              success
              onPress={this.onExerciseDataButtonPressed.bind(this)}
              style={{ marginTop: 10 }}
            >
              <Icon name='clipboard' />
              <Text> Exercise Database </Text>
            </Button>

            <Button
            block
            large
            iconLeft
            onPress={this.onHiitTimerButtonPressed.bind(this)}
            style={{ marginTop: 10 }}
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
              style={{ marginTop: 10 }}
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
              style={{ marginTop: 10 }}
            >
              <Icon name='construct' />
              <Text>Calorie Calculator</Text>
            </Button>

          </View>
        </Content>
      </Container>
    );
  }
}


export default connect(null,
  { exerciseDataPressed, foodDataPressed, hiitTimerPressed, calorieCalcPressed })(MyTools);
