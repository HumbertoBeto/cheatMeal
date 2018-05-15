import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
// reference to : https://github.com/michaeljstevens/react-native-stopwatch-timer
class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 30000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }


  getFormattedTime(time) {
      this.currentTime = time;
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }

  toggleStopwatch() {
    this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
  }

  resetTimer() {
    this.setState({ timerStart: false, timerReset: true });
  }

  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  }

  render() {
    return (
      <View style={{ flex: 1, alignSelf: 'center', marginTop: 15 }}>
        <Stopwatch
        laps msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime}
        />
        <TouchableHighlight onPress={this.toggleStopwatch}>
          <Text style={{ fontSize: 30 }}>{!this.state.stopwatchStart ? 'Start' : 'Stop'}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>
        <Timer
        totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime}
        />
        <TouchableHighlight onPress={this.toggleTimer}>
          <Text style={{ fontSize: 30 }}>{!this.state.timerStart ? 'Start' : 'Stop'}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetTimer}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const handleTimerComplete = () => Alert.alert('Good job!finished interval');

const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};

export default TestApp;
