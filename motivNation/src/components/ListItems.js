import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
//import { Button } from 'native-base';
import { goalDelete } from '../actions';
import { CardSection, Confirm, Card, Button } from './common';

class ListItems extends Component {
  state = { showModal: false };

onButtonPress() {

  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onAccept() {
    const { uid } = this.props.goal;
    this.props.goalDelete({ uid });
    this.setState({ showModal: false });
  }

  render() {
    const { goal_name } = this.props.goal;

    return (
      <Card>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            {goal_name}
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Did you complete this goal?
        </Confirm>
      </Card>

    );
  }
}

/* <CardSection>
    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
      <Text>Finished it?</Text>
    </Button>
  </CardSection> */

const styles = {
  titleStyle: {
    flex: 1
  },
  textStyle: {
    textAlign: 'center',
  }
};


export default connect(null, { goalDelete })(ListItems);
